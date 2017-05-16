.. title: Bucklescript-Tea Game Overbots Pt.2 - Overall Design and the View
.. slug: bucklescript-tea-game-overbots-pt2-overall-design-and-the-views
.. date: 2017-05-16 09:31:19 UTC-06:00
.. tags: bucklescript, bucklescript-tea, overbots
.. category: Programming
.. link:
.. description: Bucklescript-Tea Game Overbots Pt.2 - Overall Design and the View
.. type: code
.. author: OvermindDL1

In this part let's come up with a simple format of how the game should look and act while writing out the start of the view.

.. TEASER_END

Let's start with a basic structure for the view first, something pretty generic to the incremental design.  I'm going to make a new file at ``src/overbots_view.ml`` to put the view code in to keep the main file from getting too large.  In it I am going to put the view function:

.. code:: ocaml
  :number-lines:

  open Tea.Html

  let view model =
    div
      []
      [ text (string_of_int model.notUsedYet)
      ]

However I need to expose the model type to it, so I am going to lift the model type out of the main model as well and it it in to ``src/overbots_types.ml`` to become this:

.. code:: ocaml
  :number-lines:

  type msg =
    | NothingYet
    [@@bs.deriving {accessors}]

  type model = {
    notUsedYet : int;
  }

And I am going to import those types into both the ``src/overbots.ml`` file and the ``src/overbots_view.ml`` file via:

.. code:: ocaml

  open Overbots_types

As well as I am going to change the program definition in the main ``src/overbots.ml`` file to use the new view module's ``view`` function:

.. code:: ocaml

  let main =
    App.standardProgram {
      init;
      update;
      view = Overbots_view.view;
      subscriptions;
    }

Importing the types will be done in to about every module as almost everything should use it, so it will be a common theme.  I may break up the types module into more and import those types in to it if it becomes too large, complex, or unreadable as well.

====
View
====

I think I will go for a standard format of a title at the top, a few 'container' type elements around, like perhaps the resource listing on the left, the buttons on the right, messages at the bottom, and something in the center like a scanner or other changeable interface.  Since the container part will have a lot of duplicates I'll pull it's builder into a new function, but otherwise I'll start with changing the view to this:

.. code:: ocaml
  :number-lines:

  open Tea.Html
  open Overbots_types


  let view_container enabled id title children =
    if not enabled then noNode else
      div
        [ class' ("container container-" ^ id)]
        [ div [ class' "title"] [ text title ]
        ; div [ class' ("scroller " ^ id) ] children
        ]


  let view_resources model = []


  let view_buttons model = []


  let view_scanner model = []


  let view_msgs model = []


  let view model =
    div
      [ class' "overbots" ]
      [ div [ class' "header" ] [ text "OverBots" ]
      ; div [ class' "body" ]
          [ view_container true "resources" "Resources" (view_resources model)
          ; view_container true "actions" "Actions" (view_buttons model)
          ; view_container true "scanner" "Scanner" (view_scanner model)
          ]
      ; view_container true "msgs" "Messages" (view_msgs model)
      ]

So this will be the basic structure, running it now shows the format that I will start with, which is just a listing of text on the web page of:

.. code:: text

  OverBots
  Resources
  Actions
  Scanner
  Messages

So that is not 'quite' what I want, let's add some scss to the `scss/overbots.scss` file of:

.. code:: scss
  :number-lines:

  .overbots {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;


    // Generic
    .container {
      border: solid 1px #000;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      >.title {
        border-bottom: solid 1px #000;
        font-weight: bold;
        text-align: center;
      }

      >.scroller {
        overflow: auto;
      }
    }

    // Specific
    .header {
      border-bottom: solid 1px #000;
      flex: 0;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }

    .body {
      display: flex;
      flex: 1;
      flex-direction: row;
    }

    .container-resources {
      flex: 0 0 256px;
      order: 0;
    }

    .container-actions {
      flex: 0 0 256px;
      order: 2;
    }

    .container-scanner {
      flex: 1 0 256px;
      order: 1;
    }

    .container-msgs {
      flex: 0 0 192px;
    }
  }

And that is looking *much* better!

============
Build System
============

Lastly I want to add a bit more parallelism to the build step since there is no reason for the css to be built 'after' the javascript when they could be built concurrently, so I'm changing my ``package.json``'s ``"scripts"`` section to be this instead:

.. code:: json

  {
    "build:bsb": "bsb -make-world",
    "build:js": "rollup -c",
    "build:scss": "node-sass --include-path scss scss/overbots.scss css/overbots.css",
    "build:css": "postcss --use autoprefixer -o release/overbots.css css/overbots.css",
    "build:code": "run-s build:bsb build:js",
    "build:styles": "run-s build:scss build:css",
    "build": "run-p build:code build:styles",
    "watch:bsb": "bsb -w",
    "watch:js": "rollup -c -w",
    "watch:scss": "nodemon -e scss -x \"npm run build:scss\"",
    "watch:css": "nodemon -e css -x \"npm run build:css\"",
    "prewatch": "run-s build",
    "watch": "run-p watch:bsb watch:js watch:scss watch:css",
    "test": "echo \"Error: no test specified\" && exit 1"
  }

I just split up the code and styles section into their own commands and then I run those two concurrently.  I could also pipe the scss output to postcss directly to save a tiny bit of time, but I like seeing the intermediate output so I can watch how things change from step to step.  I can always build an optimized pipeline that skips this if I really want, might be useful to do on the watcher, but it is fast enough right now that I do not care, it all builds in <500ms as it is for me in watch mode, all of that being the css as the bsb and rollup steps are <100ms thus far total.

Next time let's start taking a look at the types of the model and start fleshing out just how to store the data in the model state.

======
Result
======

You can access the output of this post at `Overbots Pt2`_.

And the source is on the `Overbots Github Pt2`_.

Check out this entire series via the `Overbots tag`_.

.. _`Overbots Pt2`: dev.html
.. _`Overbots Github Pt2`: https://github.com/OvermindDL1/overbots/tree/pt2
.. _`Overbots tag`: link://tag/overbots
