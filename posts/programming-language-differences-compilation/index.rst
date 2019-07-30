.. title: Programming Language Differences - Compilation
.. slug: programming-language-differences-compilation
.. date: 2017-12-09 15:35:23 UTC-07:00
.. tags:
.. category: Programming
.. link:
.. description: What are the compilation time differences between programming languages
.. type: code
.. author: OvermindDL1

There are a variety of differences between programming languages that go far deeper than syntax, programming style, and programming patterns, that permeate through the language to effect its very core.  This post will go over the primary differences that drive the compilation of the language itself to how it handles these compilation differences at run-time.  This will be a *very* high level overview/descriptions and much will be glossed over at this time.

.. TEASER_END

Every languages bindings/variables/expression has a type, generally of the form such as where ``2`` is a number of some sort, such as an integer (such as in Python), a float (such as in JavaScript), or a few other specific types there-of, or a ``"something"`` string of some sort, regardless of how the language syntax shows it in textual form.  Some languages may even store every type in a singular format, such as a storing everything as a String as some languages do (such as the older Visual Basic's in the general case).

Do note that this post may perpetually be in development, at this point it is primarily just a brain-dump rather then something curated.  As always feel free to leave comments for improvements.

The awesome inline code snippets compilation and results is supplied by the awesome Klipse_ library!

- `Compiled vs. JIT vs. Interpreted`_
- `Strong vs. Weak Typing`_
- `Static vs. Dynamic Typing`_
- `Combinations of Typing`_

(If you have javascript enabled then the source code entries are editable and you see the results in real-time)

================================
Compiled vs. JIT vs. Interpreted
================================

The source of a program can have a few things be done to it, depending on the language, and even some languages can switch between the types or the way to run it can be chosen.

A compiled program is one where the source code is compiled to some more directly executable code, whether directly to machine code that the computer then runs at full speed (such as C++), or to some bytecode that can then be run through some other form later such as JIT'ing it or interpreting it (such as Java or Python).  This allows a program to pre-generate its code to allow it to load and run faster at run-time, however it may not be quite as optimized as a JIT though in general it surpasses a JIT in overall speed except for certain Tracing situations, though profile guided optimizations in some compilers (as is common with C++) can make up these losses and even surpass them, though with much greater work compared to what a JIT can perform.  The ahead-of-time compilation time of some languages (such as C++ and Rust and Haskell and many others) can take significant time, which may significantly slow down development time, though there are ways to help reduce this cost via only recompiling parts that have changed, as is common with C++ to creating compilers that are extremely optimized for speed for a restricted language set (such as OCaml).

A JIT is an engine that takes either the source input (such as JavaScript) or a bytecode input (such as Java in some cases) and converts it to a more highly optimized form, either a lower level bytecode that is then interpreted or directly to machine code itself (as Java does).  This essentially performs the compilation step at run-time instead of ahead-of-time though it is often not quite as optimized as ahead-of-time can perform due to wanting to maximize run-time speed, it can often see just how certain code is used at run-time and can optimize for those specific situations, thus allowing the common call path to have special optimizations applied that can generally be difficult to impossible to know ahead-of-time.

An interpreter either takes the source code straight or a bytecode and executes each instruction as a set of code that does not directly map to the machine, this makes interpreted code always perform slower than the direct machine code, however it tends to be far easier to implement and is far more easily multi-platform, this is what the normal Python distribution does for example.  A JIT often runs an interpreter as well so it can examine the call path in more detail so it can generate better and faster machine code on later runs, this is what JavaScript does for example.

======================
Strong vs. Weak Typing
======================

The way that 2 non-same types interact generally falls into 2 camps, either Weakly, where they auto-coerce, or strongly, where they do not auto-coerce (although the language may have some implicit or explicit coercion calls).  A weakly typed language tends to happily convert one type to another based on how it used, most commonly via a string conversion.  A strongly typed language tends to require either explicit conversion calls or has a predefined set of conversions between some base types (such as how integers and floats can often be implicitly converted between in many languages).

A very common example of a weakly typed language is JavaScript itself.  Look at these examples:

.. klipse:: eval-js

  [
    2 + 2,
    "2" + 2,
    2 + "2",
    "2" + "2",
  ]

Though JavaScript has some unexpected oddities with its auto-coercion with certain types and orderings because of this common to-string coercions, such as:

.. klipse:: eval-js

  [
    'a' + 'b',
    'a' + [1, 2, 3],
    [1, 2, 3] + 'b',
    [1, 2, 3] + [4, 5, 6],
  ]

And things such as these tend to be a great source of bugs, this is why languages such as Python are strongly typed, attempting an invalid operation on 2 incompatible types causes an error:

.. klipse:: eval-python

  print(2 + 2)
  print(2 + "2")

To perform such a coercion in a language such as Python you need to state what you want to be converted:

.. klipse:: eval-python

  print(2 + int("2"))
  print(str(2) + "2")

=========================
Static vs. Dynamic Typing
=========================

A language may be designed so that its types are known at compile-time, or may be known only at run-time, this changes both how the language is used as well as when many errors may occur.

A language that is dynamically typed, such as javascript, does not know the types at compile time and thus cannot optimize the code for the types that will be used.  This makes development faster as you can pass information fairly arbitrary, however it has the cost that a lot of usages of the information may be wrong and the errors related to those mis-usages will not be caught until an error occurs at run-time.  Python is one such language, and as seen in the same example as above an exception is thrown in the case of Python:

.. klipse:: eval-python

  print(2 + int("2"))
  print(str(2) + "2")

To compensate, most dynamically typed languages have some way to introspect a type so you can perform conditional work depending on what the type is.  Here is the way to test the type in JavaScript for example:

.. klipse:: eval-js

  [
    typeof(2+2),
    typeof(""),
  ]

Other languages enforce knowing the types at compile-time, and if the types or the operations on them do not make sense then it will refuse to compile at all, thus no code will be executed at all, for example here is a working C++ that prints both lines:

.. klipse:: eval-cpp

  #include <iostream>
  using namespace std;
  int main() {
    char *hw = "Hello World!";
    cout << hw << endl;
    return 0;
  }

And here it is with a type error introduced, thus printing nothing and instead causing a compilation error instead of throwing an exception at run-time:

.. klipse:: eval-cpp

  #include <iostream>
  using namespace std;
  int main() {
    char *hw = "Hello World!";
    cout << 2 * hw << endl;
    return 0;
  }

Even if a language is strongly typed does not mean that it has the overhead of having to statically type its bindings/variables in all cases, for example you can use the ``auto`` keyword in C++, and even in some languages, such as OCaml, your program can be entirely strongly typed but with no declarations needed at all, such as this:

.. klipse:: eval-ocaml

  let f a b = a + b

  let _ = print_endline (string_of_int (f 1 2))

With full typed declarations is:

.. klipse:: eval-ocaml

  let f (a : int) (b : int) : int = a + b

  let (_ : unit) = print_endline (string_of_int (f 1 2))

Thus in a language like OCaml you can program near as succinctly as a dynamicly typed language, but everything is fully and properly typed.  The benefit of being strongly-typed is that whole classes of errors and bugs are caught at compile-time, thus very early in development, instead of at some potentially random time during run-time with random errors occurring for the user.  To compensate many dynamically typed languages have the programmer use extensive testing systems to verify that things work, but this is extremely error prone as most programmers will not create the necessary tests to verify that the proper types are passed through the program, where a strongly-typed language gives you this as part of the declarations themselves, checked at compile-time, thus your tests only need to test functionality instead of types as well, making them shorter, more readable, and more likely to actually be made.

======================
Combinations of Typing
======================

These typing methods can of course be mixed in every way.

Weakly Dynamically Typed
------------------------

Languages that are weakly dynamically typed tend to be the languages with the highest occurrences of bugs that make it to release time, in part because they allow effectively unbounded coercion combined with being able to pass anything anywhere and you only know for certain that it fails by just trying to run it.  The most popular example of a language such as this is of course JavaScript:

.. klipse:: eval-js

  (![]+[])[+[]]+(![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]

Weakly Statically Typed
-----------------------

Weakly Statically Typed languages tend to require type definitions everywhere but allow arbitrary conversion between any manner or types.  These type of languages tend to be efficient when things are as they expect, but tend to fail in rather spectacular ways.  C is a language that is weakly statically typed in that it allows you to convert about anything to anything else via pointer casting, or just keeping everything as void pointers.  Thankfully I've seen very little real-world code (sadly I cannot say 'no real-world code') that follows these patterns.  An example of using it as such is:

.. klipse:: eval-cpp

  #include <iostream>
  using namespace std;
  int main() {
    char *p = "Hello world!";
    cout << p << endl;
    return 0;
  }

And a catastrophic mis-use would be:

.. klipse:: eval-cpp

  #include <iostream>
  using namespace std;
  int main() {
    char *p = (char*)42;
    cout << p << endl;
    return 0;
  }

Thankfully most weakly statically typed languages have type systems that can be used to fix the weak issues.

Strongly Dynamically Typed
--------------------------

A language that is strongly dynamically typed does not allow unbounded coercions but the types are still not known at compile-time.  This allows a very rapid method of development while many type errors are caught 'earlier' at run-time, instead of potentially much *much* later after a type has been operated on in a variety of ways first.  Python is a prime example of such a language:

.. klipse:: eval-python

  a = 2
  print(a)
  a = "Hello "
  print(a)
  a += "world!"
  print(a)
  a += 42 # Crash due type mismatch, instead of silently converting the types around
  print(a) # this will not be reached

Strongly Statically Typed
-------------------------

Languages that are strongly and statically typed tend to be the ones that are the most productive over time in addition to creating the fastest code when fully compiled as the instructions output can be perfectly suited for the data it is operating on.  Although they have a higher initial investment in programming time due to needing to make sure the types are safe, you are rewarded by having the compiler catch entire classes of trivial errors, thus saving substantial maintenance and upkeep time later on.  Prime examples of such a language are Haskell or OCaml (or even C++ if you ignore the old C heritage and use optional types instead of ``null``'s).  They will just flat-out not compile if the program is not at least 'sound', though they do not protect you against your own logic errors, they do catch entire classes of trivial bugs that constantly affect languages such as JavaScript or Python or Java (``null``'s make a language not fully strongly typed).  An especially large benefit of a language of this type means that Type-Based Programming can be performed, which is where you create your types before you create the code, thus making the program designed in more of a way of transforming types to types instead of thinking more about the operations themselves, thus making the program in general more robust and helping prevent further classes of common errors, such as something like this in OCaml:

.. klipse:: eval-ocaml

  type safe = Safe of string

  let escape s =
    let escaped = String.escaped s in
    Safe escaped

  let safe_length (Safe s) = String.length s

  let test () =
    let s = "Hello World\!" in
    let safe = escape s in
    let orig_len = String.length s in
    let safe_len = safe_length safe in
    let p = (string_of_int orig_len) ^ " != " ^ (string_of_int safe_len) in
    print_endline p

  let _ = test ()

This would prevent the user of this module from using ``safe_length`` (pretend it may do something more special, like send html to a socket or something with ``escape`` escaping html or something), thus this prevents mis-using the function accidentally.  If programming in a proper Type-Based Programming style then even many logic bugs can be prevented.


.. _Klipse: https://github.com/viebel/klipse

