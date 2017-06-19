.. title: Bucklescript-Tea Game OverBots Pt.6 - Serialization
.. slug: bucklescript-tea-game-overbots-pt6-serialization
.. date: 2017-05-19 06:27:22 UTC-06:00
.. tags: bucklescript, bucklescript-tea, overbots
.. category: Programming
.. link:
.. description: Bucklescript-Tea Game OverBots Pt.6 - Serialization
.. type: code
.. author: OvermindDL1

Waiting the 80 seconds on a new game every time I test is slightly irritating, so now let's get serialization, and thus the ability to save and load built.

.. TEASER_END

To start with I want to introduce two new messages to the ``msg`` variant, one for handling a load message, and one for handling a save message, thus the ``msg`` variant now becomes:

.. code:: ocaml

  type msg =
    | UpdateFrame of Tea.AnimationFrame.t
    | ActionButtonClicked of button_id
    | LoadData of string
    | SaveData
  [@@bs.deriving {accessors}]

The ``LoadData`` head holds the input string of where the data will be stored, ``SaveData`` will just save out the current model.

I also want to prune messages, both to keep from overloading the player and to keep from overloading the storage, although I could 'key' them out, that may be a later goal, for now I'm changing ``src/overbots_update.ml`` to become this:

.. code:: ocaml
  :number-lines:

  open Tea
  open Overbots_types

  let max_msg_count = 20

  let pruneOldMsgs msgs =
    let rec aux i acc = function
      | [] -> List.rev acc
      | h :: t -> if i = 0 then List.rev acc
        else aux (i-1) (h :: acc) t  in
    aux max_msg_count [] msgs


  let update_state model new_time =
    let time = new_time -. model.start_realtime in
    let model, ta_cmds = Overbots_actions.update_timeactions model time in
    let model, t_cmds = Overbots_transformers.update_transformations model time in
    let msgs = pruneOldMsgs model.msgs in
    let model = {model with gametime = time; current_realtime = new_time; msgs} in
    (model, Cmd.batch [ta_cmds; t_cmds])

I can always configure the max message count via an intflag or something if I want, but I'll leave it at 20 for now to test with the intro messages that it actually works, which it does.

I also want to clean up the resource storage a touch to get the names and css selectors inside the modules, so I'm updating the module signature and the modules to:

.. code:: ocaml

  module type Resource = sig
    val id : resource_flag
    val shown : model -> bool
    val get_value_range : model -> resource_value * resource_value
    val idname : string
    val name : model -> string
  end


  module Energy : Resource = struct
    let id = Energy
    let shown model = bool_flag_exists InternalPowerEnabled model
    let get_value_range _model = 0.0, 100.0
    let idname = "energy"
    let name _model = "Energy"
  end

  module IronOxide : Resource = struct
    let id = IronOxide
    let shown model = bool_flag_exists DrillDeployed model
    let get_value_range _model = 0.0, 10.0
    let idname = "ironoxide"
    let name _model = "Iron Oxide"
  end

  module RawSilicon : Resource = struct
    let id = RawSilicon
    let shown model = bool_flag_exists DrillDeployed model
    let get_value_range _model = 0.0, 2.0
    let idname = "rawsilicon"
    let name _model = "RawSilicon"
  end

As well as I am updating the helpers to access those and generating the display data from the modules as well:

.. code:: ocaml

  let all_resources = [
    (module Energy : Resource);
    (module IronOxide);
    (module RawSilicon);
  ]

  let id_resource_mapping =
    List.fold_left (fun map r ->
        let module R = (val r : Resource) in
        ResourceMap.add R.id r map
      ) ResourceMap.empty all_resources

  module StringMap = Map.Make(String)
  let idname_resource_mapping =
    List.fold_left (fun map r ->
        let module R = (val r : Resource) in
        StringMap.add R.idname r map
      ) StringMap.empty all_resources


  let get_resource_module rid =
    ResourceMap.find rid id_resource_mapping

  let get_resource_module_by_idname idname =
    if StringMap.mem idname idname_resource_mapping
    then Some (StringMap.find idname idname_resource_mapping)
    else None

  let displayed_resources = [
    ("", "global", [
        get_resource_module Energy;
      ]);
    ("Raw", "raw", [
        get_resource_module IronOxide;
        get_resource_module RawSilicon;
      ]);
  ]

  let init_resources_values =
    let resource_folder acc r =
      let module R = (val r : Resource) in
      ResourceMap.add R.id 0.0 acc in
    List.fold_left resource_folder ResourceMap.empty all_resources


Consequently I need to update the resource view in ``src/overbots_view.ml`` as well to access the module directly too:

.. code:: ocaml

  let view_resources_category_resource model r =
    let module R = (val r : Overbots_resource.Resource) in
    let rid = R.id in
    if not (R.shown model) then [] else
    let value = format_value (Overbots_resource.get_resource_value rid model) in
    let delta = format_value (ResourceMap.find rid model.cache.resource_deltas) in
    [ div
        [ class' ("resource resource-"^R.idname) ]
        [ div [ class' "resource-name" ] [ text (R.name model) ]
        ; div [ class' "resource-value" ] [ text value ]
        ; div [ class' "resource-delta" ] [ text delta; text "/s" ]
        ]
    ]

  let view_resources_categories model (name, id, resources) =
    let children = List.map (view_resources_category_resource model) resources |> List.flatten in
    if children == [] then [] else
    let children = if name = "" then children else div [ class' "category-title" ] [ text name ] :: children in
    [ div [ class' ("resource-category resource-category-"^id) ] children ]

  let view_resources model =
    List.map (view_resources_categories model) Overbots_resource.displayed_resources
    |> List.flatten

=============
Serialization
=============

Now the format I will serialize in is quite wide to choose from.  I could do something binary (potentially encoded as base64).  I could do JSON (potentially compressed and then encoded as base64).  A many variety of other options are open as well, protobuffers, msgpack, etc... etc...

I will choose an open JSON format for this, not encoded or packed for ease of seeing how everything works as this is a demo project, plus it will show how to use the encoders and decoders for JSON in Bucklescript TEA.  There are other JSON libraries, including ones that can dynamically generate the encoders/decoders, such as deriving yojson, but I'm trying to minimize the number of external libraries used.

First I will make the interface that I will want to call, meaning I also need to choose how I want to store it, which will be in the browser's local storage for now, so using the messages I created earlier to save and load, I'll change the ``init`` function in ``src/overbots.ml`` to be this:

.. code:: ocaml

  let serialized_name = "Overbots"

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
      cache = Overbots_resource.init_cache;
    } in
    let load_data_task = Ex.LocalStorage.getItem serialized_name in
    let open Tea.Result in
    (model, Cmd.batch [
        Tea_task.attemptOpt (function | Ok s -> Some (LoadData s) | Error _e -> None) load_data_task;
      ])

I added/changed everything after the model definition, basically I grab a task for TEA's local storage to get an item using the specified key, which I then attempt using Tea_task with the optional setup, meaning I return an option of the message I want to return, if ``None`` it calls no message, otherwise it calls the message when it is done, in this case passing the results back to us via a ``LoadData`` message.

I'll also want to have an autosave every, say, 10 seconds for now, so I change my subscriptions to be this:

.. code:: ocaml

  let subscriptions _model =
    Sub.batch [
      AnimationFrame.every updateFrame;
      Time.every (10.0 *. Time.second) (fun _ -> SaveData)
    ]

So I added the ``Time.every`` to happen every 10 seconds (might make it configurable on the model later) then ignore the time it gives us and instead just send us back a ``SaveData`` message.  To handle both of these new messages I add these cases to the end of the ``update`` method:

.. code:: ocaml

    | LoadData "" -> (model, Cmd.none)
    | LoadData json_string ->
      let open Tea.Result in
      begin match Overbots_serialization.model_of_json_string json_string with
        | Error _e -> (model, Tea_task.performOpt (fun _ -> None) (Ex.LocalStorage.setItem serialized_name ""))
        | Ok model ->
          (model, Cmd.none)
      end
    | SaveData ->
      let json_string = Overbots_serialization.json_string_of_model 0 model in
      (model, Tea_task.performOpt (fun _ -> None) (Ex.LocalStorage.setItem serialized_name json_string))

The first ``LoadData ""`` case is just for if the local storage retuns nothing.  The second I then pass the string to a ``Overbots_serialization.model_of_json_string`` call, testing the result if an error or ok, if an error I clear the existing local storage item and otherwise do nothing (corrupted data after all), if ok then I return the new module and otherwise do nothing else, the state of everything will instantly update.

The ``SaveData`` case just passes the model to ``Overbots_serialization.json_string_of_model`` and gets a string of the json back out, of which I just store that into the local storage and return, easy peasy here.

====
JSON
====

Now the JSON Decoders/Encoders in TEA are entirely declarative, fully type safe and returns a success or failure depending, and how it failed if it failed.  Let's start by making the encoder, so in ``src/overbots_serialization.ml`` I place in at the top:

.. code:: ocaml
  :number-lines:

  open Overbots_types

  module E = Tea.Json.Encoder
  module D = Tea.Json.Decoder


  let json_of_gamemsg = function
    | TimeMsg (time, msg) ->
      E.object_ [
        "time", E.float time;
        "msg", E.string msg;
      ]

  let apply_on_tuple2 fun0 fun1 (v0, v1) =
    (fun0 v0, fun1 v1)

  let string_of_resource_flag rid =
    let open Overbots_resource in
    let module R = (val get_resource_module rid) in
    R.idname

  let string_of_bool_flag = function
    | InternalPowerEnabled -> "InternalPowerEnabled"
    | SolarPanelsReadyToUnfold -> "SolarPanelsReadyToUnfold"
    | SolarPanelsGenerating -> "SolarPanelsGenerating"
    | DrillDeployed -> "DrillDeployed"

  let string_of_int_flag = function
    | TimeActionIdx ->  "TimeActionIdx"


  let string_of_float_flag = function
    | BasicSolarPanelSelfGeneration -> "BasicSolarPanelSelfGeneration"


  let json_string_of_model indent model =
    E.object_ [
      "start_realtime", E.float model.start_realtime;
      "current_realtime", E.float model.current_realtime;
      "gametime", E.float model.gametime;
      "msgs", E.list (List.map json_of_gamemsg model.msgs);
      "resource_values", ResourceMap.bindings model.resource_values |> List.map (apply_on_tuple2 string_of_resource_flag E.float) |> E.object_;
      "bool_flags", BoolFlagSet.elements model.bool_flags |> List.map (fun bf -> bf|>string_of_bool_flag|>E.string) |> E.list;
      "int_flags", IntFlagMap.bindings model.int_flags |> List.map (apply_on_tuple2 string_of_int_flag E.int) |> E.object_;
      "float_flags", FloatFlagMap.bindings model.float_flags |> List.map (apply_on_tuple2 string_of_float_flag E.float) |> E.object_;
      (* "cache" is not serialized *)
    ] |> E.encode indent

Now that is quite a chunk of code.  Basically it starts at the bottom where I pass in the indention for the json (so I can choose to pack it tightly or not) and the model.  I pass the encoder to ``E.encode``, the encoder is the line starting with the ``E.object_``, which makes a JSON object.  It takes a list of tuples, the first element is the string name, the second is another encoder, so for ``start_realtime`` the encoder is the ``E.float model.start_realtime`` part, basically it parses out ``model.start_realtime`` as a float to the JSON.  The other proceed as such.  For things like the ``resource_values`` I just get the bindings of the map, map over those to transform them to the proper tuple, and return that to an object too.

In essence a fairly new game generates a JSON like:

.. code:: json
  :number-lines:

  { "start_realtime": 1495145728.733,
    "current_realtime": 1495145738.7120001,
    "gametime": 9.979000091552734,
    "msgs": [{"time":6.996999979019165,"msg":"Minor damage detected, appears to be old micrometeroite impacts, armor has deflected damage from internal systems"},{"time":4.996999979019165,"msg":"Running diagnostics..."},{"time":2.996000051498413,"msg":"I appear to be getting power through an umbillica interface, however the data connection across it appears to be down..."},{"time":0.9800000190734863,"msg":"Hmm, what is going on?"}],
    "resource_values": {
      "energy":100,
      "ironoxide":0,
      "rawsilicon":0
      },
    "bool_flags": ["InternalPowerEnabled"],
    "int_flags": {"TimeActionIdx":5},
    "float_flags": {"BasicSolarPanelSelfGeneration":100}
  }

Then to decode the json back into the local data structure I define some decoders:

.. code:: ocaml

  let decoder_of_gamemsg =
    D.oneOf [
      D.map2 timeMsg (D.field "time" D.float) (D.field "msg" D.string);
    ]

  let decoder_of_resource_values =
    let open Overbots_resource in
    D.keyValuePairs D.float
    |> D.map (List.fold_left (fun map (sid, value) -> match get_resource_module_by_idname sid with
        | None -> map
        | Some r ->
          let module R = (val r : Resource) in
          ResourceMap.add R.id value map
      ) init_resources_values)


  let decoder_of_bool_flags =
    D.list (D.string |> D.andThen (function
        | "InternalPowerEnabled" -> D.succeed InternalPowerEnabled
        | "SolarPanelsReadyToUnfold" -> D.succeed SolarPanelsReadyToUnfold
        | "SolarPanelsGenerating" -> D.succeed SolarPanelsGenerating
        | "DrillDeployed" -> D.succeed DrillDeployed
        | str -> D.fail ("Unknown bool_flag of: " ^ str)
      )) |> D.map (List.fold_left (fun set flag -> BoolFlagSet.add flag set) BoolFlagSet.empty )


  let decoder_of_int_flags =
    let open Tea.Result in
    D.keyValuePairs D.int
    |> D.andThen (fun lst ->
        match List.fold_left (fun rmap (id, value) ->
            match rmap with
            | Error _ as e -> e
            | Ok map -> match id with
              | "TimeActionIdx" -> Ok (IntFlagMap.add TimeActionIdx value map)
              | unknown -> Error ("Unknown Int Flag: " ^ unknown)
          ) (Ok init_int_flags) lst with
        | Error e -> D.fail e
        | Ok r -> D.succeed r
    )


  let decoder_of_float_flags =
    let open Tea.Result in
    D.keyValuePairs D.float
    |> D.andThen (fun lst ->
        match List.fold_left (fun rmap (id, value) ->
            match rmap with
            | Error _ as e -> e
            | Ok map -> match id with
              | "BasicSolarPanelSelfGeneration" -> Ok (FloatFlagMap.add BasicSolarPanelSelfGeneration value map)
              | unknown -> Error ("Unknown Float Flag: " ^ unknown)
          ) (Ok init_float_flags) lst with
        | Error e -> D.fail e
        | Ok r -> D.succeed r
      )


  let model_of_json_string json_string =
    let construct_model start_realtime current_realtime gametime msgs resource_values bool_flags int_flags float_flags =
      let cache = Overbots_resource.init_cache in
      {start_realtime; current_realtime; gametime; msgs; resource_values; bool_flags; int_flags; float_flags; cache} in
    let decoder = D.map8 construct_model
      (D.field "start_realtime" D.float)
      (D.field "current_realtime" D.float)
      (D.field "gametime" D.float)
      (D.field "msgs" (D.list decoder_of_gamemsg))
      (D.field "resource_values" decoder_of_resource_values)
      (D.field "bool_flags" decoder_of_bool_flags)
      (D.field "int_flags" decoder_of_int_flags)
      (D.field "float_flags" decoder_of_float_flags)
    in D.decodeString decoder json_string

Bit more verbose, but that is because I'm mapping the string constants of the variants to their types, but it is otherwise fairly straightforward.  A lot of the cruft in things like ``decoder_of_float_flags`` is just error handling, basically just failing the whole parse if something does not perfectly match in name.  Do notice that I'm building up the flags and resources based on the built-in data, so any missing get their default values, that means that I can load older saves in as long as I only add stuff without much issue.

At this point it runs, and I can now refresh the page all I like without losing the data.  This will make building up more concepts to be far far more easy to test.  :-)

You can clear the save by clearing your local storage in the browser for now (then reloading before it autosaves again) or using an incognito window or so.  You can clear the local storage quickly from the browser console by just typing ``window.localStorage.Overbots = ""; window.history.go()`` or something similar.

======
Result
======

You can access the output of this post at `Overbots Pt6`_.

And the source is on the `Overbots Github Pt6`_.

Check out this entire series via the `Overbots tag`_.

.. _`Overbots Pt6`: dev.html
.. _`Overbots Github Pt6`: https://github.com/OvermindDL1/overbots/tree/pt6
.. _`Overbots tag`: link://tag/overbots
