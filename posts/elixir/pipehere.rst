.. title: Elixir - PipeHere
.. slug: pipehere
.. date: 2016-08-15 10:46:21 UTC-06:00
.. tags: elixir, vic, pipehere, elixir-proposal
.. category: Programming
.. link:
.. description: Post about Vic's pipehere library and why something similar should be put in Elixir itself
.. type: code
.. author: OvermindDL1

For my first content-post here I think I will touch on one of Elixir's niggles that bug me, the pipe operator, or specifically one of the few things that bug me about it.  Now do not take this that I hate the pipe operator, I love it, however it does have a few warts, so lets talk about one of them today.

Regardless of my opinion of where a functional pipe operator like Elixir's ``|>`` should put arguments (*at the end*, **not** the beginning), wouldn't it be nice to be able to specify where a piped in argument was placed for those needed cases?

.. TEASER_END

For a quick recap, the Elixir pipe operator basically converts this:

.. code:: elixir
   :number-lines:

   42 |> some_func(3.14)

To become this:

.. code:: elixir
   :number-lines:

   some_func(42, 3.14)

Thus this allows you to chain commands, so instead of having a huge amount of nested calls that you have to read inside-out, it flows and reads logically, such as:

.. code:: elixir
   :number-lines:

   "A String"
   |> String.downcase
   |> String.normalize
   |> String.reverse

Instead of:

.. code:: elixir
   :number-lines:

   String.reverse(String.normalize(String.downcase("A String")))

Or by using a lot of intermediate variables like:

.. code:: elixir
   :number-lines:

   str = "A String"
   str = String.downcase(str)
   str = String.normalize(str)
   String.reverse(str)

However, it always puts in to the first slot (again the merits of that not being debated here *cough*), so what if we could put it into other slots, what would that look like?

Well the pipehere_ library adds such a feature, so instead of needing to do this:

.. code:: elixir
   :number-lines:

   str = "A String"
   |> String.downcase
   taggify("@", str)
   |> String.normalize
   |> String.reverse

You can instead do:

.. code:: elixir
   :number-lines:

   str = "A String"
   |> String.downcase
   |> taggify("@", _)
   |> String.normalize
   |> String.reverse
   |> pipehere

Ahh, now this is succinct and uses an elixir defined type (_) that is not and cannot be bound in this context, thus it is free to use.  However, we do have this little trailing bit that in this case is doing the macro transformation.  This transformation could, and should, be done in the Elixir pipe operator code itself, fully backwards compatible, and adds a highly useful feature.  Basically if a call contains a ``_`` then translate the argument placement to be in 'that' position instead of the first, otherwise prepend it to the first argument and be done like it is now.  At the time of this writing the ``|>`` operator is at `kernel.ex#L2769-L2780`_, which delegates the macro expansion to `macro.ex#L129-L187`_, and it could quite easily be added in here.

I am currently not seeing any issues with such an addition but there can always be some corner case that I am missing.  If anyone has an idea as to how it could be a broken idea then please tell me.


.. _pipehere: https://github.com/vic/pipe_here
.. _kernel.ex#L2769-L2780: https://github.com/elixir-lang/elixir/blob/v1.3.2/lib/elixir/lib/kernel.ex#L2769-L2780
.. _macro.ex#L129-L187: https://github.com/elixir-lang/elixir/blob/1aca21c87625565c8e974fce08eba2420718b1fb/lib/elixir/lib/macro.ex#L129-L187
