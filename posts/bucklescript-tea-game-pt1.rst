.. title: Bucklescript-Tea Game OverBots Pt.1 - Setup
.. slug: bucklescript-tea-game-pt1
.. date: 2017-05-13 16:17:21 UTC-06:00
.. tags: bucklescript, bucklescript-tea
.. category: Programming
.. link:
.. description: Bucklescript-TEA tutorial game OverBots Pt.1 - Setup
.. type: code
.. author: OvermindDL1

I've been meaning to make a more comprehensive bucklescript-tea tutorial / example project for a while, and I had an older one partially done but it is a bit out of date now so I've decide to make one anew instead, and to facilitate this I've decided to make a game.  Right now most of the 'reference information' about bucklescript-tea is identical to Elm's documentation, so seeing the real-world use of it would be more generically useful.

.. TEASER_END

If you are curious why I am using Bucklescript as the language, take a look at my past post of `Why Use Bucklescript`_.

I've decided to make a little incremental game, they are addictive to me and I enjoy them, however I am no game designer, I am only a programmer, so if anyone has ideas on how it should play or work or anything then do not hesitate to say either via comments on these posts, my email, or any other way that I am easily contacted.  :-)

Why did I name it OverBots?  No clue, first thing that popped up in mind.  If there is a really good and appropriate name then please suggest it.  :-)

Initial Setup
=============

Of course go ahead and have npm/node installed, as well as the requirements for bucklescript installation (nothing really on windows as bucklescript is pre-built unless you are wanting to build it manually of course, on linux/mac you need cmake and the necessary build systems to build bucklescript).  At this point let's get started by setting up the project.

.. code:: shell

  ╭─overminddl1@snip ~/ocaml
  ╰─➤  mkdir overbots
  ╭─overminddl1@snip ~/ocaml
  ╰─➤  cd overbots
  ╭─overminddl1@snip ~/ocaml/overbots
  ╰─➤  npm init
  This utility will walk you through creating a package.json file.
  It only covers the most common items, and tries to guess sensible defaults.

  See `npm help json` for definitive documentation on these fields
  and exactly what they do.

  Use `npm install <pkg> --save` afterwards to install a package and
  save it as a dependency in the package.json file.

  Press ^C at any time to quit.
  name: (overbots)
  version: (1.0.0) 0.0.1
  description: OverBots Incremental Game
  entry point: (index.js)
  test command:
  git repository: https://github.com/OvermindDL1/overbots
  keywords: bucklescript bucklescript-tea
  author: OvermindDL1
  license: (ISC) GPL-3.0
  About to write to /home/overminddl1/ocaml/overbots/package.json:

  {
    "name": "overbots",
    "version": "0.0.1",
    "description": "OverBots Incremental Game",
    "main": "index.js",
    "dependencies": {
      "bs-platform": "^1.7.3",
      "bucklescript-tea": "^0.3.2"
    },
    "devDependencies": {},
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/OvermindDL1/overbots.git"
    },
    "keywords": [
      "bucklescript",
      "bucklescript-tea"
    ],
    "author": "OvermindDL1",
    "license": "GPL-3.0",
    "bugs": {
      "url": "https://github.com/OvermindDL1/overbots/issues"
    },
    "homepage": "https://github.com/OvermindDL1/overbots#readme"
  }


  Is this ok? (yes)

  ╭─overminddl1@snip ~/ocaml/overbots
  ╰─➤  npm install --safe-dev bs-platform bucklescript-tea
  ..snip tons and tons of stuff as it installs and compiles
  ├── bs-platform@1.7.3
  └── bucklescript-tea@0.3.2

  ╭─overminddl1@snip ~/ocaml/overbots
  ╰─➤  git init
  Initialized empty Git repository in /home/overminddl1/ocaml/overbots/.git/
  ╭─overminddl1@snip ~/ocaml/overbots  ‹master*›
  ╰─➤  git remote add origin git@github.com:OvermindDL1/overbots.git

At this point open it is not good to open a text editor of your choice.  I tend to swap between Atom and Spacemacs depending on how I feel.  It is now time to create the bucklescript scafffolding.  Right now we need to make the ``bsconfig.json`` file ourselves but Bucklescript has plans to make its own creation commands later to make this part easier, however this part is not hard at all currently so let's make up the ``bsconfig.json`` file:

.. code:: json
  :number-lines:

  {
      "name": "overbots",
      "sources": { "dir" : "src"},
      "package-specs": ["es6"],
      "bs-dependencies": ["bucklescript-tea"],
      "generate-merlin": true
  }

I also like to have convenience commands for npm so I'm changing my ``"scripts"`` section in npm's ``package.json`` to become:

.. code:: json

  {
    "build": "bsb -make-world",
    "prewatch": "npm run build",
    "watch": "bsb -w",
    "test": "echo \"Error: no test specified\" && exit 1"
  }

And now I make my main entrance file at ``src/main.ml`` and I put in it this, the basic bucklescript-tea program structure:

.. code:: ocaml
  :number-lines:

  open Tea

  type msg =
    | NothingYet
    [@@bs.deriving {accessors}]

  type model = {
    notUsedYet : int;
  }

  let init () =
    let model ={
      notUsedYet = 42;
    } in
    (model, Cmd.none)

  let update model = function
    | NothingYet -> (model, Cmd.none)

  let subscriptions _model =
    Sub.none

  let view model =
    let open Html in
    div
      []
      [ text (string_of_int model.notUsedYet)
      ]

  let main =
    App.standardProgram {
      init;
      update;
      view;
      subscriptions;
    }

And we can compile it with ``npm run build`` or we can run the auto-builder/watcher with ``npm run watch`` (and ``Ctrl+c`` to cancel the auto-building/watching).  It should compile cleanly with the output javascript going in to the `lib/js` directory.  Speaking of, let's go ahead and compile all that output together with rollup.js

Production Generation
=====================

I want to be able to bundle this out to optimized javascript for easy running in the browser, and one of the best bundlers out is rollup.js, so let's use that one:

.. code:: shell

  ╭─overminddl1@snip ~/ocaml/overbots  ‹master*›
  ╰─➤  npm install --save-dev rollup-plugin-node-resolve rollup-watch rollup
  overbots@0.0.1 /home/overminddl1/ocaml/overbots
  ├── rollup@0.41.6
  ├── rollup-plugin-node-resolve@3.0.0
  └── rollup-watch@3.2.2

I also want to use npm itself as the build system instead of using something dreadfully slow like webpack or so, thus let's install a few helpers:

.. code:: shell

  ╭─overminddl1@snip ~/ocaml/overbots  ‹master*›
  ╰─➤  npm install --save-dev npm-run-all
  overbots@0.0.1 /home/overminddl1/ocaml/overbots
  └─┬ npm-run-all@4.0.2
    ├ Snip a mess of stuff...

And to use it let's change the package.json ``"scripts"`` section to be this:

.. code:: json

  {
    "build:bsb": "bsb -make-world",
    "build:js": "rollup -c",
    "build": "run-s build:bsb build:js",
    "watch:bsb": "bsb -w",
    "watch:js": "rollup -c -w",
    "prewatch": "run-s build",
    "watch": "run-p watch:bsb watch:js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }

And since I do not like to put tons of config options on the commandline in script, let's put the rollup options in a ``rollup.config.js`` file in the root directory of the project and put this in it:

.. code:: javascript

  export default {
    entry: 'lib/es6/overbots.js',
    format: 'iife',
    dest: '/release/overbots-bundled.js'
  };

And now we can run ``npm run build`` to build it all to a final bundled file, or run ``npm run watch`` to do the same on every save of source files.  For the purpose of testing I'm also going to make a ``release/dev.html`` file with this so I can load it in the browser for ease of development:

.. code:: html

  <html>
  <head>
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <meta content="utf-8" http-equiv="encoding">
    <script src="overbots-bundled.js"></script>
    <script>
    setTimeout(function(){
      var app = overbots.main(document.body);
    }, 1)
    </script>
  </head>
  <body>
  </body>
  </html>

And loading that up in the browser I just see a ``42`` printed inside a div and that is all.  :-)

This will be good for the initial setup, development, and etc. I think, next time let's start making the game!

.. _`Why Use Bucklescript`: link://slug/why-use-bucklescript
