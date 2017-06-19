.. title: Bucklescript-Tea Game OverBots Pt.4 - Actions
.. slug: bucklescript-tea-game-overbots-pt4-actions
.. date: 2017-05-17 06:55:42 UTC-06:00
.. tags: bucklescript, bucklescript-tea, overbots
.. category: Programming
.. link:
.. description: Bucklescript-TEA tutorial game OverBots Pt.4 - Actions
.. type: code
.. author: OvermindDL1

Today I'm going to make this actually do something now, thus actions and buttons!

.. TEASER_END

To prepare for some of the changes later, I'm adding more helpers for the flags, so ``src/overbots_flags.ml`` is changed to become:

.. code:: ocaml
  :number-lines:

  open Overbots_types

  let bool_flag_exists fid model =
    BoolFlagSet.mem fid model.bool_flags

  let bool_flag_set fid model =
    let bool_flags = BoolFlagSet.add fid model.bool_flags in
    {model with bool_flags}

  let bool_flag_reset fid model =
    let bool_flags = BoolFlagSet.remove fid model.bool_flags in
    {model with bool_flags}


  let int_flag_value fid model =
    IntFlagMap.find fid model.int_flags

  let int_flag_set fid value model =
    let int_flags = IntFlagMap.add fid value model.int_flags in
    {model with int_flags}

  let int_flag_add fid delta model =
    let value = delta + int_flag_value fid model in
    int_flag_set fid value model


  let float_flag_value fid model =
    FloatFlagMap.find fid model.float_flags

  let float_flag_set fid value model =
    let float_flags = FloatFlagMap.add fid value model.float_flags in
    {model with float_flags}

  let float_flag_add fid delta model =
    let value = delta +. float_flag_value fid model in
    float_flag_set fid value model

As well as I added a ``float`` flags as well with appropriate changes to the model and other necessary helpers and areas:

.. code:: ocaml

  type float_flag =
    | BasicSolarPanelSelfGeneration
  module FloatFlagMap = Map.Make(struct type t = float_flag let compare = compare end)
  type float_flags = float IntFlagMap.t
  let init_float_flags =
    let open FloatFlagMap in
    empty
    |> add BasicSolarPanelSelfGeneration 0.0

I edited the ``int`` flags to become:

.. code:: ocaml

  type int_flag =
    | TimeActionIdx

And I changed the ``bool_flags`` to be:

.. code:: ocaml

  type bool_flag =
    | InternalPowerEnabled
    | SolarPanelsReadyToUnfold
    | SolarPanelsGenerating
    | DrillDeployed

I also changed the resources to test for a flag on whether they should be shown or not:

.. code:: ocaml

  open Overbots_flags

  module Energy : Resource = struct
    let id = Energy
    let shown model = bool_flag_exists InternalPowerEnabled model
    let get_value_range _model = 0.0, 100.0
  end

  module IronOxide : Resource = struct
    let id = IronOxide
    let shown model = bool_flag_exists DrillDeployed model
    let get_value_range _model = 0.0, 10.0
  end

  module RawSilicon : Resource = struct
    let id = RawSilicon
    let shown model = bool_flag_exists DrillDeployed model
    let get_value_range _model = 0.0, 2.0
  end

====
Time
====

I now need to add in some time support, so I start by storing it on the model:

.. code:: ocaml

  type model = {
    start_realtime : Tea.Time.t;
    current_realtime : Tea.Time.t;
    gametime : Tea.Time.t;
    msgs : game_msg list;
    resource_values : resource_value ResourceMap.t;
    bool_flags : bool_flags;
    int_flags : int_flags;
    float_flags : float_flags;
  }

And adjusting the ``init`` to become:

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
    } in
    (model, Cmd.none)

And to update the time I need to handle it, so first a message, I change the ``msg`` type to become:

.. code:: ocaml

  type msg =
    | UpdateFrame of Tea.AnimationFrame.t
  [@@bs.deriving {accessors}]

I'm leaving the deriving accessors on there to auto-create a function that generates those messages, as you see used in the ``subscriptions``, which is now changed to:

.. code:: ocaml

  let subscriptions _model =
    Sub.batch [
      AnimationFrame.every updateFrame;
    ]

So on every tick of a frame in the browser it will call the ``UpdateFrame`` message with the new time data (I should probably give an option for slower update rates for mobile devices or so), and to handle it I'm changing ``update`` to become:

.. code:: ocaml

  let update model = function
    | UpdateFrame timeinfo ->
      let time = timeinfo.time *. 0.001 in
      let model =
        if model.start_realtime >= 0.0 then
          model
        else
          {model with start_realtime = time; current_realtime = time; gametime = 0.0}
      in Overbots_update.update_state model time

So I massage the milliseconds to seconds and pass it to an ``update_state`` function, which I define in a new file of ``src/overbots_update.ml`` with the contents of:

.. code:: ocaml

  open Tea
  open Overbots_types


  let update_state model new_time =
    (model, Cmd.none)

=======
Actions
=======

Actions are one of the two major systems in an incremental games, these are what is done when a button is clicked or after certain times or other things or so.  It needs to be a variant of actions that can be performed, so let's get started with a basic set of types and how to process them, so in the file ``src/overbots_actions.ml`` put:

.. code:: ocaml
  :number-lines:

  open Overbots_types
  open Overbots_resource
  open Overbots_flags

  type action =
    | NoAction
    | ActionAddMsg of string
    | ActionAddResourceAmount of resource_flag * float
    | ActionSetBoolFlag of bool_flag
    | ActionClearBoolFlag of bool_flag
    | ActionSetIntFlag of int_flag * int
    | ActionAddIntFlag of int_flag * int
    | ActionSetFloatFlag of float_flag * float
    | ActionAddFloatFlag of float_flag * float

  type actions = action list



  let perform_action model = function
    | NoAction -> model
    | ActionAddMsg msg -> {model with msgs = TimeMsg (model.gametime, msg) :: model.msgs} (* TODO:  Need to make a msgs area *)
    | ActionAddResourceAmount (rid, amt) ->
      begin match add_resource_value rid amt model with
        | ValueTooLow -> model
        | ValueTooHigh (model, _left_over) -> model
        | ValueSuccess model -> model
      end
    | ActionSetBoolFlag flag -> bool_flag_set flag model
    | ActionClearBoolFlag flag -> bool_flag_reset flag model
    | ActionSetIntFlag (flag, value) -> int_flag_set flag value model
    | ActionAddIntFlag (flag, delta) -> int_flag_add flag delta model
    | ActionSetFloatFlag (flag, value) -> float_flag_set flag value model
    | ActionAddFloatFlag (flag, delta) -> float_flag_add flag delta model

  let perform_actions model actions =
    List.fold_left perform_action model actions

First thing I want to handle are time based actions, so with the type of:

.. code:: ocaml

  type timeaction = {
    at : Tea.Time.t;
    actions : actions;
  }

I create some timeactions of:

.. code:: ocaml

  let init_timeaction at actions = {at; actions}

  let timeactions = [|
  init_timeaction 0.0 [ActionAddResourceAmount (Energy, 100.0)];
  init_timeaction 1.0 [ActionAddMsg "Hmm, what is going on?"];
  init_timeaction 3.0 [ActionSetBoolFlag InternalPowerEnabled; ActionSetFloatFlag (BasicSolarPanelSelfGeneration, 100.0); ActionAddMsg "I appear to be getting power through an umbillica interface, however the data connection across it appears to be down..."];
  init_timeaction 5.0 [ActionAddMsg "Running diagnostics..."];
  init_timeaction 7.0 [ActionAddMsg "Minor damage detected, appears to be old micrometeroite impacts, armor has deflected damage from internal systems"];
  init_timeaction 10.0 [ActionAddMsg "Supposed to be getting instructions from the umbillica, and the activation of power from it signifies that I am being activated to work"];
  init_timeaction 12.5 [ActionAddMsg "However, no information has come down, likely the primary craft has been damaged by micrometeroites as well, hence its inability to communicate instructions"];
  init_timeaction 15.0 [ActionAddMsg "Fallback instructions are to acquire resources and prepare for settlement and/or re-acquisition"];
  init_timeaction 20.0 [ActionAddMsg "Velocity sensors are showing that acceleration has not occurred, which should already have happened if I've been reactived"];
  init_timeaction 25.0 [ActionAddMsg "Accelleration is now occurring..."];
  init_timeaction 30.0 [ActionAddMsg "Vector is not changing, which indicates orbital entry is not being accounted for..."];
  init_timeaction 35.0 [ActionAddMsg "Most probable explanation is that the accelleration is from the primary ship entering a planetery atmosphere without the engines firing"];
  init_timeaction 40.0 [ActionAddMsg "The primary ship does have a breaking system that can be deployed in the event of engine failure, the acceleration profile indicates that is what is occuring"];
  init_timeaction 50.0 [ActionAddMsg "Waiting to be deployed..."];
  init_timeaction 60.0 [ActionSetFloatFlag (BasicSolarPanelSelfGeneration, 0.0); ActionAddMsg "Confirmed, deployment has started, primary ship has launched me out in the landing assembly, umbillica is detached from the primary ship"];
  init_timeaction 70.0 [ActionAddMsg "Acceleration profile indicates the landing assembly parachutes have been deployed"];
  init_timeaction 80.0 [ActionSetBoolFlag SolarPanelsReadyToUnfold;ActionAddMsg "Touchdown!  Landing assembly is unfolding.  I now need to deploy my solar energy collectors."];
  |]

And to process those I write:

.. code:: ocaml

  let update_timeactions model time =
    let open Tea in
    let idx = int_flag_value TimeActionIdx model in
    let {at; actions} = timeactions.(idx) in
    if time < at then (model, Cmd.none) else
    let model = perform_actions model actions in
    let model = int_flag_add TimeActionIdx 1 model in
    (model, Cmd.none)

Which is called from the main `update_state` function by making it this:

.. code:: ocaml

  let update_state model new_time =
    let time = new_time -. model.start_realtime in
    let model, ta_cmds = Overbots_actions.update_timeactions model time in
    let model = {model with gametime = time; current_realtime = new_time} in
    (model, Cmd.batch [ta_cmds])

What this does is just compare the ``timeactions`` in order as they get 'used' and run their actions as necessary, so the consequence of this is that the interface starts bare and it starts printing text, a little story of an AI terraformer in the midst of an accidental landing, the energy does not appear until the second message, but you do not see any changes happening to it yet until we make the transformers, which will likely be the next post.

=======
Buttons
=======

Now let's make the buttons as they are the manual form of actions.  To define them I'll make a variant as usual in the types file of ``src/overbots_types.ml`` but I am going to use the variant form that I described in the resources posts that I ended up not using as I went for modules instead, I could do the same thing here, but in effort to show multiple styles (not necessarily the best for a given task) I'll use the variant form here:

.. code:: ocaml

  type button_id =
    | UnfoldSolarPanels
    | DeployDrill

And I'll make a new file to handle its code of ``src/overbots_buttons.ml``:

.. code:: ocaml
  :number-lines:

  open Overbots_types
  open Overbots_actions
  open Overbots_flags
  open Overbots_resource



  let displayed_buttons = [
    ("Perform", "perform", [
      UnfoldSolarPanels, "unfold-solar-panels", "Unfold Solar Panels";
      DeployDrill, "deploy-drill", "Deploy Drill";
      ]);
  ]


  let button_cost _model = function
    | UnfoldSolarPanels -> [Energy, 100.0]
    | DeployDrill -> [Energy, 50.0]


  let button_enabled model = function
    | UnfoldSolarPanels -> not (bool_flag_exists SolarPanelsGenerating model) && bool_flag_exists SolarPanelsReadyToUnfold model
    | DeployDrill -> not (bool_flag_exists DrillDeployed model) && bool_flag_exists SolarPanelsGenerating model


  let button_temporarily_disabled model = function
    | DeployDrill -> (cost_resources (button_cost model DeployDrill) model) == None
    | _button -> false


  let button_actions _model = function
    | UnfoldSolarPanels -> [ActionSetBoolFlag SolarPanelsGenerating; ActionClearBoolFlag SolarPanelsReadyToUnfold; ActionAddMsg "Energy is now being generated, now to acquire simple minerals by drilling"]
    | DeployDrill -> [ActionSetBoolFlag DrillDeployed; ActionAddMsg "Now that I've started acquiring resources I need to active my internal refineries to prepare the resources for use"]


  let perform_button orig_model id =
    let open Tea in
    if not (button_enabled orig_model id) || (button_temporarily_disabled orig_model id) then (orig_model, Cmd.none) else
      match cost_resources (button_cost orig_model id) orig_model with
      | None -> (orig_model, Cmd.none)
      | Some model ->
        let model = perform_actions model (button_actions model id) in
        match id with
        | _ -> (model, Cmd.none)

I created the button variant in the types and here instead of modules I use a variety of function calls that match on the types and I call them to do the actions.  This ends up compiling to a case statement in javascript so about on par with a function call too.  I set up a few things to have buttons be enabled or not, to show disabled (like if short on resources), and what actions to perform when clicked, and I also left a mostly empty match context at the bottom of perform_button so I can do something with a button click that is not handleable by actions if the case to do so arrives.

Since buttons will be visible on the page I made another ``displayed_buttons`` to hold how it shows, I'm adding categories to them as well as they can be quite useful later, might make tabs or something on the page for them, but for now I'll display it similar to how I display the resources so I change ``view_buttons`` to this:

.. code:: ocaml

  let view_button model (bid, id, name) =
    let open Overbots_buttons in
    if button_enabled model bid then
      [ button
          [ onClick (ActionButtonClicked bid)
          ; Attributes.disabled (button_temporarily_disabled model bid)
          ; class' ("action-button action-button-" ^ id)
          ] [ text name ]
      ]
    else
      []

  let view_buttons_category model (name, id, buttons) =
    let children = List.map (view_button model) buttons |> List.flatten in
    if children == [] then [] else
    let children = div [ class' "category-title" ] [ text name ] :: children in
    [ div [ class' ("button-category button-category-"^id) ] children ]

  let view_buttons model =
    List.map (view_buttons_category model) Overbots_buttons.displayed_buttons
    |> List.flatten

And I know CSS is boring, but here is the new css for ``.container-actions`` for completion:

.. code:: scss

  .container-actions {
    flex: 0 0 256px;
    order: 2;

    .action-category {
      display: flex;
      flex-direction: column;
    }

    .category-title {
      border-bottom: solid 1px #000;
      flex: 0;
      font-weight: bold;
      text-align: center;
    }

    .action-button {
      flex: 1;
    }
  }

And with this now done with the first of two major systems in an incremental game, the next post will be about the second, which is Transformation of Resources.  The example takes about 80 seconds to run to completion considering the mini-story built above in ``timeactions``, but it shows how it all works.

======
Result
======

You can access the output of this post at `Overbots Pt4`_.

And the source is on the `Overbots Github Pt4`_.

Check out this entire series via the `Overbots tag`_.

.. _`Overbots Pt4`: dev.html
.. _`Overbots Github Pt4`: https://github.com/OvermindDL1/overbots/tree/pt4
.. _`Overbots tag`: link://tag/overbots
