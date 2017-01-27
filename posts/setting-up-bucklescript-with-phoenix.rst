.. title: Setting up Bucklescript with Phoenix
.. slug: setting-up-bucklescript-with-phoenix
.. date: 2017-01-25 22:16:18 UTC-07:00
.. tags: elixir, phoenix, bucklescript
.. category: Programming
.. link:
.. description: How to integrate Bucklescript into an Elixir Phoenix project
.. type: code
.. author: OvermindDL1

This article will demonstrate how to setup Bucklescript to work with a stock Elixir Phoenix project and how to use example code in the project.

.. TEASER_END

I seem to be making a template on how to setup various things with Phoenix...  :-)


Initial Setup
=============

.. note:: If you are adding Bucklescript to an existing phoenix project then feel free to skip this step.

First things first, let's make sure you already have nodejs (6+), npm, Erlang, Elixir, and Phoenix installed, all in the Phoenix instructions.

So lets start with a basic phoenix app, will be using normal integer IDs in the model, using brunch as that is what comes with Phoenix (feel free to adjust to your own if you use another bundler), and just fairly stock.  Let's name it, oh, MyServer.  So let's run this in your shell of choice:

.. code:: bash
	:number-lines:

	$ mix phoenix.new my_server --module MyServer
	# Snip a ton of stuff as it creates the files...

	Fetch and install dependencies? [Yn] Y
	* running mix deps.get
	* running npm install && node node_modules/brunch/bin/brunch build

	We are all set! Run your Phoenix application:

	    $ cd my_server
	    $ mix phoenix.server

	You can also run your app inside IEx (Interactive Elixir) as:

	    $ iex -S mix phoenix.server

	Before moving on, configure your database in config/dev.exs and run:

	    $ mix ecto.create

	$ cd my_server # Make sure to go in to the directory if you edit here

Make sure to have it fetch and install dependencies to prepare the node files by answering ``Y`` to the ``Fetch and install dependencies?`` question.

At this point it should also be good to set it up as a git repo, it is never too early to make your repository:

.. code:: bash
	:number-lines:

	$ git init
	Initialized empty Git repository in /home/<user>/elixir/my_server/.git/
	$ git add .
	# Snip ton of files added to your new git repo
	$ git commit
	# Snip ton of files committed to your repo

Other than making sure your database is setup if you are using one and so forth, that should be all the basics.  Now let's add Bucklescript to the project.


Adding Elm to Phoenix via brunch
================================

Make certain that you have the dependencies for bucklescript installed first as per its documentation_, which for Windows is nothing (all self-included) or for linux it is making sure that `ninja` is already installed from your package manager.

First we need to actually acquire Bucklescript, so in the terminal run:

.. code:: bash

  npm install --save-dev bs-platform

This will handle downloading and installation of bucklescript itself, including compiling if necessary.

Next we need to make a ``bsconfig.json`` file as that is the build definition file for the ``bsb`` build system, so in the project root directory put this content in a new ``bsconfig.json``:

.. code:: json
  :number-lines:

  {
    "name": "my_server",
    "sources": {"dir": "web/bucklescript"},
    "generate-merlin": true
  }

I've chosen ``"web/bucklescript"`` here to fit with the Phoenix style of putting front-end web code in to the ``web`` directory, but feel free to choose where-ever you want.  The ``"generate-merlin"`` generates the ``.merlin`` file for bucklescript support, but it is optional if you are not going to use ``ocamlmerlin`` or are going to build it manually.

Next let's create a simple example file, just to make sure it works, so create the file ``web/bucklescript/my_file.ml`` and put this in it:

.. code:: ocaml
  :number-lines:

  let () =
    print_endline "Hello world"

So the only thing we are doing is just printing the string ``Hello world`` when this file is loaded, this will be printed to the console in the web browser.

So now if you ran ``./node_modules/.bin/bsb`` it would build it to the ``lib/bs`` for intermediate files and the ``lib/js`` for javascript output files (feel free to add parts of or all of these directories to your ``.gitignore`` file as well), however phoenix is not starting the compiler when a file changes nor does brunch know about the files, so we need to tell them both.


Telling Brunch where the Bucklescript output files are
======================================================

The Bucklescript compiler outputs javascript in the standard commonjs format by default, which is perfect for Brunch, so let's just tell brunch where it is by altering the paths it looks in for the files, so open your ``brunch-config.js`` file and adjust the ``paths.watched`` section to include the output directory for javascript, which will be ``lib/js``, so alter it as such:

.. code:: javascript

  // Phoenix paths configuration
  paths: {
  // Dependencies and current project directories to watch
  watched: [
    "lib/js", // Bucklescript output files
    "web/static",
    "test/static"
  ],


Telling Phoenix to use Bucklescripts very fast watcher instead of the slow Brunch one for Bucklescript files
============================================================================================================

So now Brunch knows of the output files, however we do not want brunch to be the file watcher and recompile the files as it is just so-much-slower than ``bsb`` itself, so instead let's tell phoenix to start ``bsb -w`` for us, so open your ``config/dev.exs`` file and adjust your ``watchers`` entry to something like this:

.. code:: elixir

  watchers: [
    node: ["node_modules/brunch/bin/brunch", "watch", "--stdin", cd: Path.expand("../", __DIR__)],
    node: ["node_modules/bs-platform/bin/bsb", "-w", cd: Path.expand("../", __DIR__)]
  ]


Using Bucklescript
==================

Lastly let's just call the example file we made earlier from the normal Phoenix ``app.js`` file to test it, so open your ``web/static/js/app.js`` file and add this to the bottom of it (of course you can configure brunch to change the path as well):

.. code:: javascript

  import "lib/js/web/bucklescript/my_file"

Then launch the mix dev server via:

.. code:: bash

  iex -S mix phoenix.server

Then just launch the web browser, go to http://localhost:4000/ and then check your console, you will see printed there:  ``Hello world``.  :-)


.. _documentation: http://elm-lang.org/
