.. title: Bucklescript-Tea Game OverBots Pt.3 - Game Types
.. slug: bucklescript-tea-game-overbots-pt3-game-types
.. date: 2017-05-16 07:08:02 UTC-06:00
.. tags: bucklescript, bucklescript-tea, overbots
.. category: Programming
.. link:
.. description: Bucklescript-TEA tutorial game OverBots Pt.3 - Game Types
.. type: code
.. author: OvermindDL1

Welcome back to developing OverBots with Bucklescript-TEA!

This time we are going to follow a 'type-driven' style of design.  This is pretty foreign in the javascript world due to limitations of the javascript language, but it is an excellent methodology to help you figure out the design of your application before you ever write executable code, thus helping you to do it properly the first time.

.. TEASER_END

However, considering this game has no real design behind it, this may of course change a few times, but over the course of this post let's see if we can help figure out what that design should be first and foremost.  :-)

==================
Type-Driven Design
==================

When you have a static type system to help enforce types it is good to begin a program design by designing the types instead of the code as the code will wrap naturally around how the types are designed instead of trying to fit types into a dynamic code flow that can change underneath you with little or no warning.  This project will follow this style of designing the type hierarchies first before the code that uses the types.

.. Commenting this out as it makes no real sense, wrote it over too many sessions...
.. The way most programs are designed, especially in javascript, is either a top-down or bottom-up approach, usually people start with just an open canvas of a page and they start writing javascript to fill it in, what this means is that the overall 'model' of the application changes wildly over the course of it's life, and indeed even the individual variables often change from one revision to the next, not just in their value but also in their types, and this makes tracking down bugs significantly harder.  Languages like Typescript_, which adds a layer of typing on normal javascript, help catch these classes of bugs, however it does not really help people to design by types as you are still just decorating variables with types instead of designing the types *First*.  There are quite a variety of posts and pages and information about Type-Driven design by searching, so I highly suggest to feel free to do so if this is new to you as I will only talk about it cursorily, but in essence it is to design an application by figuring out the data first, then writing code to manipulate that data; you never really want, say, a bare integer around, everything needs a typed name somehow, prevents you from mixing concerns that should not be mixed, preventing entire other classes of common bugs.

==========
Game Types
==========

The game itself will have a variety of types to hold a variety of data, and overall this will likely be a very generic incremental game, so let's start with the parts that about every incremental game has.

Messages
--------

A message box let's us do a little hint of a story, little though it often is in such game, as well as giving information to the player about what is happened and/or what they have done for reference later.  I'll create this type in the ``src/overbots_types.ml`` file for now:

.. code:: ocaml

  type game_msg =
    | TimeMsg of Tea.Time.t * string

I'm making this a variant, even if just a single constructor variant, for two reasons.  The first is that it keeps everything even more strongly typed, imagine if I got another tuple somewhere that held a time and string for some other reason, I could accidentally mix them.  Second is that I may want to expand it later, maybe a URL message or something, and this leaves that open to do so more easily.  I'll follow this pattern through-out typing everything.

Resources
---------

Every incremental game is about the management and acquisition of resources, a min-max strategy that the player does effectively manually (and this is the primary addiction of these kind of games), so I will need a primary structure to hold all of the resource values, and I could do this in a few different ways:

* **Record:** A record means that everything is explicitly named, no worry about mixing things, however it also means that for every resource message that I'd have to make a unique one, and that could get very wordy very fast in a whole lot of different places, so this may not be done standalone.
* **Map:** I could make a dictionary, the key could be strings, which that is certainly not type safe, or I could give all resource types a variant identifier, which would be type safe.  Access is a little slower but not enough to really matter, however updating would be faster if only a few fields are updated instead of all of them, however that also means that I'll have to scatter the types of all the resources everywhere, which is less verbose than records for sure, but still not exactly short.
* **Modules:** OCaml has powerful modules, you can make modules that make modules that make modules (this is how the Map module works for example), you can pack modules up as a value and pass them around then unpack and access them with ease.  The actual creation of the resources would be a little more wordy, however the usage would be wonderfully succinct, readable, and expandable.  I could even update the modules over time as it goes on as well.

I think the modules will be the best here, to create a new resource will just involve creating a single new module instead of peppering ID types all over the place.

However, for the modules there are 2 main methods we can use, we can store the data inside the module, or we can store it outside the module.  If we store it inside our module then we will have to store the modules themselves in the model, that starts getting hefty and is entirely needless.  On the other hand we could store the raw data, the values of the resources, on the model but access the modules elsewhere, which will make it very succinct over all, however we will need a way to link the modules to something on the model, and for that we could still use a record, map, or something else.  I think I will choose a map as it will reduce the update count but it importantly also means that I can access it more directly without needing to know the specific names of everything.  To do this I'll need to index it someway, so I think I'll create a variant of names.  To start I'll add to ``src/overbots_types.ml`` before the ``model`` type:

.. code::ocaml

  type resource_flag =
  | Energy
  | IronOxide
  | RawSilicon
  module ResourceMap = Map.Make(struct type t = resource_flag let compare = compare end)
  type resource_value = float
  type resource_values = resource_value ResourceMap.t

So I've defined the names of the resources that I will support, the ``Map`` type that uses it as the key, and I've defined the type that I want the resources to be as well as named a few starting resources.

In another file, named ``src/overbots_resources.ml`` I'll put the module information and the initial resource definition:

.. code:: ocaml
  :number-lines:

  open Overbots_types

  module type Resource = sig
    val id : resource_flag
    val shown : model -> bool
    val get_value_range : model -> resource_value * resource_value
  end


  module Energy : Resource = struct
    let id = Energy
    let shown _model = true
    let get_value_range _model = 0.0, 100.0
  end

  module IronOxide : Resource = struct
    let id = IronOxide
    let shown _model = true
    let get_value_range _model = 0.0, 10.0
  end

  module RawSilicon : Resource = struct
    let id = RawSilicon
    let shown _model = true
    let get_value_range _model = 0.0, 2.0
  end


  let all_resources =
    let open ResourceMap in
    empty
    |> add Energy (module Energy : Resource)
    |> add IronOxide (module IronOxide : Resource)
    |> add RawSilicon (module RawSilicon : Resource)

I think I also want the resources shown categorized, so I'll toss the definition here too after the above, lot of strings because the front-end is strings, the first element is the displayed name, the second the class name, the third is the list of resources:

.. code:: ocaml

  let displayed_resources = [
    ("", "global", [
        Energy, "energy";
      ]);
    ("Raw", "raw", [
        IronOxide, "ironoxide";
        RawSilicon, "rawsilicon";
      ]);
  ]

And now to toss in a set of helpers that will be useful later:

.. code:: ocaml

  let get_resource_module rid =
    ResourceMap.find rid all_resources


  let get_resource_value rid model =
    ResourceMap.find rid model.resource_values


  type resource_value_state =
    | ValueTooLow
    | ValueTooHigh of model * resource_value
    | ValueSuccess of model

  let set_resource_value rid value model =
    let module R = (val get_resource_module rid) in
    let rmin, rmax = R.get_value_range model in
    if value < rmin then ValueTooLow else
    if value > rmax then
      let resource_values = ResourceMap.add rid rmax model.resource_values in
      ValueTooHigh ({model with resource_values}, value-.rmax)
    else
      let resource_values = ResourceMap.add rid value model.resource_values in
      ValueSuccess {model with resource_values}

  let add_resource_value rid delta model =
    let value = delta +. get_resource_value rid model in
    set_resource_value rid value model


  let init_resources_values =
    let resource_folder rid _r acc =
      ResourceMap.add rid 0.0 acc in
    ResourceMap.fold resource_folder all_resources ResourceMap.empty

And since I want to display these, to ``src/overbots_view.ml`` and changing the ``view_resources`` function to be this:

.. code:: ocaml

  let format_value value =
    if value < 10000.0 then
      let str = string_of_float value in
      let str = String.sub str 0 (min (String.length str) 6) in
      str ^ String.make (6 - String.length str) '0'
    else
      string_of_int (int_of_float value)

  let view_resources_category_resource model (rid, name, id) =
    let r = Overbots_resource.get_resource_module rid in
    let module R = (val r) in
    if not (R.shown model) then [] else
    let value = format_value (Overbots_resource.get_resource_value rid model) in
    [ div
        [ class' ("resource resource-"^id) ]
        [ div [ class' "resource-name" ] [ text name ]
        ; div [ class' "resource-value" ] [ text value ]
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

And it displays!  Not formatted at all, so I'm adding some css, replacing the ``.container-resources`` block with:

.. code:: scss

  .container-resources {
    flex: 0 0 256px;
    order: 0;

    .category-title {
      border-bottom: solid 1px #000;
      flex: 0;
      font-weight: bold;
      text-align: center;
    }

    .resource {
      border: dashed 1px #000;
      display: flex;
      flex: 0;
      flex-direction: row;
    }

    .resource-name {
      display: flex;
      flex: 2;
      font-weight: bold;
      width: 50%;
    }

    .resource-value {
      display: flex;
      flex: 1;
      padding-left: 8px;
    }
  }

============
Data Storage
============

Data storage I want to be type safe and easily able to be passed around, so I think I will use Map's for a lot of these as well.  Primarily a lot of things are going to be 'is this researched', 'is this on', and 'how many of this do I have' and so forth, so I think I will wrap that up into a pattern similar to the resource values as before, very simple:

.. code:: ocaml

  type bool_flag =
    | SolarPanelsReadyToUnfold
    | SolarPanelsGenerating
    | DrillDeployed
  module BoolFlagSet = Set.Make(struct type t = bool_flag let compare = compare end)
  type bool_flags = BoolFlagSet.t
  let init_bool_flags = BoolFlagSet.empty



  type int_flag =
    | NoIntFlagsYet
  module IntFlagMap = Map.Make(struct type t = int_flag let compare = compare end)
  type int_flags = int IntFlagMap.t
  let init_int_flags =
    let open IntFlagMap in
    empty
    |> add NoIntFlagsYet 0

Easily expandable by adding to the variants for each.  I could wrap these up into a Functor with a set of helpers, but I'll likely just write helpers inline in another module, in fact let's do that now in ``src/overbots_flags.ml``:

.. code:: ocaml
  :number-lines:

  open Overbots_types

  let bool_flag_exists fid model =
    BoolFlagSet.mem fid model.bool_flags

  let int_flag_value fid model =
    IntFlagMap.find fid model.int_flags

And changing the main ``model`` type to be:

.. code:: ocaml

  type model = {
    msgs : game_msg list;
    resource_values : resource_value ResourceMap.t;
    bool_flags : bool_flags;
    int_flags : int_flags;
  }

And lastly updating the base ``init`` function:

.. code:: ocaml

  let init () =
    let model = {
      msgs = [];
      resource_values = Overbots_resource.init_resources_values;
      bool_flags = init_bool_flags;
      int_flags = init_int_flags;
    } in
    (model, Cmd.none)

And running it still reveals the resources, good to go where next time we should start putting in actions and buttons.

======
Result
======

You can access the output of this post at `Overbots Pt3`_.

And the source is on the `Overbots Github Pt3`_.

Check out this entire series via the `Overbots tag`_.

.. _Typescript: https://www.typescriptlang.org/
.. _`Overbots Pt3`: dev.html
.. _`Overbots Github Pt3`: https://github.com/OvermindDL1/overbots/tree/pt3
.. _`Overbots tag`: link://tag/overbots
