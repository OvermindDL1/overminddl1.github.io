.. title: Bucklescript-Tea Game OverBots Pt.5 - Transformation of Resources
.. slug: bucklescript-tea-game-overbots-pt5-transformation-of-resources
.. date: 2017-05-18 06:32:30 UTC-06:00
.. tags: bucklescript, bucklescript-tea, overbots
.. category: Programming
.. link:
.. description: Bucklescript-Tea Game OverBots Pt.5 - Transformation of Resources
.. type: code
.. author: OvermindDL1

Transformers of Resources are the things that can be enabled or disabled and then either consume, generate, or both a set of resources atomically.  Time to write them.

.. TEASER_END

================
Transformer type
================

I want to use modules for this one as well to show how to define a module that uses a type, and yet you want to store that module 'inside' of that type.  In this case I want a cache of the transformers in the model (that will not be serialized out when we do saving later) for quick calculations, and yet the module needs to reference the model as well to be able to test flags and more.

To accomplish this I will first define a module with an 'unknown' model type in ``src/overbots_types.ml``:

.. code:: ocaml

  module type UTransformer = sig
    type model
    val name : model -> string
    val enabled : model -> bool
    val transformers : model -> resource_transformations
  end

I placed in an unbound type binding named ``model`` that has to be refined later when the signature is reified.  I then change the model type to define a cache and put the transformer in it, refining the signature ``model`` type to the actual model:

.. code:: ocaml

  type cache = {
    transformers : (module UTransformer with type model = model) list;
    resource_deltas : resource_value ResourceMap.t;
  }
  and model = {
    start_realtime : Tea.Time.t;
    current_realtime : Tea.Time.t;
    gametime : Tea.Time.t;
    msgs : game_msg list;
    resource_values : resource_value ResourceMap.t;
    bool_flags : bool_flags;
    int_flags : int_flags;
    float_flags : float_flags;
    cache : cache;
  }

I define the cache, which needs to reference the model, so I 'and' it with the model type so they can be recursive where the model references the cache.  The cache's ``transformers`` entry is a list of transformer modules, I'll clear it anytime I need to rebuild the cache of transformers.  To help typecheck better at location I'm also going to define a specific ``Transformer`` module as well after the model of:

.. code:: ocaml

  module type Transformer = UTransformer with type model = model

Then in a new source file of ``src/overbots_transformers.ml`` and I'll start by defining a couple transformers to test:

.. code:: ocaml

  module BaseSolarGeneration : Transformer = struct
    type model = Overbots_types.model
    let name _model = "Sunlight"
    let enabled _model = true
    let transformers model =
      [ Generate (Energy, float_flag_value BasicSolarPanelSelfGeneration model) ]
  end

  module DrillEnabled : Transformer = struct
    type model = Overbots_types.model
    let name _model = "Internal Drilling"
    let enabled model = bool_flag_exists DrillDeployed model
    let transformers _model = [
      Consume (Energy, 0.5);
      Generate (IronOxide, 0.2);
      Generate (RawSilicon, 0.1);
    ]
  end

And I'll pack them for ease of iteration:

.. code:: ocaml

  let all_transformers = [
    (module BaseSolarGeneration : Transformer);
    (module DrillEnabled);
  ]

And to get a feel for how to process them, let's write a helper that I know I'll need:

.. code:: ocaml

  let enabled_transformers model =
    all_transformers
    |> List.filter (fun (module T : Transformer) ->
        T.enabled model
      )

This just takes the ``all_transformers`` list and filters out all the ones that are not enabled based on the state of the model and returns that new list.

I know I will need to process this in the update tick so let's go ahead and add that scaffolding now:

.. code:: ocaml

  let update_transformations model new_time =
    (model, Tea.Cmd.none)

I'm also going to update the ``init`` function in ``src/overbots.ml`` by adding the cache entry thus changing it all to:

.. code:: ocaml

  let init () =
    let model = {
      start_realtime = -1.0;
      current_realtime = -1.0;
      gametime = 0.0;
      msgs = [];
      resource_values = Overbots_resource.init_resources_values;
      bool_flags = init_bool_flags;
      int_flags = init_int_flags;
      float_flags = init_float_flags;
      cache = {
        transformers = [];
        resource_deltas = Overbots_resource.init_resources_values;
      };
    } in
    (model, Cmd.none)

And lastly to get it getting called if not doing anything yet I'm going to add its call to ``update_state`` in ``src/overbots_update.ml`` to become:

.. code:: ocaml

  let update_state model new_time =
    let time = new_time -. model.start_realtime in
    let model, ta_cmds = Overbots_actions.update_timeactions model time in
    let model, t_cmds = Overbots_transformers.update_transformations model time in
    let model = {model with gametime = time; current_realtime = new_time} in
    (model, Cmd.batch [ta_cmds; t_cmds])

So now it is time to fill out ``update_transformations``, which is the second big system in an incremental game.  This will need to take the listed transformers and get a list of changes to each resource to generate the overall change-per-second, then calculate the ticks up to when the next one fills up then repeat or until the timeslice is elapsed then return.  So I start with just saying how I want to transform the data between the types here to get an idea of how I want to accomplish this:

.. code:: ocaml

  let rec update_transformations model new_time =
    let transformers, resource_deltas =
      if model.cache.transformers == []
      then
        let transformers = enabled_transformers model in
        transformers, calculate_resource_deltas model transformers
      else model.cache.transformers, model.cache.resource_deltas in
      let time_to_next_filled = model.gametime +. calculate_deltas_to_next_filled model resource_deltas in
    let time_slice = min time_to_next_filled new_time in
    let model = apply_resource_deltas model resource_deltas time_slice in
    if time_slice >= new_time
    then
      let gametime = new_time in
      let cache = {model.cache with transformers; resource_deltas} in
      let model = {model with gametime; cache} in
      (model, Tea.Cmd.none)
    else
      let gametime = new_time -. time_slice in
      let cache = {model.cache with transformers = []; resource_deltas = Overbots_resource.init_resources_values} in
      let model = {model with gametime; cache} in
      update_transformations model new_time

So I have a basic structure, not really happy with it, but can alway change it up later, however I need to fulfill three functions then, I'll start with the first of ``calculate_resource_deltas``:

.. code:: ocaml

  let calculate_resource_delta model map (module T : Transformer) =
    List.fold_left (fun map transformation ->
        let rid, delta = transformer_delta transformation in
        let delta = delta +. ResourceMap.find rid map in
        ResourceMap.add rid delta map
      ) map (T.transformers model)

  let calculate_resource_deltas model transformers =
    List.fold_left (calculate_resource_delta model) init_resources_values transformers


That ended up being pretty easy, now to ``calculate_deltas_to_next_filled``:

.. code:: ocaml

  let calculate_delta_to_next_filled model rid delta old_time =
      if delta = 0.0 then old_time else
      let value = ResourceMap.find rid model.resource_values in
      let module R = (val get_resource_module rid) in
      let rmin, rmax = R.get_value_range model in
      if value >= rmax || value <= rmin then old_time else
      let at_time = if delta > 0.0 then (rmax-.value) /. delta else (value-.rmin) /. delta in
      if at_time > 0.0 && at_time < old_time
      then at_time
      else old_time

  let calculate_deltas_to_next_filled model resource_deltas =
    ResourceMap.fold (calculate_delta_to_next_filled model) resource_deltas max_float

So this will get the next time when a storage is emptied/capped.  And lastly the function ``apply_resource_deltas``:

.. code:: ocaml

  let apply_resource_deltas model resource_deltas cur_time =
    let time_delta = cur_time -. model.gametime in
    ResourceMap.fold (fun rid delta model ->
        let delta = delta *. time_delta in
        match add_resource_value rid delta model with
        | ValueTooLow -> model
        | ValueTooHigh (model, _overrage) -> model
        | ValueSuccess model -> model
      ) resource_deltas model

And with that it compiles again.  Plenty of opportunity to optimize but it is fine for now.

I also want to see what the delta is, hence the main reason I cached it, so I'm changing the ``view_resource`` function in ``src/overbots_view.ml`` to be:

.. code:: ocaml

  let view_resources_category_resource model (rid, name, id) =
    let r = Overbots_resource.get_resource_module rid in
    let module R = (val r) in
    if not (R.shown model) then [] else
    let value = format_value (Overbots_resource.get_resource_value rid model) in
    let delta = format_value (ResourceMap.find rid model.cache.resource_deltas) in
    [ div
        [ class' ("resource resource-"^id) ]
        [ div [ class' "resource-name" ] [ text name ]
        ; div [ class' "resource-value" ] [ text value ]
        ; div [ class' "resource-delta" ] [ text delta; text "/s" ]
        ]
    ]

And adding CSS for the ``.resource-delta`` in the ``scss/overbots.scss`` file just under the ``.resource-value`` declaration of:

.. code:: scss

  .resource-delta {
    display: flex;
    flex: 1;
    font-style: italic;
    padding-left: 8px;
  }

And lastly to get the cache cleared as needed, let's make a helper function at the bottom of ``src/overbots_resource.ml`` to do that:

.. code:: ocaml

  let init_cache = {
    transformers = [];
    resource_deltas = init_resources_values;
  }

  let reset_cache model =
    let cache = init_cache in
    {model with cache}

May as well update ``init`` to use it:

.. code:: ocaml

  let init () =
    let model = {
      start_realtime = -1.0;
      current_realtime = -1.0;
      gametime = 0.0;
      msgs = [];
      resource_values = Overbots_resource.init_resources_values;
      bool_flags = init_bool_flags;
      int_flags = init_int_flags;
      float_flags = init_float_flags;
      cache = Overbots_transformers.init_cache;
    } in
    (model, Cmd.none)

And let's call it from the action performer in ``src/overbots_actions.ml`` where I changed ``perform_actions`` to be:

.. code:: ocaml

  let perform_actions model actions =
    List.fold_left perform_action model actions
    |> reset_cache

And let's get unfolding the solar panels to generate power, so I changed ``button_actions`` in ``src/overbots_buttons.ml`` to be:

.. code:: ocaml

  let button_actions _model = function
    | UnfoldSolarPanels -> [ActionSetFloatFlag (BasicSolarPanelSelfGeneration, 1.0); ActionSetBoolFlag SolarPanelsGenerating; ActionClearBoolFlag SolarPanelsReadyToUnfold; ActionAddMsg "Energy is now being generated, now to acquire simple minerals by drilling"]
    | DeployDrill -> [ActionSetBoolFlag DrillDeployed; ActionAddMsg "Now that I've started acquiring resources I need to activate my internal refineries to prepare the resources for use"]

At this point the basics of everything needed is done.  Can now start adding new functionality, new buttons, resources, everything as desired.  I've already tweaked a couple of numbers but nothing big.  More is soon-coming.

======
Result
======

You can access the output of this post at `Overbots Pt5`_.

And the source is on the `Overbots Github Pt5`_.

Check out this entire series via the `Overbots tag`_.

.. _`Overbots Pt5`: dev.html
.. _`Overbots Github Pt5`: https://github.com/OvermindDL1/overbots/tree/pt5
.. _`Overbots tag`: link://tag/overbots
