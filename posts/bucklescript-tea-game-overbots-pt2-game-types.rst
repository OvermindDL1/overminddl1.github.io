.. title: Bucklescript-Tea Game OverBots Pt.2 - Game Types
.. slug: bucklescript-tea-game-overbots-pt2-game-types
.. date: 2017-05-13 23:08:02 UTC-06:00
.. tags: draft, bucklescript, bucklescript-tea, overbots
.. category: Programming
.. link:
.. description: Bucklescript-TEA tutorial game OverBots Pt.1 - Game Types
.. type: code
.. author: OvermindDL1

Welcome back to developing OverBots with Bucklescript-TEA!

This time we are going to follow a 'type-driven' style of design.  This is pretty foreign in the javascript world due to limitations of the javascript language, but it is an excellent methodology to help you figure out the design of your application before you ever write executable code, thus helping you to do it properly the first time.

.. TEASER_END

However, considering this game has no real design behind it, this may of course change a few times, but over the course of this post let's see if we can help figure out what that design should be first and foremost.  :-)

First, I went ahead and added a ``README.md`` to the `git repo`_ that points to these posts.  You can access the full posts listing via the overbots_ tag at the bottom of each of these posts as well.

Type-Driven Design
==================

The way most programs are designed, especially in javascript, is either a top-down or bottom-up approach, usually people start with just an open canvas of a page and they start writing javascript to fill it in, what this means is that the overall 'model' of the application changes wildly over the course of it's life, and indeed even the individual variables often change from one revision to the next, not just in their value but also in their types, and this makes tracking down bugs significantly harder.  Languages like Typescript_, which adds a layer of typing on normal javascript, help catch these classes of bugs, however it does not really help people to design by types as you are still just decorating variables with types instead of designing the types *First*.  There are quite a variety of posts and pages and information about Type-Driven design by searching, so I highly suggest to feel free to do so if this is new to you as I will only talk about it cursorily, but in essence it is to design an application by figuring out the data first, then writing code to manipulate that data; you never really want, say, a bare integer around, everything needs a typed name somehow, prevents you from mixing concerns that should not be mixed, preventing entire other classes of common bugs.

Game Types
==========

The game itself will have a variety of types to hold a variety of data, and overall this will likely be a very generic incremental game, so let's start with the parts that about every incremental game has.

Resources
---------

Every incremental game is about the management and acquisition of resources, a min-max strategy


.. _`git repo`: https://github.com/OvermindDL1/overbots
.. _overbots: link://tag/overbots
.. _Typescript: https://www.typescriptlang.org/
