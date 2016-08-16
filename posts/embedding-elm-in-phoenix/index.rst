.. title: Embedding Elm in Phoenix
.. slug: embedding-elm-in-phoenix
.. date: 2016-08-15 19:44:02 UTC-06:00
.. tags: elixir, phoenix, elm, draft
.. category: Programming
.. link:
.. description: How to embed Elm as the javascript engine into an Elixir Phoenix application
.. type: code
.. author: OvermindDL1

I am setting up a new project that will be using Phoenix and Elm together, so I am taking this opportunity to document the process to make it easier for others to set up as well.  Maybe I should turn this into a mix 'new'able template sometime...

.. TEASER_END

Initial Setup
=============

First things first, make sure you already have nodejs (6+), npm, Erlang, Elixir, and Phoenix installed.  Elm can be useful for in-place testing but not necessary as npm will handle that for us.

So lets start with a basic phoenix app, will be using normal integer IDs in the model, using brunch (webpack is **so** slow in my testing in comparison), and just fairly stock.  Let's name it, oh, MyServer.  So let's run this in your shell of choice:

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

Make sure to have it fetch and install dependencies to prepare the node files by answering ``Y`` to the question

At this point it should also be good to set it up as a git repo, it is never too early to make your repository:

.. code:: bash
	:number-lines:

	$ git init
	Initialized empty Git repository in /home/<user>/elixir/my_server/.git/
	$ git add .
	# Snip ton of files added to your new git repo
	$ git commit
	# Snip ton of files committed to your repo

Now that the basics are done, let's add elm to the project.

Adding Elm to Phoenix via brunch
================================

First we need to actually have the project get and manage elm, so open your ./package.json file and go to the "devDependencies" section and add a new ``elm`` entry such as:

.. code:: json

	"elm-brunch": "~0.7.0",

This will handle downloading and installation of elm-brunch and elm itself.  If you wish you can run ``npm install`` now to get it, otherwise phoenix will get it for you when we run it later.

Next we need to open the ``brunch-config.js`` file.  Go to the ``exports.config.paths.watched`` section.  You will want to add a new a new path for where-ever you want to put your elm source files.  I prefer them to go in to ``web/elm`` so that is what I am adding to that section:

.. code:: javascript

	"web/elm",

We should, though not need to, but I highly recommend adding an elmBrunch configuration inside your brunch-config.js file.  To do so continue down to the ``exports.config.plugins`` section and we need to add a new section after your ``babel`` section (as always don't forget any commas on newlines as appropriate).  Let's start with this configuration:

.. code:: javascript
	:number-lines:

	elmBrunch: {
		// Set to path where `elm-make` is located, relative to `elmFolder`
		// (optional)
		// executablePath: './node_modules/elm/binwrappers',

		// Set to path where elm-package.json is located, defaults to project root
		// (optional)
		// Make sure to configure paths.watched in main brunch config to include
		// this folder
		elmFolder: "web/elm",

		// Set to the elm file(s) containing your "main" function
		// `elm make` handles all elm dependencies (required)
		// relative to `elmFolder`
		mainModules: [
			'web/elm/Main.elm'
		],

		// Defaults to 'js/' folder in paths.public (optional)
		// However for phoenix we want it to be combined with the app.js file so do:
		outputFolder: "web/static/js",

		// If specified, all mainModules will be compiled to a single file
		// (optional and merged with outputFolder)
		// This is likely what we want to do with Phoenix for web efficiency
		outputFile: "elm.js",

		// optional: add some parameters that are passed to elm-make
		// "--warn" reports on important warnings so they do not go invisible,
		// I always recommend it.
		makeParameters: [
			"--warn"
		]
	}

The inline comments should be able to describe what is going on, and keep in mind that any 'root' Main program you may have in Elm should be listed in ``mainModules`` so they all get combined into one file to share the elm standard library and save a ton of space.

With these are we are now ready to create the first Elm file and hook it into the application.

Creating our first Elm application in Phoenix
=============================================

Create the file ``web/elm/Main.elm`` or of whatever file you put in your ``mainModules`` section and open it up.  Let's go ahead and do the usual Elm counter app so we can make sure that it works and that we have something to wire up.
