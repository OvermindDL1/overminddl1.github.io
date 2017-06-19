.. title: Why use Bucklescript
.. slug: why-use-bucklescript
.. date: 2017-01-25 19:28:10 UTC-07:00
.. tags:  bucklescript
.. category: Programming
.. link:
.. description: How to integrate Bucklescript into an Elixir Phoenix project
.. type: code
.. author: OvermindDL1

Why might you want to use Bucklescript?  Let's explore just how awesome OCaml is to use on javascript over alternative languages and why it has staying power.

OCaml/Bucklescript:

.. code:: ocaml

  print_endline "Hello World!"

  let add l r = l + r

Javascript:

.. code:: javascript

  console.log("Hello World!");

  function add(l, r) {
    return l + r | 0;
  }

.. TEASER_END

History
=======

The OCaml language and compiler is about 30 years old at this point, similar syntax to other ML languages, especially SML, but it fleshes out the language to be more useful in all areas.  The compiler up to today has been built up to be modularable, to be possible to make new back-ends and add new features via plugins, especially with recent incarnations that added the new ``-ppx`` support.

Before the ``-ppx`` support was added there was a back-end (among many) created called Javascript_of_OCaml, or JSOO, it was a low-level backend to the OCaml compiler that took the near-native code generation and output Javascript, and it ran well but was difficult to call in to from Javascript and was very difficult to read as Javascript.

Bucklescript was started about a year ago now and reached 1.0 just a few months ago.  It is built to be a new back-end into the OCaml compiler that targets Javascript via the new ``-ppx`` extensions, thus it is able to see better typing information and able to make its own optimization passes specifically for outputting Javascript, thus making it highly efficient, and very importantly, readable.

Bucklescript
============

Bucklescript strives to have readable and efficient output, unlike many other <language>-to-Javascript transpiles that often output entirely unreadable code.  I think the best way to demonstrate this is via examples.

It can inline and removing the cost of currying when possible:

OCaml/Bucklescript:

.. code:: ocaml
  :number-lines:

  let test_curry x  y =  x + y

  let f = test_curry 32

Javascript:

.. code:: javascript
  :number-lines:

  function test_curry(x, y) {
    return x + y | 0;
  }

  function f(param) {
    return 32 + param | 0;
  }

It has attributes that let you define interfaces with Javascript cleanly:

OCaml/Bucklescript:

.. code:: ocaml
  :number-lines:

  let type_safe_json_data = [%bs.obj [|
      { x = 3 ; y = "hey" };
      { x =  32; y = "xx" }
  |] ]

  external optional_json_data : hi:int -> ?lo:int -> unit -> _ =
      "" [@@bs.obj]

  let data =  [|
    optional_json_data ~hi:3 ();
    optional_json_data ~hi:32 ~lo:3 ()
  |]

Javascript:

.. code:: javascript
  :number-lines:

  var type_safe_json_data = /* array */[
    {
      x: 3,
      y: "hey"
    },
    {
      x: 32,
      y: "xx"
    }
  ];

  var data = /* array */[
    {
      hi: 3
    },
    {
      hi: 32,
      lo: 3
    }
  ];

Tail-call optimizations (with closure removal when possible):

OCaml/Bucklescript:

.. code:: ocaml
  :number-lines:

  let tail_sum n =
    let rec aux acc i =
      if i <= n then
        aux (acc + i) (i + 1)
      else acc
    in aux 0 0

Javascript:

.. code:: javascript
  :number-lines:

  function tail_sum(n) {
    var _acc = 0;
    var _i = 0;
    while(true) {
      var i = _i;
      var acc = _acc;
      if (i <= n) {
        _i = i + 1 | 0;
        _acc = acc + i | 0;
        continue ;

      }
      else {
        return acc;
      }
    };
  }

It has the full power of the OCaml syntax and ecosystem, including even the powerful First-Class Modules:

OCaml/Bucklescript:

.. code:: ocaml
  :number-lines:

  module type X_int = sig val x : int end

  module Three : X_int = struct let x = 3 end

  let three = (module Three : X_int)


  module type Bumpable = sig
    type t
    val bump : t -> t
  end

  module Int_bumper = struct
    type t = int
    let bump n = n + 1
  end

  module Float_bumper = struct
    type t = float
    let bump n = n +. 1.
  end


  let int_bumper = (module Int_bumper : Bumpable with type t = int)
  let float_bumper = (module Float_bumper : Bumpable with type t = float)

  let bump_list
         (type a)
         (module B : Bumpable with type t = a)
         (l: a list)
      =
      List.map B.bump l

  let int_list_bumped = bump_list int_bumper [1;2;3]

  let float_list_bumped = bump_list float_bumper [1.5;2.5;3.5]

Javascript:

.. code:: javascript
  :number-lines:

  var List = require("stdlib/list");

  var Three = /* module */[/* x */3];

  function bump(n) {
    return n + 1 | 0;
  }

  var Int_bumper = /* module */[/* bump */bump];

  function bump$1(n) {
    return n + 1;
  }

  var Float_bumper = /* module */[/* bump */bump$1];

  function bump_list(B) {
    return function (l) {
      return List.map(B[/* bump */0], l);
    };
  }

  var int_list_bumped = bump_list(Int_bumper)(/* :: */[
        1,
        /* :: */[
          2,
          /* :: */[
            3,
            /* [] */0
          ]
        ]
      ]);

  var float_list_bumped = bump_list(Float_bumper)(/* :: */[
        1.5,
        /* :: */[
          2.5,
          /* :: */[
            3.5,
            /* [] */0
          ]
        ]
      ]);

  var three = Three;

  var int_bumper = Int_bumper;

  var float_bumper = Float_bumper;

Or see how bucklescript optimizes out unused parts as well:

OCaml/Bucklescript:

.. code:: ocaml
  :number-lines:

  let testing =
    let aux0 l r = l + r in
    let aux1 v = aux0 v 42 in
    aux1 42

Javascript:

.. code:: javascript
  :number-lines:

  var testing = 84;


Why Bucklescript?
=================

Now although the OCaml module system is more powerful than Haskell typeclasses and higher kinded types and can represent more structures and types than those, and there is a huge OCaml ecosystem that you can leverage into Javascript (as long as they do not contain C code of course), but still 'why' should you use Bucklescript for you Javascript?  There are already a plethera of languages that compile to Javascript that are fast like Dart_, type safe like Typescript_, have HKT's like Purescript_, or even simplified ML variants like Elm_, as well as even far more, so why Bucklescript?  Quite a number of reasons actually:

- Type-safe:  It is fully type safe with the standard ML style Hindley-Milner Type System, not quite as powerful as languages like Idris, but I've yet to see a language like Idris that compiles to Javascript, as well as they often have substantially higher compilation times, as Idris has.

- Fast compilation:  Bucklescript is OCaml, compiler and all, meaning it has one of the fastest optimizing compilers of any language anywhere, the ``bsb -w`` watch mode makes your turn around time as fast as you can type and save your source.

- OCaml Modules and other features:  The OCaml module system is one of the most powerful, if not 'the' most powerful in the types world, able to do the same as HKT's and typeclasses of Haskell-fame (though substantially faster to compile) to being able to safely type yet pass around dynamic content.  Other things like Polymorphic Variants, structural typing, and if you need it, the OCaml object class system are all available for use.

- Readable output:  The output is amazingly readable, unlike many of the afore-mentioned languages, which when combined with the immutable and type-safe system makes debugging a breeze.

- Native code:  You can actually write your program with markers to state what should be in javascript and what should be when it is not javascript, thus making it easy to make the same code-base compile to both Javascript, as well as compile to Native code, such as for a super-fast server-generated HTML that can be elevated at browser-time to a fully OCaml/Bucklescript driven system.

- Bucklescript annotations:  Bucklescript also adds a host of new annotations via its ``-ppx`` for conditional compilation, efficiency markers, and javascript interaction, while also being able to be used for native code generation as well.

- Merlin:  ocamlmerlin is the standard tool for working with OCaml code for intellisense and more, and it works wonderfully and transparently with Bucklescript.

- ``bsb``:  The Bucklescript Build system is built on the super-fast ``ninja`` build system that wraps the usual OCaml cruft and lets it all work transparently with the NPM packaging system, thus allowing you to add Bucklescript to your Javascript projects and vice-versa with ease via the ``bsconfig.json`` file.

As well as many many more.

Stay tuned for more articles on Bucklescript.  You can click the Bucklescript tag below to see them all.

.. _Dart: https://www.dartlang.org/
.. _Typescript: https://www.typescriptlang.org/
.. _Purescript: https://www.purescript.org/
.. _Elm: http://elm-lang.org/
