(function (exports) {
'use strict';

function __(tag, block) {
  block.tag = tag;
  return block;
}


/* No side effect */

var failure = /* tuple */[
  "Failure",
  -2
];

var invalid_argument = /* tuple */[
  "Invalid_argument",
  -3
];

var not_found = /* tuple */[
  "Not_found",
  -6
];

var match_failure = /* tuple */[
  "Match_failure",
  -7
];

var assert_failure = /* tuple */[
  "Assert_failure",
  -10
];

failure.tag = 248;

invalid_argument.tag = 248;

not_found.tag = 248;

match_failure.tag = 248;

assert_failure.tag = 248;


/*  Not a pure module */

function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  }
  return result;
}

function caml_array_set(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw [
          invalid_argument,
          "index out of bounds"
        ];
  } else {
    xs[index] = newval;
    return /* () */0;
  }
}

function caml_array_get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw [
          invalid_argument,
          "index out of bounds"
        ];
  } else {
    return xs[index];
  }
}

function caml_make_vect(len, init) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = init;
  }
  return b;
}


/* No side effect */

function app(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var arity = f.length;
    var arity$1 = arity ? arity : 1;
    var len = args.length;
    var d = arity$1 - len | 0;
    if (d) {
      if (d < 0) {
        _args = caml_array_sub(args, arity$1, -d | 0);
        _f = f.apply(null, caml_array_sub(args, 0, arity$1));
        continue ;
        
      } else {
        return (function(f,args){
        return function (x) {
          return app(f, args.concat(/* array */[x]));
        }
        }(f,args));
      }
    } else {
      return f.apply(null, args);
    }
  }
}

function curry_1(o, a0, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return o(a0);
      case 2 : 
          return function (param) {
            return o(a0, param);
          };
      case 3 : 
          return function (param, param$1) {
            return o(a0, param, param$1);
          };
      case 4 : 
          return function (param, param$1, param$2) {
            return o(a0, param, param$1, param$2);
          };
      case 5 : 
          return function (param, param$1, param$2, param$3) {
            return o(a0, param, param$1, param$2, param$3);
          };
      case 6 : 
          return function (param, param$1, param$2, param$3, param$4) {
            return o(a0, param, param$1, param$2, param$3, param$4);
          };
      case 7 : 
          return function (param, param$1, param$2, param$3, param$4, param$5) {
            return o(a0, param, param$1, param$2, param$3, param$4, param$5);
          };
      
    }
  }
}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1(o, a0, arity);
  }
}

function curry_2(o, a0, a1, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return app(o(a0), /* array */[a1]);
      case 2 : 
          return o(a0, a1);
      case 3 : 
          return function (param) {
            return o(a0, a1, param);
          };
      case 4 : 
          return function (param, param$1) {
            return o(a0, a1, param, param$1);
          };
      case 5 : 
          return function (param, param$1, param$2) {
            return o(a0, a1, param, param$1, param$2);
          };
      case 6 : 
          return function (param, param$1, param$2, param$3) {
            return o(a0, a1, param, param$1, param$2, param$3);
          };
      case 7 : 
          return function (param, param$1, param$2, param$3, param$4) {
            return o(a0, a1, param, param$1, param$2, param$3, param$4);
          };
      
    }
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2(o, a0, a1, arity);
  }
}

function curry_3(o, a0, a1, a2, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[a2]);
      case 3 : 
          return o(a0, a1, a2);
      case 4 : 
          return function (param) {
            return o(a0, a1, a2, param);
          };
      case 5 : 
          return function (param, param$1) {
            return o(a0, a1, a2, param, param$1);
          };
      case 6 : 
          return function (param, param$1, param$2) {
            return o(a0, a1, a2, param, param$1, param$2);
          };
      case 7 : 
          return function (param, param$1, param$2, param$3) {
            return o(a0, a1, a2, param, param$1, param$2, param$3);
          };
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2
              ]);
  }
  
}

function _3(o, a0, a1, a2) {
  var arity = o.length;
  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    return curry_3(o, a0, a1, a2, arity);
  }
}

function curry_4(o, a0, a1, a2, a3, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[a3]);
      case 4 : 
          return o(a0, a1, a2, a3);
      case 5 : 
          return function (param) {
            return o(a0, a1, a2, a3, param);
          };
      case 6 : 
          return function (param, param$1) {
            return o(a0, a1, a2, a3, param, param$1);
          };
      case 7 : 
          return function (param, param$1, param$2) {
            return o(a0, a1, a2, a3, param, param$1, param$2);
          };
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3
              ]);
  }
  
}

function _4(o, a0, a1, a2, a3) {
  var arity = o.length;
  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    return curry_4(o, a0, a1, a2, a3, arity);
  }
}

function curry_5(o, a0, a1, a2, a3, a4, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[a4]);
      case 5 : 
          return o(a0, a1, a2, a3, a4);
      case 6 : 
          return function (param) {
            return o(a0, a1, a2, a3, a4, param);
          };
      case 7 : 
          return function (param, param$1) {
            return o(a0, a1, a2, a3, a4, param, param$1);
          };
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4
              ]);
  }
  
}

function _5(o, a0, a1, a2, a3, a4) {
  var arity = o.length;
  if (arity === 5) {
    return o(a0, a1, a2, a3, a4);
  } else {
    return curry_5(o, a0, a1, a2, a3, a4, arity);
  }
}

function curry_6(o, a0, a1, a2, a3, a4, a5, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[a5]);
      case 6 : 
          return o(a0, a1, a2, a3, a4, a5);
      case 7 : 
          return function (param) {
            return o(a0, a1, a2, a3, a4, a5, param);
          };
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  }
  
}

function _6(o, a0, a1, a2, a3, a4, a5) {
  var arity = o.length;
  if (arity === 6) {
    return o(a0, a1, a2, a3, a4, a5);
  } else {
    return curry_6(o, a0, a1, a2, a3, a4, a5, arity);
  }
}

function curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6
                    ]);
      case 6 : 
          return app(o(a0, a1, a2, a3, a4, a5), /* array */[a6]);
      case 7 : 
          return o(a0, a1, a2, a3, a4, a5, a6);
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  }
  
}

function _7(o, a0, a1, a2, a3, a4, a5, a6) {
  var arity = o.length;
  if (arity === 7) {
    return o(a0, a1, a2, a3, a4, a5, a6);
  } else {
    return curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity);
  }
}

function curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6,
                      a7
                    ]);
      case 6 : 
          return app(o(a0, a1, a2, a3, a4, a5), /* array */[
                      a6,
                      a7
                    ]);
      case 7 : 
          return app(o(a0, a1, a2, a3, a4, a5, a6), /* array */[a7]);
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  }
  
}

function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
  var arity = o.length;
  if (arity === 8) {
    return o(a0, a1, a2, a3, a4, a5, a6, a7);
  } else {
    return curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity);
  }
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function setItem$1($$window, key, value) {
  var match = $$window.localStorage;
  if (match !== undefined) {
    return match.setItem(key, value);
  } else {
    return /* () */0;
  }
}

function getItem$1($$window, key) {
  var match = $$window.localStorage;
  if (match !== undefined) {
    var res = match.getItem(key);
    if (res === "") {
      return /* None */0;
    } else {
      return /* Some */[res];
    }
  } else {
    return /* None */0;
  }
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function getItem$$1(key) {
  return /* Task */[function (cb) {
            var match = getItem$1(window, key);
            if (match) {
              return _1(cb, /* Ok */__(0, [match[0]]));
            } else {
              return _1(cb, /* Error */__(1, ["Key not found"]));
            }
          }];
}

function setItem$$1(key, value) {
  return /* Task */[function (cb) {
            setItem$1(window, key, value);
            return _1(cb, /* Ok */__(0, [/* () */0]));
          }];
}

var LocalStorage = /* module */[
  /* getItem */getItem$$1,
  /* setItem */setItem$$1
];


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function polyfills() {
  ((
  // remove polyfill
  (function() {
    if (!('remove' in Element.prototype)) {
      Element.prototype.remove = function() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      };
    }
  }())
  ));
  ((
  // requestAnimationFrame polyfill
  (function() {
      var lastTime = 0;
      var vendors = ['ms', 'moz', 'webkit', 'o'];
      for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
          window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
          window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                     || window[vendors[x]+'CancelRequestAnimationFrame'];
      }

      if (!window.requestAnimationFrame)
          window.requestAnimationFrame = function(callback, element) {
              var currTime = new Date().getTime();
              var timeToCall = Math.max(0, 16 - (currTime - lastTime));
              var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
              lastTime = currTime + timeToCall;
              return id;
          };

      if (!window.cancelAnimationFrame)
          window.cancelAnimationFrame = function(id) {
              clearTimeout(id);
          };
  }())
  ));
  return /* () */0;
}


/* No side effect */

function caml_int_compare(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}

function caml_compare(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    var a_type = typeof a;
    var b_type = typeof b;
    if (a_type === "string") {
      var x = a;
      var y = b;
      if (x < y) {
        return -1;
      } else if (x === y) {
        return 0;
      } else {
        return 1;
      }
    } else {
      var is_a_number = +(a_type === "number");
      var is_b_number = +(b_type === "number");
      if (is_a_number !== 0) {
        if (is_b_number !== 0) {
          return caml_int_compare(a, b);
        } else {
          return -1;
        }
      } else if (is_b_number !== 0) {
        return 1;
      } else if (a_type === "boolean" || a_type === "null" || a_type === "undefined") {
        var x$1 = a;
        var y$1 = b;
        if (x$1 === y$1) {
          return 0;
        } else if (x$1 < y$1) {
          return -1;
        } else {
          return 1;
        }
      } else if (a_type === "function" || b_type === "function") {
        throw [
              invalid_argument,
              "compare: functional value"
            ];
      } else {
        var tag_a = a.tag | 0;
        var tag_b = b.tag | 0;
        if (tag_a === 250) {
          _a = a[0];
          continue ;
          
        } else if (tag_b === 250) {
          _b = b[0];
          continue ;
          
        } else if (tag_a === 248) {
          return caml_int_compare(a[1], b[1]);
        } else if (tag_a === 251) {
          throw [
                invalid_argument,
                "equal: abstract value"
              ];
        } else if (tag_a !== tag_b) {
          if (tag_a < tag_b) {
            return -1;
          } else {
            return 1;
          }
        } else {
          var len_a = a.length;
          var len_b = b.length;
          if (len_a === len_b) {
            var a$1 = a;
            var b$1 = b;
            var _i = 0;
            var same_length = len_a;
            while(true) {
              var i = _i;
              if (i === same_length) {
                return 0;
              } else {
                var res = caml_compare(a$1[i], b$1[i]);
                if (res !== 0) {
                  return res;
                } else {
                  _i = i + 1 | 0;
                  continue ;
                  
                }
              }
            }
          } else if (len_a < len_b) {
            var a$2 = a;
            var b$2 = b;
            var _i$1 = 0;
            var short_length = len_a;
            while(true) {
              var i$1 = _i$1;
              if (i$1 === short_length) {
                return -1;
              } else {
                var res$1 = caml_compare(a$2[i$1], b$2[i$1]);
                if (res$1 !== 0) {
                  return res$1;
                } else {
                  _i$1 = i$1 + 1 | 0;
                  continue ;
                  
                }
              }
            }
          } else {
            var a$3 = a;
            var b$3 = b;
            var _i$2 = 0;
            var short_length$1 = len_b;
            while(true) {
              var i$2 = _i$2;
              if (i$2 === short_length$1) {
                return 1;
              } else {
                var res$2 = caml_compare(a$3[i$2], b$3[i$2]);
                if (res$2 !== 0) {
                  return res$2;
                } else {
                  _i$2 = i$2 + 1 | 0;
                  continue ;
                  
                }
              }
            }
          }
        }
      }
    }
  }
}

function caml_equal(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return /* true */1;
    } else {
      var a_type = typeof a;
      if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a_type === "null") {
        return /* false */0;
      } else {
        var b_type = typeof b;
        if (a_type === "function" || b_type === "function") {
          throw [
                invalid_argument,
                "equal: functional value"
              ];
        } else if (b_type === "number" || b_type === "null" || b_type === "undefined") {
          return /* false */0;
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
            
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
            
          } else if (tag_a === 248) {
            return +(a[1] === b[1]);
          } else if (tag_a === 251) {
            throw [
                  invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            return /* false */0;
          } else {
            var len_a = a.length;
            var len_b = b.length;
            if (len_a === len_b) {
              var a$1 = a;
              var b$1 = b;
              var _i = 0;
              var same_length = len_a;
              while(true) {
                var i = _i;
                if (i === same_length) {
                  return /* true */1;
                } else if (caml_equal(a$1[i], b$1[i])) {
                  _i = i + 1 | 0;
                  continue ;
                  
                } else {
                  return /* false */0;
                }
              }
            } else {
              return /* false */0;
            }
          }
        }
      }
    }
  }
}

function caml_lessequal(a, b) {
  return +(caml_compare(a, b) <= 0);
}


/* No side effect */

/* stdin Not a pure module */

/* No side effect */

var imul = ( Math.imul || function (x,y) {
  y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
}
);


/* imul Not a pure module */

/* repeat Not a pure module */

/* two_ptr_32_dbl Not a pure module */

function lowercase(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function parse_format(fmt) {
  var len = fmt.length;
  if (len > 31) {
    throw [
          invalid_argument,
          "format_int: format too long"
        ];
  }
  var f = /* record */[
    /* justify */"+",
    /* signstyle */"-",
    /* filter */" ",
    /* alternate : false */0,
    /* base : Dec */2,
    /* signedconv : false */0,
    /* width */0,
    /* uppercase : false */0,
    /* sign */1,
    /* prec */-1,
    /* conv */"f"
  ];
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= len) {
      return f;
    } else {
      var c = fmt.charCodeAt(i);
      var exit = 0;
      if (c >= 69) {
        if (c >= 88) {
          if (c >= 121) {
            exit = 1;
          } else {
            switch (c - 88 | 0) {
              case 0 : 
                  f[/* base */4] = /* Hex */1;
                  f[/* uppercase */7] = /* true */1;
                  _i = i + 1 | 0;
                  continue ;
                  case 13 : 
              case 14 : 
              case 15 : 
                  exit = 5;
                  break;
              case 12 : 
              case 17 : 
                  exit = 4;
                  break;
              case 23 : 
                  f[/* base */4] = /* Oct */0;
                  _i = i + 1 | 0;
                  continue ;
                  case 29 : 
                  f[/* base */4] = /* Dec */2;
                  _i = i + 1 | 0;
                  continue ;
                  case 1 : 
              case 2 : 
              case 3 : 
              case 4 : 
              case 5 : 
              case 6 : 
              case 7 : 
              case 8 : 
              case 9 : 
              case 10 : 
              case 11 : 
              case 16 : 
              case 18 : 
              case 19 : 
              case 20 : 
              case 21 : 
              case 22 : 
              case 24 : 
              case 25 : 
              case 26 : 
              case 27 : 
              case 28 : 
              case 30 : 
              case 31 : 
                  exit = 1;
                  break;
              case 32 : 
                  f[/* base */4] = /* Hex */1;
                  _i = i + 1 | 0;
                  continue ;
                  
            }
          }
        } else if (c >= 72) {
          exit = 1;
        } else {
          f[/* signedconv */5] = /* true */1;
          f[/* uppercase */7] = /* true */1;
          f[/* conv */10] = String.fromCharCode(lowercase(c));
          _i = i + 1 | 0;
          continue ;
          
        }
      } else {
        var switcher = c - 32 | 0;
        if (switcher > 25 || switcher < 0) {
          exit = 1;
        } else {
          switch (switcher) {
            case 3 : 
                f[/* alternate */3] = /* true */1;
                _i = i + 1 | 0;
                continue ;
                case 0 : 
            case 11 : 
                exit = 2;
                break;
            case 13 : 
                f[/* justify */0] = "-";
                _i = i + 1 | 0;
                continue ;
                case 14 : 
                f[/* prec */9] = 0;
                var j = i + 1 | 0;
                while((function(j){
                    return function () {
                      var w = fmt.charCodeAt(j) - /* "0" */48 | 0;
                      return +(w >= 0 && w <= 9);
                    }
                    }(j))()) {
                  f[/* prec */9] = (imul(f[/* prec */9], 10) + fmt.charCodeAt(j) | 0) - /* "0" */48 | 0;
                  j = j + 1 | 0;
                };
                _i = j;
                continue ;
                case 1 : 
            case 2 : 
            case 4 : 
            case 5 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 12 : 
            case 15 : 
                exit = 1;
                break;
            case 16 : 
                f[/* filter */2] = "0";
                _i = i + 1 | 0;
                continue ;
                case 17 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 23 : 
            case 24 : 
            case 25 : 
                exit = 3;
                break;
            
          }
        }
      }
      switch (exit) {
        case 1 : 
            _i = i + 1 | 0;
            continue ;
            case 2 : 
            f[/* signstyle */1] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
            case 3 : 
            f[/* width */6] = 0;
            var j$1 = i;
            while((function(j$1){
                return function () {
                  var w = fmt.charCodeAt(j$1) - /* "0" */48 | 0;
                  return +(w >= 0 && w <= 9);
                }
                }(j$1))()) {
              f[/* width */6] = (imul(f[/* width */6], 10) + fmt.charCodeAt(j$1) | 0) - /* "0" */48 | 0;
              j$1 = j$1 + 1 | 0;
            };
            _i = j$1;
            continue ;
            case 4 : 
            f[/* signedconv */5] = /* true */1;
            f[/* base */4] = /* Dec */2;
            _i = i + 1 | 0;
            continue ;
            case 5 : 
            f[/* signedconv */5] = /* true */1;
            f[/* conv */10] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
            
      }
    }
  }
}

function finish_formatting(param, rawbuffer) {
  var justify = param[/* justify */0];
  var signstyle = param[/* signstyle */1];
  var filter = param[/* filter */2];
  var alternate = param[/* alternate */3];
  var base = param[/* base */4];
  var signedconv = param[/* signedconv */5];
  var width = param[/* width */6];
  var uppercase = param[/* uppercase */7];
  var sign = param[/* sign */8];
  var len = rawbuffer.length;
  if (signedconv && (sign < 0 || signstyle !== "-")) {
    len = len + 1 | 0;
  }
  if (alternate) {
    if (base) {
      if (base === /* Hex */1) {
        len = len + 2 | 0;
      }
      
    } else {
      len = len + 1 | 0;
    }
  }
  var buffer = "";
  if (justify === "+" && filter === " ") {
    for(var i = len ,i_finish = width - 1 | 0; i <= i_finish; ++i){
      buffer = buffer + filter;
    }
  }
  if (signedconv) {
    if (sign < 0) {
      buffer = buffer + "-";
    } else if (signstyle !== "-") {
      buffer = buffer + signstyle;
    }
    
  }
  if (alternate && base === /* Oct */0) {
    buffer = buffer + "0";
  }
  if (alternate && base === /* Hex */1) {
    buffer = buffer + "0x";
  }
  if (justify === "+" && filter === "0") {
    for(var i$1 = len ,i_finish$1 = width - 1 | 0; i$1 <= i_finish$1; ++i$1){
      buffer = buffer + filter;
    }
  }
  buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
  if (justify === "-") {
    for(var i$2 = len ,i_finish$2 = width - 1 | 0; i$2 <= i_finish$2; ++i$2){
      buffer = buffer + " ";
    }
  }
  return buffer;
}

function caml_format_float(fmt, x) {
  var f = parse_format(fmt);
  var prec = f[/* prec */9] < 0 ? 6 : f[/* prec */9];
  var x$1 = x < 0 ? (f[/* sign */8] = -1, -x) : x;
  var s = "";
  if (isNaN(x$1)) {
    s = "nan";
    f[/* filter */2] = " ";
  } else if (isFinite(x$1)) {
    var match = f[/* conv */10];
    switch (match) {
      case "e" : 
          s = x$1.toExponential(prec);
          var i = s.length;
          if (s[i - 3 | 0] === "e") {
            s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
          }
          break;
      case "f" : 
          s = x$1.toFixed(prec);
          break;
      case "g" : 
          var prec$1 = prec !== 0 ? prec : 1;
          s = x$1.toExponential(prec$1 - 1 | 0);
          var j = s.indexOf("e");
          var exp = Number(s.slice(j + 1 | 0)) | 0;
          if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
            var i$1 = j - 1 | 0;
            while(s[i$1] === "0") {
              i$1 = i$1 - 1 | 0;
            }
            if (s[i$1] === ".") {
              i$1 = i$1 - 1 | 0;
            }
            s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
            var i$2 = s.length;
            if (s[i$2 - 3 | 0] === "e") {
              s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
            }
            
          } else {
            var p = prec$1;
            if (exp < 0) {
              p = p - (exp + 1 | 0) | 0;
              s = x$1.toFixed(p);
            } else {
              while(function () {
                    s = x$1.toFixed(p);
                    return +(s.length > (prec$1 + 1 | 0));
                  }()) {
                p = p - 1 | 0;
              }
            }
            if (p !== 0) {
              var k = s.length - 1 | 0;
              while(s[k] === "0") {
                k = k - 1 | 0;
              }
              if (s[k] === ".") {
                k = k - 1 | 0;
              }
              s = s.slice(0, k + 1 | 0);
            }
            
          }
          break;
      default:
        
    }
  } else {
    s = "inf";
    f[/* filter */2] = " ";
  }
  return finish_formatting(f, s);
}


/* float_of_string Not a pure module */

function caml_create_string(len) {
  if (len < 0) {
    throw [
          invalid_argument,
          "String.create"
        ];
  } else {
    return new Array(len);
  }
}

function caml_string_compare(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}

function caml_fill_string(s, i, l, c) {
  if (l > 0) {
    for(var k = i ,k_finish = (l + i | 0) - 1 | 0; k <= k_finish; ++k){
      s[k] = c;
    }
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_blit_bytes(s1, i1, s2, i2, len) {
  if (len > 0) {
    if (s1 === s2) {
      var s1$1 = s1;
      var i1$1 = i1;
      var i2$1 = i2;
      var len$1 = len;
      if (i1$1 < i2$1) {
        var range_a = (s1$1.length - i2$1 | 0) - 1 | 0;
        var range_b = len$1 - 1 | 0;
        var range = range_a > range_b ? range_b : range_a;
        for(var j = range; j >= 0; --j){
          s1$1[i2$1 + j | 0] = s1$1[i1$1 + j | 0];
        }
        return /* () */0;
      } else if (i1$1 > i2$1) {
        var range_a$1 = (s1$1.length - i1$1 | 0) - 1 | 0;
        var range_b$1 = len$1 - 1 | 0;
        var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
        for(var k = 0; k <= range$1; ++k){
          s1$1[i2$1 + k | 0] = s1$1[i1$1 + k | 0];
        }
        return /* () */0;
      } else {
        return 0;
      }
    } else {
      var off1 = s1.length - i1 | 0;
      if (len <= off1) {
        for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
          s2[i2 + i | 0] = s1[i1 + i | 0];
        }
        return /* () */0;
      } else {
        for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
          s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
        }
        for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
          s2[i2 + i$2 | 0] = /* "\000" */0;
        }
        return /* () */0;
      }
    }
  } else {
    return 0;
  }
}

function bytes_of_string(s) {
  var len = s.length;
  var res = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    res[i] = s.charCodeAt(i);
  }
  return res;
}

function bytes_to_string(a) {
  var bytes = a;
  var i = 0;
  var len = a.length;
  var s = "";
  var s_len = len;
  if (i === 0 && len <= 4096 && len === bytes.length) {
    return String.fromCharCode.apply(null,bytes);
  } else {
    var offset = 0;
    while(s_len > 0) {
      var next = s_len < 1024 ? s_len : 1024;
      var tmp_bytes = new Array(next);
      caml_blit_bytes(bytes, offset, tmp_bytes, 0, next);
      s = s + String.fromCharCode.apply(null,tmp_bytes);
      s_len = s_len - next | 0;
      offset = offset + next | 0;
    }
    return s;
  }
}

function get(s, i) {
  if (i < 0 || i >= s.length) {
    throw [
          invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s.charCodeAt(i);
  }
}


/* No side effect */

var id = [0];

function get_id() {
  id[0] += 1;
  return id[0];
}

function create(str) {
  var v_001 = get_id(/* () */0);
  var v = /* tuple */[
    str,
    v_001
  ];
  v.tag = 248;
  return v;
}

function isCamlExceptionOrOpenVariant(e) {
  if (e === undefined) {
    return /* false */0;
  } else if (e.tag === 248) {
    return /* true */1;
  } else {
    var slot = e[0];
    if (slot !== undefined) {
      return +(slot.tag === 248);
    } else {
      return /* false */0;
    }
  }
}


/* No side effect */

/* not_implemented Not a pure module */

/* No side effect */

var Exit = create("Pervasives.Exit");

function min(x, y) {
  if (caml_lessequal(x, y)) {
    return x;
  } else {
    return y;
  }
}

var min_int = -2147483648;

function $caret$$1(a, b) {
  return a + b;
}

function string_of_int(param) {
  return "" + param;
}

function valid_float_lexem(s) {
  var l = s.length;
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= l) {
      return $caret$$1(s, ".");
    } else {
      var match = get(s, i);
      if (match >= 48) {
        if (match >= 58) {
          return s;
        } else {
          _i = i + 1 | 0;
          continue ;
          
        }
      } else if (match !== 45) {
        return s;
      } else {
        _i = i + 1 | 0;
        continue ;
        
      }
    }
  }
}

function string_of_float(f) {
  return valid_float_lexem(caml_format_float("%.12g", f));
}

function $at(l1, l2) {
  if (l1) {
    return /* :: */[
            l1[0],
            $at(l1[1], l2)
          ];
  } else {
    return l2;
  }
}

var max_int = 2147483647;

var max_float = Number.MAX_VALUE;


/* No side effect */

function length(l) {
  var _len = 0;
  var _param = l;
  while(true) {
    var param = _param;
    var len = _len;
    if (param) {
      _param = param[1];
      _len = len + 1 | 0;
      continue ;
      
    } else {
      return len;
    }
  }
}

function rev_append(_l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      _l2 = /* :: */[
        l1[0],
        l2
      ];
      _l1 = l1[1];
      continue ;
      
    } else {
      return l2;
    }
  }
}

function rev(l) {
  return rev_append(l, /* [] */0);
}

function flatten(param) {
  if (param) {
    return $at(param[0], flatten(param[1]));
  } else {
    return /* [] */0;
  }
}

function map$1(f, param) {
  if (param) {
    var r = _1(f, param[0]);
    return /* :: */[
            r,
            map$1(f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function iter(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      _1(f, param[0]);
      _param = param[1];
      continue ;
      
    } else {
      return /* () */0;
    }
  }
}

function fold_left(f, _accu, _l) {
  while(true) {
    var l = _l;
    var accu = _accu;
    if (l) {
      _l = l[1];
      _accu = _2(f, accu, l[0]);
      continue ;
      
    } else {
      return accu;
    }
  }
}

function fold_right(f, l, accu) {
  if (l) {
    return _2(f, l[0], fold_right(f, l[1], accu));
  } else {
    return accu;
  }
}

function fold_left2(f, _accu, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    var accu = _accu;
    if (l1) {
      if (l2) {
        _l2 = l2[1];
        _l1 = l1[1];
        _accu = _3(f, accu, l1[0], l2[0]);
        continue ;
        
      } else {
        throw [
              invalid_argument,
              "List.fold_left2"
            ];
      }
    } else if (l2) {
      throw [
            invalid_argument,
            "List.fold_left2"
          ];
    } else {
      return accu;
    }
  }
}

function find_all(p) {
  return function (param) {
    var _accu = /* [] */0;
    var _param = param;
    while(true) {
      var param$1 = _param;
      var accu = _accu;
      if (param$1) {
        var l = param$1[1];
        var x = param$1[0];
        if (_1(p, x)) {
          _param = l;
          _accu = /* :: */[
            x,
            accu
          ];
          continue ;
          
        } else {
          _param = l;
          continue ;
          
        }
      } else {
        return rev_append(accu, /* [] */0);
      }
    }
  };
}

function chop(_k, _l) {
  while(true) {
    var l = _l;
    var k = _k;
    if (k) {
      if (l) {
        _l = l[1];
        _k = k - 1 | 0;
        continue ;
        
      } else {
        throw [
              assert_failure,
              [
                "list.ml",
                223,
                11
              ]
            ];
      }
    } else {
      return l;
    }
  }
}

function sort_uniq(cmp, l) {
  var sort = function (n, l) {
    var exit$$1 = 0;
    if (n !== 2) {
      if (n !== 3) {
        exit$$1 = 1;
      } else if (l) {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            var c = _2(cmp, x1, x2);
            if (c) {
              if (c < 0) {
                var c$1 = _2(cmp, x2, x3);
                if (c$1) {
                  if (c$1 < 0) {
                    return /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$2 = _2(cmp, x1, x3);
                    if (c$2) {
                      if (c$2 < 0) {
                        return /* :: */[
                                x1,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x1,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x1,
                              /* :: */[
                                x2,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                var c$3 = _2(cmp, x1, x3);
                if (c$3) {
                  if (c$3 < 0) {
                    return /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$4 = _2(cmp, x2, x3);
                    if (c$4) {
                      if (c$4 < 0) {
                        return /* :: */[
                                x2,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x2,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x2,
                              /* :: */[
                                x1,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* [] */0
                          ]
                        ];
                }
              }
            } else {
              var c$5 = _2(cmp, x2, x3);
              if (c$5) {
                if (c$5 < 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                return /* :: */[
                        x2,
                        /* [] */0
                      ];
              }
            }
          } else {
            exit$$1 = 1;
          }
        } else {
          exit$$1 = 1;
        }
      } else {
        exit$$1 = 1;
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        var c$6 = _2(cmp, x1$1, x2$1);
        if (c$6) {
          if (c$6 < 0) {
            return /* :: */[
                    x1$1,
                    /* :: */[
                      x2$1,
                      /* [] */0
                    ]
                  ];
          } else {
            return /* :: */[
                    x2$1,
                    /* :: */[
                      x1$1,
                      /* [] */0
                    ]
                  ];
          }
        } else {
          return /* :: */[
                  x1$1,
                  /* [] */0
                ];
        }
      } else {
        exit$$1 = 1;
      }
    } else {
      exit$$1 = 1;
    }
    if (exit$$1 === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = rev_sort(n1, l);
      var s2 = rev_sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var t2 = l2$1[1];
            var h2 = l2$1[0];
            var t1 = l1[1];
            var h1 = l1[0];
            var c$7 = _2(cmp, h1, h2);
            if (c$7) {
              if (c$7 > 0) {
                _accu = /* :: */[
                  h1,
                  accu
                ];
                _l1 = t1;
                continue ;
                
              } else {
                _accu = /* :: */[
                  h2,
                  accu
                ];
                _l2 = t2;
                continue ;
                
              }
            } else {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l2 = t2;
              _l1 = t1;
              continue ;
              
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      }
    }
    
  };
  var rev_sort = function (n, l) {
    var exit$$1 = 0;
    if (n !== 2) {
      if (n !== 3) {
        exit$$1 = 1;
      } else if (l) {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            var c = _2(cmp, x1, x2);
            if (c) {
              if (c > 0) {
                var c$1 = _2(cmp, x2, x3);
                if (c$1) {
                  if (c$1 > 0) {
                    return /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$2 = _2(cmp, x1, x3);
                    if (c$2) {
                      if (c$2 > 0) {
                        return /* :: */[
                                x1,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x1,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x1,
                              /* :: */[
                                x2,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                var c$3 = _2(cmp, x1, x3);
                if (c$3) {
                  if (c$3 > 0) {
                    return /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$4 = _2(cmp, x2, x3);
                    if (c$4) {
                      if (c$4 > 0) {
                        return /* :: */[
                                x2,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x2,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x2,
                              /* :: */[
                                x1,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* [] */0
                          ]
                        ];
                }
              }
            } else {
              var c$5 = _2(cmp, x2, x3);
              if (c$5) {
                if (c$5 > 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                return /* :: */[
                        x2,
                        /* [] */0
                      ];
              }
            }
          } else {
            exit$$1 = 1;
          }
        } else {
          exit$$1 = 1;
        }
      } else {
        exit$$1 = 1;
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        var c$6 = _2(cmp, x1$1, x2$1);
        if (c$6) {
          if (c$6 > 0) {
            return /* :: */[
                    x1$1,
                    /* :: */[
                      x2$1,
                      /* [] */0
                    ]
                  ];
          } else {
            return /* :: */[
                    x2$1,
                    /* :: */[
                      x1$1,
                      /* [] */0
                    ]
                  ];
          }
        } else {
          return /* :: */[
                  x1$1,
                  /* [] */0
                ];
        }
      } else {
        exit$$1 = 1;
      }
    } else {
      exit$$1 = 1;
    }
    if (exit$$1 === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = sort(n1, l);
      var s2 = sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var t2 = l2$1[1];
            var h2 = l2$1[0];
            var t1 = l1[1];
            var h1 = l1[0];
            var c$7 = _2(cmp, h1, h2);
            if (c$7) {
              if (c$7 < 0) {
                _accu = /* :: */[
                  h1,
                  accu
                ];
                _l1 = t1;
                continue ;
                
              } else {
                _accu = /* :: */[
                  h2,
                  accu
                ];
                _l2 = t2;
                continue ;
                
              }
            } else {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l2 = t2;
              _l1 = t1;
              continue ;
              
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      }
    }
    
  };
  var len = length(l);
  if (len < 2) {
    return l;
  } else {
    return sort(len, l);
  }
}

var filter = find_all;


/* No side effect */

/* No side effect */

function make$1(n, c) {
  var s = caml_create_string(n);
  caml_fill_string(s, 0, n, c);
  return s;
}

function sub$2(s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          invalid_argument,
          "String.sub / Bytes.sub"
        ];
  } else {
    var r = caml_create_string(len);
    caml_blit_bytes(s, ofs, r, 0, len);
    return r;
  }
}


/* No side effect */

function make$$1(n, c) {
  return bytes_to_string(make$1(n, c));
}

function sub$1(s, ofs, len) {
  return bytes_to_string(sub$2(bytes_of_string(s), ofs, len));
}

var compare$1 = caml_string_compare;


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function setStyle(n, key, value) {
  n.style[key] = value;
  return /* () */0;
}

function setStyleProperty(n, $staropt$star, key, value) {
  var priority = $staropt$star ? $staropt$star[0] : /* false */0;
  var style = n.style;
  var match = style.setProperty;
  if (match !== undefined) {
    return style.setProperty(key, value, priority ? "important" : null);
  } else {
    return setStyle(n, key, value);
  }
}

function insertBefore(n, child, refNode) {
  return n.insertBefore(child, refNode);
}

function setAttributeNsOptional(n, namespace, key, value) {
  if (namespace === "") {
    return n.setAttribute(key, value);
  } else {
    return n.setAttributeNS(namespace, key, value);
  }
}

function removeAttributeNsOptional(n, namespace, key) {
  if (namespace === "") {
    return n.removeAttribute(key);
  } else {
    return n.removeAttributeNS(namespace, key);
  }
}

function addEventListener(n, typ, listener, options) {
  return n.addEventListener(typ, listener, options);
}

function removeEventListener(n, typ, listener, options) {
  return n.removeEventListener(typ, listener, options);
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function createElementNsOptional(namespace, tagName) {
  if (namespace === "") {
    return document.createElement(tagName);
  } else {
    return document.createElementNS(namespace, tagName);
  }
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
var noNode = /* CommentNode */__(0, [""]);

function fullnode(namespace, tagName, key, unique, props, vdoms) {
  return /* Node */__(2, [
            namespace,
            tagName,
            key,
            unique,
            props,
            vdoms
          ]);
}

function onMsg(name, msg) {
  return /* Event */__(3, [
            name,
            /* EventHandlerMsg */__(1, [msg]),
            [/* None */0]
          ]);
}

function eventHandler(callbacks, cb) {
  return function (ev) {
    var match = _1(cb[0], ev);
    if (match) {
      return _1(callbacks[0][/* enqueue */0], match[0]);
    } else {
      return /* () */0;
    }
  };
}

function eventHandler_GetCB(param) {
  if (param.tag) {
    var msg = param[0];
    return function () {
      return /* Some */[msg];
    };
  } else {
    return param[1];
  }
}

function compareEventHandlerTypes(left, param) {
  if (param.tag) {
    if (!left.tag || !caml_equal(param[0], left[0])) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  } else if (!left.tag && param[0] === left[0]) {
    return /* true */1;
  } else {
    return /* false */0;
  }
}

function eventHandler_Register(callbacks, elem, name, handlerType) {
  var cb = [eventHandler_GetCB(handlerType)];
  var handler = eventHandler(callbacks, cb);
  addEventListener(elem, name, handler, /* false */0);
  return /* Some */[/* record */[
            /* handler */handler,
            /* cb */cb
          ]];
}

function eventHandler_Unregister(elem, name, param) {
  if (param) {
    removeEventListener(elem, name, param[0][/* handler */0], /* false */0);
    return /* None */0;
  } else {
    return /* None */0;
  }
}

function eventHandler_Mutate(callbacks, elem, oldName, newName, oldHandlerType, newHandlerType, oldCache, newCache) {
  var match = oldCache[0];
  if (match) {
    if (oldName === newName) {
      newCache[0] = oldCache[0];
      if (compareEventHandlerTypes(oldHandlerType, newHandlerType)) {
        return /* () */0;
      } else {
        var cb = eventHandler_GetCB(newHandlerType);
        match[0][/* cb */1][0] = cb;
        return /* () */0;
      }
    } else {
      oldCache[0] = eventHandler_Unregister(elem, oldName, oldCache[0]);
      newCache[0] = eventHandler_Register(callbacks, elem, newName, newHandlerType);
      return /* () */0;
    }
  } else {
    newCache[0] = eventHandler_Register(callbacks, elem, newName, newHandlerType);
    return /* () */0;
  }
}

function patchVNodesOnElems_PropertiesApply_Add(callbacks, elem, _, param) {
  if (typeof param === "number") {
    return /* () */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          elem[param[0]] = param[1];
          return /* () */0;
      case 1 : 
          return setAttributeNsOptional(elem, param[0], param[1], param[2]);
      case 2 : 
          console.log(/* tuple */[
                "TODO:  Add Data Unhandled",
                param[0],
                param[1]
              ]);
          throw [
                failure,
                "TODO:  Add Data Unhandled"
              ];
      case 3 : 
          param[2][0] = eventHandler_Register(callbacks, elem, param[0], param[1]);
          return /* () */0;
      case 4 : 
          return fold_left(function (_, param) {
                      return setStyleProperty(elem, /* None */0, param[0], param[1]);
                    }, /* () */0, param[0]);
      
    }
  }
}

function patchVNodesOnElems_PropertiesApply_Remove(_, elem, _$1, param) {
  if (typeof param === "number") {
    return /* () */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          elem[param[0]] = undefined;
          return /* () */0;
      case 1 : 
          return removeAttributeNsOptional(elem, param[0], param[1]);
      case 2 : 
          console.log(/* tuple */[
                "TODO:  Remove Data Unhandled",
                param[0],
                param[1]
              ]);
          throw [
                failure,
                "TODO:  Remove Data Unhandled"
              ];
      case 3 : 
          var cache = param[2];
          cache[0] = eventHandler_Unregister(elem, param[0], cache[0]);
          return /* () */0;
      case 4 : 
          return fold_left(function (_, param) {
                      return setStyleProperty(elem, /* None */0, param[0], null);
                    }, /* () */0, param[0]);
      
    }
  }
}

function patchVNodesOnElems_PropertiesApply_RemoveAdd(callbacks, elem, idx, oldProp, newProp) {
  patchVNodesOnElems_PropertiesApply_Remove(callbacks, elem, idx, oldProp);
  patchVNodesOnElems_PropertiesApply_Add(callbacks, elem, idx, newProp);
  return /* () */0;
}

function patchVNodesOnElems_PropertiesApply_Mutate(_, elem, _$1, oldProp, _newProp) {
  if (typeof _newProp === "number") {
    throw [
          failure,
          "This should never be called as all entries through NoProp are gated."
        ];
  } else {
    switch (_newProp.tag | 0) {
      case 0 : 
          elem[_newProp[0]] = _newProp[1];
          return /* () */0;
      case 1 : 
          return setAttributeNsOptional(elem, _newProp[0], _newProp[1], _newProp[2]);
      case 2 : 
          console.log(/* tuple */[
                "TODO:  Mutate Data Unhandled",
                _newProp[0],
                _newProp[1]
              ]);
          throw [
                failure,
                "TODO:  Mutate Data Unhandled"
              ];
      case 3 : 
          throw [
                failure,
                "This will never be called because it is gated"
              ];
      case 4 : 
          if (typeof oldProp === "number") {
            throw [
                  failure,
                  "Passed a non-Style to a new Style as a Mutations while the old Style is not actually a style!"
                ];
          } else if (oldProp.tag === 4) {
            return fold_left2(function (_, param, param$1) {
                        var nv = param$1[1];
                        var nk = param$1[0];
                        var ok = param[0];
                        if (ok === nk) {
                          if (param[1] === nv) {
                            return /* () */0;
                          } else {
                            return setStyleProperty(elem, /* None */0, nk, nv);
                          }
                        } else {
                          setStyleProperty(elem, /* None */0, ok, null);
                          return setStyleProperty(elem, /* None */0, nk, nv);
                        }
                      }, /* () */0, oldProp[0], _newProp[0]);
          } else {
            throw [
                  failure,
                  "Passed a non-Style to a new Style as a Mutations while the old Style is not actually a style!"
                ];
          }
          break;
      
    }
  }
}

function patchVNodesOnElems_PropertiesApply(callbacks, elem, _idx, _oldProperties, _newProperties) {
  while(true) {
    var newProperties = _newProperties;
    var oldProperties = _oldProperties;
    var idx = _idx;
    if (oldProperties) {
      var oldProp = oldProperties[0];
      var exit = 0;
      if (newProperties) {
        if (typeof oldProp === "number") {
          if (typeof newProperties[0] === "number") {
            _newProperties = newProperties[1];
            _oldProperties = oldProperties[1];
            _idx = idx + 1 | 0;
            continue ;
            
          } else {
            exit = 1;
          }
        } else {
          switch (oldProp.tag | 0) {
            case 0 : 
                var newProp = newProperties[0];
                if (typeof newProp === "number") {
                  exit = 1;
                } else if (newProp.tag) {
                  exit = 1;
                } else {
                  if (!(oldProp[0] === newProp[0] && oldProp[1] === newProp[1])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, oldProp, newProp);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                }
                break;
            case 1 : 
                var newProp$1 = newProperties[0];
                if (typeof newProp$1 === "number") {
                  exit = 1;
                } else if (newProp$1.tag === 1) {
                  if (!(oldProp[0] === newProp$1[0] && oldProp[1] === newProp$1[1] && oldProp[2] === newProp$1[2])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, oldProp, newProp$1);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  exit = 1;
                }
                break;
            case 2 : 
                var newProp$2 = newProperties[0];
                if (typeof newProp$2 === "number") {
                  exit = 1;
                } else if (newProp$2.tag === 2) {
                  if (!(oldProp[0] === newProp$2[0] && oldProp[1] === newProp$2[1])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, oldProp, newProp$2);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  exit = 1;
                }
                break;
            case 3 : 
                var _newProp = newProperties[0];
                if (typeof _newProp === "number") {
                  exit = 1;
                } else if (_newProp.tag === 3) {
                  eventHandler_Mutate(callbacks, elem, oldProp[0], _newProp[0], oldProp[1], _newProp[1], oldProp[2], _newProp[2]);
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  exit = 1;
                }
                break;
            case 4 : 
                var newProp$3 = newProperties[0];
                if (typeof newProp$3 === "number") {
                  exit = 1;
                } else if (newProp$3.tag === 4) {
                  if (!caml_equal(oldProp[0], newProp$3[0])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, oldProp, newProp$3);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  exit = 1;
                }
                break;
            
          }
        }
      } else {
        return /* false */0;
      }
      if (exit === 1) {
        patchVNodesOnElems_PropertiesApply_RemoveAdd(callbacks, elem, idx, oldProp, newProperties[0]);
        _newProperties = newProperties[1];
        _oldProperties = oldProperties[1];
        _idx = idx + 1 | 0;
        continue ;
        
      }
      
    } else if (newProperties) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  }
}

function patchVNodesOnElems_Properties(callbacks, elem, oldProperties, newProperties) {
  return patchVNodesOnElems_PropertiesApply(callbacks, elem, 0, oldProperties, newProperties);
}

function patchVNodesOnElems_ReplaceNode(callbacks, elem, elems, idx, param) {
  if (param.tag === 2) {
    var newProperties = param[4];
    var oldChild = caml_array_get(elems, idx);
    var newChild = createElementNsOptional(param[0], param[1]);
    var match = patchVNodesOnElems_Properties(callbacks, newChild, map$1(function () {
              return /* NoProp */0;
            }, newProperties), newProperties);
    if (match !== 0) {
      var childChildren = newChild.childNodes;
      patchVNodesOnElems(callbacks, newChild, childChildren, 0, /* [] */0, param[5]);
      insertBefore(elem, newChild, oldChild);
      elem.removeChild(oldChild);
      return /* () */0;
    } else {
      throw [
            match_failure,
            [
              "/home/overminddl1/ocaml/tmp/overbots/node_modules/bucklescript-tea/src/vdom.ml",
              316,
              30
            ]
          ];
    }
  } else {
    throw [
          failure,
          "Node replacement should never be passed anything but a node itself"
        ];
  }
}

function patchVNodesOnElems_CreateElement(_callbacks, _param) {
  while(true) {
    var param = _param;
    var callbacks = _callbacks;
    switch (param.tag | 0) {
      case 0 : 
          var text = param[0];
          return document.createComment(text);
      case 1 : 
          var text$1 = param[0];
          return document.createTextNode(text$1);
      case 2 : 
          var newProperties = param[4];
          var newChild = createElementNsOptional(param[0], param[1]);
          var match = patchVNodesOnElems_Properties(callbacks, newChild, map$1(function () {
                    return /* NoProp */0;
                  }, newProperties), newProperties);
          if (match !== 0) {
            var childChildren = newChild.childNodes;
            patchVNodesOnElems(callbacks, newChild, childChildren, 0, /* [] */0, param[5]);
            return newChild;
          } else {
            throw [
                  match_failure,
                  [
                    "/home/overminddl1/ocaml/tmp/overbots/node_modules/bucklescript-tea/src/vdom.ml",
                    330,
                    30
                  ]
                ];
          }
          break;
      case 3 : 
          var vdom = _1(param[1], /* () */0);
          param[2][0] = vdom;
          _param = vdom;
          continue ;
          case 4 : 
          _param = param[1];
          _callbacks = _1(param[0], callbacks);
          continue ;
          
    }
  }
}

function patchVNodesOnElems_MutateNode(callbacks, elem, elems, idx, oldNode, newNode) {
  if (oldNode.tag === 2) {
    if (newNode.tag === 2) {
      if (oldNode[3] !== newNode[3] || oldNode[1] !== newNode[1]) {
        return patchVNodesOnElems_ReplaceNode(callbacks, elem, elems, idx, newNode);
      } else {
        var child = caml_array_get(elems, idx);
        var childChildren = child.childNodes;
        if (!patchVNodesOnElems_Properties(callbacks, child, oldNode[4], newNode[4])) {
          console.log("VDom:  Failed swapping properties because the property list length changed, use `noProp` to swap properties instead, not by altering the list structure.  This is a massive inefficiency until this issue is resolved.");
          patchVNodesOnElems_ReplaceNode(callbacks, elem, elems, idx, newNode);
        }
        return patchVNodesOnElems(callbacks, child, childChildren, 0, oldNode[5], newNode[5]);
      }
    } else {
      throw [
            failure,
            "Non-node passed to patchVNodesOnElems_MutateNode"
          ];
    }
  } else {
    throw [
          failure,
          "Non-node passed to patchVNodesOnElems_MutateNode"
        ];
  }
}

function patchVNodesOnElems(callbacks, elem, elems, _idx, _oldVNodes, _newVNodes) {
  while(true) {
    var newVNodes = _newVNodes;
    var oldVNodes = _oldVNodes;
    var idx = _idx;
    if (oldVNodes) {
      var oldNode = oldVNodes[0];
      var exit = 0;
      switch (oldNode.tag | 0) {
        case 0 : 
            if (newVNodes) {
              var match = newVNodes[0];
              if (match.tag) {
                exit = 1;
              } else if (oldNode[0] === match[0]) {
                _newVNodes = newVNodes[1];
                _oldVNodes = oldVNodes[1];
                _idx = idx + 1 | 0;
                continue ;
                
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
            break;
        case 1 : 
            if (newVNodes) {
              var match$1 = newVNodes[0];
              if (match$1.tag === 1) {
                var newText = match$1[0];
                if (oldNode[0] !== newText) {
                  var child = caml_array_get(elems, idx);
                  child.nodeValue = newText;
                }
                _newVNodes = newVNodes[1];
                _oldVNodes = oldVNodes[1];
                _idx = idx + 1 | 0;
                continue ;
                
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
            break;
        case 2 : 
            if (newVNodes) {
              var newNode = newVNodes[0];
              if (newNode.tag === 2) {
                var newRest = newVNodes[1];
                var newKey = newNode[2];
                var newTagName = newNode[1];
                var newNamespace = newNode[0];
                var oldRest = oldVNodes[1];
                var oldKey = oldNode[2];
                var oldTagName = oldNode[1];
                var oldNamespace = oldNode[0];
                if (oldKey === newKey && oldKey !== "") {
                  _newVNodes = newRest;
                  _oldVNodes = oldRest;
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else if (oldKey === "" || newKey === "") {
                  patchVNodesOnElems_MutateNode(callbacks, elem, elems, idx, oldNode, newNode);
                  _newVNodes = newRest;
                  _oldVNodes = oldRest;
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  var exit$1 = 0;
                  var exit$2 = 0;
                  if (oldRest) {
                    var match$2 = oldRest[0];
                    if (match$2.tag === 2) {
                      var olderRest = oldRest[1];
                      var olderKey = match$2[2];
                      var olderTagName = match$2[1];
                      var olderNamespace = match$2[0];
                      var exit$3 = 0;
                      if (newRest) {
                        var match$3 = newRest[0];
                        if (match$3.tag === 2) {
                          if (olderNamespace === newNamespace && olderTagName === newTagName && olderKey === newKey && oldNamespace === match$3[0] && oldTagName === match$3[1] && oldKey === match$3[2]) {
                            var firstChild$$1 = caml_array_get(elems, idx);
                            var secondChild = caml_array_get(elems, idx + 1 | 0);
                            elem.removeChild(secondChild);
                            insertBefore(elem, secondChild, firstChild$$1);
                            _newVNodes = newRest[1];
                            _oldVNodes = olderRest;
                            _idx = idx + 2 | 0;
                            continue ;
                            
                          } else {
                            exit$3 = 4;
                          }
                        } else {
                          exit$3 = 4;
                        }
                      } else {
                        exit$3 = 4;
                      }
                      if (exit$3 === 4) {
                        if (olderNamespace === newNamespace && olderTagName === newTagName && olderKey === newKey) {
                          var oldChild = caml_array_get(elems, idx);
                          elem.removeChild(oldChild);
                          _newVNodes = newRest;
                          _oldVNodes = olderRest;
                          _idx = idx + 1 | 0;
                          continue ;
                          
                        } else {
                          exit$2 = 3;
                        }
                      }
                      
                    } else {
                      exit$2 = 3;
                    }
                  } else {
                    exit$2 = 3;
                  }
                  if (exit$2 === 3) {
                    if (newRest) {
                      var match$4 = newRest[0];
                      if (match$4.tag === 2) {
                        if (oldNamespace === match$4[0] && oldTagName === match$4[1] && oldKey === match$4[2]) {
                          var oldChild$1 = caml_array_get(elems, idx);
                          var newChild = patchVNodesOnElems_CreateElement(callbacks, newNode);
                          insertBefore(elem, newChild, oldChild$1);
                          _newVNodes = newRest;
                          _idx = idx + 1 | 0;
                          continue ;
                          
                        } else {
                          exit$1 = 2;
                        }
                      } else {
                        exit$1 = 2;
                      }
                    } else {
                      exit$1 = 2;
                    }
                  }
                  if (exit$1 === 2) {
                    patchVNodesOnElems_MutateNode(callbacks, elem, elems, idx, oldNode, newNode);
                    _newVNodes = newRest;
                    _oldVNodes = oldRest;
                    _idx = idx + 1 | 0;
                    continue ;
                    
                  }
                  
                }
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
            break;
        case 3 : 
            if (newVNodes) {
              var match$5 = newVNodes[0];
              if (match$5.tag === 3) {
                var newRest$1 = newVNodes[1];
                var newCache = match$5[2];
                var newGen = match$5[1];
                var newKey$1 = match$5[0];
                var oldRest$1 = oldVNodes[1];
                var oldCache = oldNode[2];
                var oldKey$1 = oldNode[0];
                if (oldKey$1 === newKey$1) {
                  newCache[0] = oldCache[0];
                  _newVNodes = newRest$1;
                  _oldVNodes = oldRest$1;
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  var exit$4 = 0;
                  var exit$5 = 0;
                  if (oldRest$1) {
                    var match$6 = oldRest$1[0];
                    if (match$6.tag === 3) {
                      var olderRest$1 = oldRest$1[1];
                      var olderKey$1 = match$6[0];
                      var exit$6 = 0;
                      if (newRest$1) {
                        var match$7 = newRest$1[0];
                        if (match$7.tag === 3) {
                          if (olderKey$1 === newKey$1 && oldKey$1 === match$7[0]) {
                            var firstChild$1 = caml_array_get(elems, idx);
                            var secondChild$1 = caml_array_get(elems, idx + 1 | 0);
                            elem.removeChild(secondChild$1);
                            insertBefore(elem, secondChild$1, firstChild$1);
                            _newVNodes = newRest$1[1];
                            _oldVNodes = olderRest$1;
                            _idx = idx + 2 | 0;
                            continue ;
                            
                          } else {
                            exit$6 = 4;
                          }
                        } else {
                          exit$6 = 4;
                        }
                      } else {
                        exit$6 = 4;
                      }
                      if (exit$6 === 4) {
                        if (olderKey$1 === newKey$1) {
                          var oldChild$2 = caml_array_get(elems, idx);
                          elem.removeChild(oldChild$2);
                          var oldVdom = match$6[2][0];
                          newCache[0] = oldVdom;
                          _newVNodes = newRest$1;
                          _oldVNodes = olderRest$1;
                          _idx = idx + 1 | 0;
                          continue ;
                          
                        } else {
                          exit$5 = 3;
                        }
                      }
                      
                    } else {
                      exit$5 = 3;
                    }
                  } else {
                    exit$5 = 3;
                  }
                  if (exit$5 === 3) {
                    if (newRest$1) {
                      var match$8 = newRest$1[0];
                      if (match$8.tag === 3) {
                        if (match$8[0] === oldKey$1) {
                          var oldChild$3 = caml_array_get(elems, idx);
                          var newVdom = _1(newGen, /* () */0);
                          newCache[0] = newVdom;
                          var newChild$1 = patchVNodesOnElems_CreateElement(callbacks, newVdom);
                          insertBefore(elem, newChild$1, oldChild$3);
                          _newVNodes = newRest$1;
                          _idx = idx + 1 | 0;
                          continue ;
                          
                        } else {
                          exit$4 = 2;
                        }
                      } else {
                        exit$4 = 2;
                      }
                    } else {
                      exit$4 = 2;
                    }
                  }
                  if (exit$4 === 2) {
                    var oldVdom$1 = oldCache[0];
                    var newVdom$1 = _1(newGen, /* () */0);
                    newCache[0] = newVdom$1;
                    _newVNodes = /* :: */[
                      newVdom$1,
                      newRest$1
                    ];
                    _oldVNodes = /* :: */[
                      oldVdom$1,
                      oldRest$1
                    ];
                    continue ;
                    
                  }
                  
                }
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
            break;
        case 4 : 
            _oldVNodes = /* :: */[
              oldNode[1],
              oldVNodes[1]
            ];
            continue ;
            
      }
      if (exit === 1) {
        var oldRest$2 = oldVNodes[1];
        if (newVNodes) {
          var newNode$1 = newVNodes[0];
          if (newNode$1.tag === 4) {
            patchVNodesOnElems(_1(newNode$1[0], callbacks), elem, elems, idx, /* :: */[
                  oldNode,
                  /* [] */0
                ], /* :: */[
                  newNode$1[1],
                  /* [] */0
                ]);
            _newVNodes = newVNodes[1];
            _oldVNodes = oldRest$2;
            _idx = idx + 1 | 0;
            continue ;
            
          } else {
            var oldChild$4 = caml_array_get(elems, idx);
            var newChild$2 = patchVNodesOnElems_CreateElement(callbacks, newNode$1);
            insertBefore(elem, newChild$2, oldChild$4);
            elem.removeChild(oldChild$4);
            _newVNodes = newVNodes[1];
            _oldVNodes = oldRest$2;
            _idx = idx + 1 | 0;
            continue ;
            
          }
        } else {
          var child$1 = caml_array_get(elems, idx);
          elem.removeChild(child$1);
          _newVNodes = /* [] */0;
          _oldVNodes = oldRest$2;
          continue ;
          
        }
      }
      
    } else if (newVNodes) {
      var newChild$3 = patchVNodesOnElems_CreateElement(callbacks, newVNodes[0]);
      elem.appendChild(newChild$3);
      _newVNodes = newVNodes[1];
      _oldVNodes = /* [] */0;
      _idx = idx + 1 | 0;
      continue ;
      
    } else {
      return /* () */0;
    }
  }
}

function patchVNodesIntoElement(callbacks, elem, oldVNodes, newVNodes) {
  var elems = elem.childNodes;
  patchVNodesOnElems(callbacks, elem, elems, 0, oldVNodes, newVNodes);
  return newVNodes;
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function batch(cmds) {
  return /* Batch */__(1, [cmds]);
}

function run(callbacks, param) {
  if (typeof param === "number") {
    return /* () */0;
  } else {
    switch (param.tag | 0) {
      case 1 : 
          return fold_left(function (_, cmd) {
                      return run(callbacks, cmd);
                    }, /* () */0, param[0]);
      case 0 : 
      case 2 : 
          return _1(param[0], callbacks);
      
    }
  }
}

var none = /* NoCmd */0;


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function batch$1(subs) {
  return /* Batch */__(0, [subs]);
}

function registration(key, enableCall) {
  return /* Registration */__(1, [
            key,
            function (callbacks) {
              return _1(enableCall, callbacks[0]);
            },
            [/* None */0]
          ]);
}

function run$1(oldCallbacks, newCallbacks, oldSub, newSub) {
  var enable = function (_callbacks, _param) {
    while(true) {
      var param = _param;
      var callbacks = _callbacks;
      if (typeof param === "number") {
        return /* () */0;
      } else {
        switch (param.tag | 0) {
          case 0 : 
              var subs = param[0];
              if (subs) {
                return iter((function(callbacks){
                          return function (param) {
                            return enable(callbacks, param);
                          }
                          }(callbacks)), subs);
              } else {
                return /* () */0;
              }
          case 1 : 
              param[2][0] = /* Some */[_1(param[1], callbacks)];
              return /* () */0;
          case 2 : 
              var subCallbacks = _1(param[0], callbacks);
              _param = param[1];
              _callbacks = subCallbacks;
              continue ;
              
        }
      }
    }
  };
  var disable = function (_callbacks, _param) {
    while(true) {
      var param = _param;
      var callbacks = _callbacks;
      if (typeof param === "number") {
        return /* () */0;
      } else {
        switch (param.tag | 0) {
          case 0 : 
              var subs = param[0];
              if (subs) {
                return iter((function(callbacks){
                          return function (param) {
                            return disable(callbacks, param);
                          }
                          }(callbacks)), subs);
              } else {
                return /* () */0;
              }
          case 1 : 
              var diCB = param[2];
              var match = diCB[0];
              if (match) {
                diCB[0] = /* None */0;
                return _1(match[0], /* () */0);
              } else {
                return /* () */0;
              }
          case 2 : 
              var subCallbacks = _1(param[0], callbacks);
              _param = param[1];
              _callbacks = subCallbacks;
              continue ;
              
        }
      }
    }
  };
  var exit = 0;
  if (typeof oldSub === "number") {
    if (typeof newSub === "number") {
      return newSub;
    } else {
      exit = 1;
    }
  } else {
    switch (oldSub.tag | 0) {
      case 0 : 
          if (typeof newSub === "number") {
            exit = 1;
          } else if (newSub.tag) {
            exit = 1;
          } else {
            var aux = function (_oldList, _newList) {
              while(true) {
                var newList = _newList;
                var oldList = _oldList;
                if (oldList) {
                  var oldRest = oldList[1];
                  var oldSubSub = oldList[0];
                  if (newList) {
                    run$1(oldCallbacks, newCallbacks, oldSubSub, newList[0]);
                    _newList = newList[1];
                    _oldList = oldRest;
                    continue ;
                    
                  } else {
                    disable(oldCallbacks, oldSubSub);
                    _newList = /* [] */0;
                    _oldList = oldRest;
                    continue ;
                    
                  }
                } else if (newList) {
                  enable(newCallbacks, newList[0]);
                  _newList = newList[1];
                  _oldList = /* [] */0;
                  continue ;
                  
                } else {
                  return /* () */0;
                }
              }
            };
            aux(oldSub[0], newSub[0]);
            return newSub;
          }
          break;
      case 1 : 
          if (typeof newSub === "number") {
            exit = 1;
          } else if (newSub.tag === 1) {
            if (oldSub[0] === newSub[0]) {
              newSub[2][0] = oldSub[2][0];
              return newSub;
            } else {
              exit = 1;
            }
          } else {
            exit = 1;
          }
          break;
      case 2 : 
          if (typeof newSub === "number") {
            exit = 1;
          } else if (newSub.tag === 2) {
            var olderCallbacks = _1(oldSub[0], oldCallbacks);
            var newerCallbacks = _1(newSub[0], newCallbacks);
            run$1(olderCallbacks, newerCallbacks, oldSub[1], newSub[1]);
            return newSub;
          } else {
            exit = 1;
          }
          break;
      
    }
  }
  if (exit === 1) {
    disable(oldCallbacks, oldSub);
    enable(newCallbacks, newSub);
    return newSub;
  }
  
}


/* No side effect */

function null_undefined_to_opt(x) {
  if (x === null || x === undefined) {
    return /* None */0;
  } else {
    return /* Some */[x];
  }
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function programStateWrapper(initModel, pump, shutdown) {
  var model = [initModel];
  var callbacks = [/* record */[/* enqueue */function () {
        console.log("INVALID enqueue CALL!");
        return /* () */0;
      }]];
  var pumperInterface = _1(pump, callbacks);
  var pending = [/* None */0];
  var handler = function (msg$$1) {
    var match = pending[0];
    if (match) {
      pending[0] = /* Some */[/* :: */[
          msg$$1,
          match[0]
        ]];
      return /* () */0;
    } else {
      pending[0] = /* Some */[/* [] */0];
      var newModel = _2(pumperInterface[/* handleMsg */1], model[0], msg$$1);
      model[0] = newModel;
      var match$1 = pending[0];
      if (match$1) {
        var msgs = match$1[0];
        if (msgs) {
          pending[0] = /* None */0;
          return iter(handler, rev(msgs));
        } else {
          pending[0] = /* None */0;
          return /* () */0;
        }
      } else {
        throw [
              failure,
              "INVALID message queue state, should never be None during message processing!"
            ];
      }
    }
  };
  var finalizedCBs = /* record */[/* enqueue */handler];
  callbacks[0] = finalizedCBs;
  var pi_requestShutdown = function () {
    callbacks[0] = /* record */[/* enqueue */function () {
        console.log("INVALID message enqueued when shut down");
        return /* () */0;
      }];
    var cmd = _1(shutdown, model[0]);
    _1(pumperInterface[/* shutdown */2], cmd);
    return /* () */0;
  };
  _1(pumperInterface[/* startup */0], /* () */0);
  return {
          pushMsg: handler,
          shutdown: pi_requestShutdown
        };
}

function programLoop(update, view, subscriptions, initModel, initCmd, param) {
  if (param) {
    var parentNode = param[0];
    return function (callbacks) {
      var priorRenderedVdom = [/* [] */0];
      var latestModel = [initModel];
      var nextFrameID = [/* None */0];
      var doRender = function () {
        var match = nextFrameID[0];
        if (match) {
          var newVdom_000 = _1(view, latestModel[0]);
          var newVdom = /* :: */[
            newVdom_000,
            /* [] */0
          ];
          var justRenderedVdom = patchVNodesIntoElement(callbacks, parentNode, priorRenderedVdom[0], newVdom);
          priorRenderedVdom[0] = justRenderedVdom;
          nextFrameID[0] = /* None */0;
          return /* () */0;
        } else {
          return /* () */0;
        }
      };
      var scheduleRender = function () {
        var match = nextFrameID[0];
        if (match) {
          return /* () */0;
        } else {
          nextFrameID[0] = /* Some */[-1];
          return doRender(16);
        }
      };
      var clearPnode = function () {
        while(parentNode.childNodes.length > 0) {
          var match = parentNode.firstChild;
          if (match !== null) {
            parentNode.removeChild(match);
          }
          
        }
        return /* () */0;
      };
      var oldSub = [/* NoSub */0];
      var handleSubscriptionChange = function (model) {
        var newSub = _1(subscriptions, model);
        oldSub[0] = run$1(callbacks, callbacks, oldSub[0], newSub);
        return /* () */0;
      };
      var handlerStartup = function () {
        clearPnode(/* () */0);
        run(callbacks, initCmd);
        handleSubscriptionChange(latestModel[0]);
        nextFrameID[0] = /* Some */[-1];
        doRender(16);
        return /* () */0;
      };
      var handler = function (model, msg$$1) {
        var match = _2(update, model, msg$$1);
        var newModel = match[0];
        latestModel[0] = newModel;
        run(callbacks, match[1]);
        scheduleRender(/* () */0);
        handleSubscriptionChange(newModel);
        return newModel;
      };
      var handlerShutdown = function (cmd) {
        nextFrameID[0] = /* None */0;
        run(callbacks, cmd);
        oldSub[0] = run$1(callbacks, callbacks, oldSub[0], /* NoSub */0);
        priorRenderedVdom[0] = /* [] */0;
        clearPnode(/* () */0);
        return /* () */0;
      };
      return /* record */[
              /* startup */handlerStartup,
              /* handleMsg */handler,
              /* shutdown */handlerShutdown
            ];
    };
  } else {
    return function (callbacks) {
      var oldSub = [/* NoSub */0];
      var handleSubscriptionChange = function (model) {
        var newSub = _1(subscriptions, model);
        oldSub[0] = run$1(callbacks, callbacks, oldSub[0], newSub);
        return /* () */0;
      };
      return /* record */[
              /* startup */function () {
                run(callbacks, initCmd);
                handleSubscriptionChange(initModel);
                return /* () */0;
              },
              /* handleMsg */function (model, msg$$1) {
                var match = _2(update, model, msg$$1);
                var newModel = match[0];
                run(callbacks, match[1]);
                handleSubscriptionChange(newModel);
                return newModel;
              },
              /* shutdown */function (cmd) {
                run(callbacks, cmd);
                oldSub[0] = run$1(callbacks, callbacks, oldSub[0], /* NoSub */0);
                return /* () */0;
              }
            ];
    };
  }
}

function program(param, pnode, flags) {
  polyfills(/* () */0);
  var match = _1(param[/* init */0], flags);
  var initModel = match[0];
  var opnode = null_undefined_to_opt(pnode);
  var pumpInterface = programLoop(param[/* update */1], param[/* view */2], param[/* subscriptions */3], initModel, match[1], opnode);
  return programStateWrapper(initModel, pumpInterface, param[/* shutdown */4]);
}

function standardProgram(param, pnode, args) {
  return program(/* record */[
              /* init */param[/* init */0],
              /* update */param[/* update */1],
              /* view */param[/* view */2],
              /* subscriptions */param[/* subscriptions */3],
              /* shutdown */function () {
                return /* NoCmd */0;
              }
            ], pnode, args);
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function performOpt(toOptionalMessage, param) {
  var task = param[0];
  return /* EnqueueCall */__(2, [function (callbacks) {
              return _1(task, function (param) {
                          if (param.tag) {
                            throw [
                                  failure,
                                  "ERROR:  Task perfom returned error of never! Should not happen!"
                                ];
                          } else {
                            var match = _1(toOptionalMessage, param[0]);
                            if (match) {
                              return _1(callbacks[0][/* enqueue */0], match[0]);
                            } else {
                              return /* () */0;
                            }
                          }
                        });
            }]);
}

function attemptOpt(resultToOptionalMessage, param) {
  var task = param[0];
  return /* EnqueueCall */__(2, [function (callbacks) {
              return _1(task, function (value) {
                          var match = _1(resultToOptionalMessage, value);
                          if (match) {
                            return _1(callbacks[0][/* enqueue */0], match[0]);
                          } else {
                            return /* () */0;
                          }
                        });
            }]);
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function $$setInterval(cb, msTime) {
  return window.setInterval(cb, msTime);
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function every(interval, tagger) {
  var key = string_of_float(interval);
  var enableCall = function (callbacks) {
    var id = $$setInterval(function () {
          return _1(callbacks[/* enqueue */0], _1(tagger, Date.now()));
        }, interval);
    return function () {
      return window.clearTimeout(id);
    };
  };
  return registration(key, enableCall);
}

var second = 1000.0 * 1.0;


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function text$1(str) {
  return /* Text */__(1, [str]);
}

function div$2($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var unique = $staropt$star$1 ? $staropt$star$1[0] : "";
  return fullnode("", "div", key, unique, props, nodes);
}

function button($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var unique = $staropt$star$1 ? $staropt$star$1[0] : "";
  return fullnode("", "button", key, unique, props, nodes);
}

function class$prime(name) {
  return /* RawProp */__(0, [
            "className",
            name
          ]);
}

function onClick(msg) {
  return onMsg("click", msg);
}

function max$1(value) {
  return /* Attribute */__(1, [
            "",
            "max",
            value
          ]);
}

function min$1(value) {
  return /* Attribute */__(1, [
            "",
            "min",
            value
          ]);
}

function step(value) {
  return /* Attribute */__(1, [
            "",
            "step",
            value
          ]);
}

function disabled(b) {
  if (b) {
    return /* Attribute */__(1, [
              "",
              "disabled",
              "true"
            ]);
  } else {
    return /* NoProp */0;
  }
}

function selected(b) {
  if (b) {
    return /* Attribute */__(1, [
              "",
              "selected",
              "true"
            ]);
  } else {
    return /* NoProp */0;
  }
}

function acceptCharset(c) {
  return /* Attribute */__(1, [
            "",
            "accept-charset",
            c
          ]);
}

var Attributes = /* module */[
  /* max */max$1,
  /* min */min$1,
  /* step */step,
  /* disabled */disabled,
  /* selected */selected,
  /* acceptCharset */acceptCharset
];

var noNode$1 = noNode;


/* No side effect */

function Make(funarg) {
  var height = function (param) {
    if (param) {
      return param[4];
    } else {
      return 0;
    }
  };
  var create = function (l, x, d, r) {
    var hl = height(l);
    var hr = height(r);
    return /* Node */[
            l,
            x,
            d,
            r,
            hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          ];
  };
  var singleton = function (x, d) {
    return /* Node */[
            /* Empty */0,
            x,
            d,
            /* Empty */0,
            1
          ];
  };
  var bal = function (l, x, d, r) {
    var hl = l ? l[4] : 0;
    var hr = r ? r[4] : 0;
    if (hl > (hr + 2 | 0)) {
      if (l) {
        var lr = l[3];
        var ld = l[2];
        var lv = l[1];
        var ll = l[0];
        if (height(ll) >= height(lr)) {
          return create(ll, lv, ld, create(lr, x, d, r));
        } else if (lr) {
          return create(create(ll, lv, ld, lr[0]), lr[1], lr[2], create(lr[3], x, d, r));
        } else {
          throw [
                invalid_argument,
                "Map.bal"
              ];
        }
      } else {
        throw [
              invalid_argument,
              "Map.bal"
            ];
      }
    } else if (hr > (hl + 2 | 0)) {
      if (r) {
        var rr = r[3];
        var rd = r[2];
        var rv = r[1];
        var rl = r[0];
        if (height(rr) >= height(rl)) {
          return create(create(l, x, d, rl), rv, rd, rr);
        } else if (rl) {
          return create(create(l, x, d, rl[0]), rl[1], rl[2], create(rl[3], rv, rd, rr));
        } else {
          throw [
                invalid_argument,
                "Map.bal"
              ];
        }
      } else {
        throw [
              invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      return /* Node */[
              l,
              x,
              d,
              r,
              hl >= hr ? hl + 1 | 0 : hr + 1 | 0
            ];
    }
  };
  var is_empty = function (param) {
    if (param) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  };
  var add = function (x, data, param) {
    if (param) {
      var r = param[3];
      var d = param[2];
      var v = param[1];
      var l = param[0];
      var c = _2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          return bal(add(x, data, l), v, d, r);
        } else {
          return bal(l, v, d, add(x, data, r));
        }
      } else {
        return /* Node */[
                l,
                x,
                data,
                r,
                param[4]
              ];
      }
    } else {
      return /* Node */[
              /* Empty */0,
              x,
              data,
              /* Empty */0,
              1
            ];
    }
  };
  var find = function (x, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var c = _2(funarg[/* compare */0], x, param[1]);
        if (c) {
          _param = c < 0 ? param[0] : param[3];
          continue ;
          
        } else {
          return param[2];
        }
      } else {
        throw not_found;
      }
    }
  };
  var mem = function (x, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var c = _2(funarg[/* compare */0], x, param[1]);
        if (c) {
          _param = c < 0 ? param[0] : param[3];
          continue ;
          
        } else {
          return /* true */1;
        }
      } else {
        return /* false */0;
      }
    }
  };
  var min_binding = function (_param) {
    while(true) {
      var param = _param;
      if (param) {
        var l = param[0];
        if (l) {
          _param = l;
          continue ;
          
        } else {
          return /* tuple */[
                  param[1],
                  param[2]
                ];
        }
      } else {
        throw not_found;
      }
    }
  };
  var max_binding = function (_param) {
    while(true) {
      var param = _param;
      if (param) {
        var r = param[3];
        if (r) {
          _param = r;
          continue ;
          
        } else {
          return /* tuple */[
                  param[1],
                  param[2]
                ];
        }
      } else {
        throw not_found;
      }
    }
  };
  var remove_min_binding = function (param) {
    if (param) {
      var l = param[0];
      if (l) {
        return bal(remove_min_binding(l), param[1], param[2], param[3]);
      } else {
        return param[3];
      }
    } else {
      throw [
            invalid_argument,
            "Map.remove_min_elt"
          ];
    }
  };
  var remove = function (x, param) {
    if (param) {
      var r = param[3];
      var d = param[2];
      var v = param[1];
      var l = param[0];
      var c = _2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          return bal(remove(x, l), v, d, r);
        } else {
          return bal(l, v, d, remove(x, r));
        }
      } else {
        var t1 = l;
        var t2 = r;
        if (t1) {
          if (t2) {
            var match = min_binding(t2);
            return bal(t1, match[0], match[1], remove_min_binding(t2));
          } else {
            return t1;
          }
        } else {
          return t2;
        }
      }
    } else {
      return /* Empty */0;
    }
  };
  var iter = function (f, _param) {
    while(true) {
      var param = _param;
      if (param) {
        iter(f, param[0]);
        _2(f, param[1], param[2]);
        _param = param[3];
        continue ;
        
      } else {
        return /* () */0;
      }
    }
  };
  var map = function (f, param) {
    if (param) {
      var l$prime = map(f, param[0]);
      var d$prime = _1(f, param[2]);
      var r$prime = map(f, param[3]);
      return /* Node */[
              l$prime,
              param[1],
              d$prime,
              r$prime,
              param[4]
            ];
    } else {
      return /* Empty */0;
    }
  };
  var mapi = function (f, param) {
    if (param) {
      var v = param[1];
      var l$prime = mapi(f, param[0]);
      var d$prime = _2(f, v, param[2]);
      var r$prime = mapi(f, param[3]);
      return /* Node */[
              l$prime,
              v,
              d$prime,
              r$prime,
              param[4]
            ];
    } else {
      return /* Empty */0;
    }
  };
  var fold = function (f, _m, _accu) {
    while(true) {
      var accu = _accu;
      var m = _m;
      if (m) {
        _accu = _3(f, m[1], m[2], fold(f, m[0], accu));
        _m = m[3];
        continue ;
        
      } else {
        return accu;
      }
    }
  };
  var for_all = function (p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        if (_2(p, param[1], param[2])) {
          if (for_all(p, param[0])) {
            _param = param[3];
            continue ;
            
          } else {
            return /* false */0;
          }
        } else {
          return /* false */0;
        }
      } else {
        return /* true */1;
      }
    }
  };
  var exists = function (p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        if (_2(p, param[1], param[2])) {
          return /* true */1;
        } else if (exists(p, param[0])) {
          return /* true */1;
        } else {
          _param = param[3];
          continue ;
          
        }
      } else {
        return /* false */0;
      }
    }
  };
  var add_min_binding = function (k, v, param) {
    if (param) {
      return bal(add_min_binding(k, v, param[0]), param[1], param[2], param[3]);
    } else {
      return singleton(k, v);
    }
  };
  var add_max_binding = function (k, v, param) {
    if (param) {
      return bal(param[0], param[1], param[2], add_max_binding(k, v, param[3]));
    } else {
      return singleton(k, v);
    }
  };
  var join = function (l, v, d, r) {
    if (l) {
      if (r) {
        var rh = r[4];
        var lh = l[4];
        if (lh > (rh + 2 | 0)) {
          return bal(l[0], l[1], l[2], join(l[3], v, d, r));
        } else if (rh > (lh + 2 | 0)) {
          return bal(join(l, v, d, r[0]), r[1], r[2], r[3]);
        } else {
          return create(l, v, d, r);
        }
      } else {
        return add_max_binding(v, d, l);
      }
    } else {
      return add_min_binding(v, d, r);
    }
  };
  var concat = function (t1, t2) {
    if (t1) {
      if (t2) {
        var match = min_binding(t2);
        return join(t1, match[0], match[1], remove_min_binding(t2));
      } else {
        return t1;
      }
    } else {
      return t2;
    }
  };
  var concat_or_join = function (t1, v, d, t2) {
    if (d) {
      return join(t1, v, d[0], t2);
    } else {
      return concat(t1, t2);
    }
  };
  var split = function (x, param) {
    if (param) {
      var r = param[3];
      var d = param[2];
      var v = param[1];
      var l = param[0];
      var c = _2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          var match = split(x, l);
          return /* tuple */[
                  match[0],
                  match[1],
                  join(match[2], v, d, r)
                ];
        } else {
          var match$1 = split(x, r);
          return /* tuple */[
                  join(l, v, d, match$1[0]),
                  match$1[1],
                  match$1[2]
                ];
        }
      } else {
        return /* tuple */[
                l,
                /* Some */[d],
                r
              ];
      }
    } else {
      return /* tuple */[
              /* Empty */0,
              /* None */0,
              /* Empty */0
            ];
    }
  };
  var merge = function (f, s1, s2) {
    var exit = 0;
    if (s1) {
      var v1 = s1[1];
      if (s1[4] >= height(s2)) {
        var match = split(v1, s2);
        return concat_or_join(merge(f, s1[0], match[0]), v1, _3(f, v1, /* Some */[s1[2]], match[1]), merge(f, s1[3], match[2]));
      } else {
        exit = 1;
      }
    } else if (s2) {
      exit = 1;
    } else {
      return /* Empty */0;
    }
    if (exit === 1) {
      if (s2) {
        var v2 = s2[1];
        var match$1 = split(v2, s1);
        return concat_or_join(merge(f, match$1[0], s2[0]), v2, _3(f, v2, match$1[1], /* Some */[s2[2]]), merge(f, match$1[2], s2[3]));
      } else {
        throw [
              assert_failure,
              [
                "map.ml",
                270,
                10
              ]
            ];
      }
    }
    
  };
  var filter = function (p, param) {
    if (param) {
      var d = param[2];
      var v = param[1];
      var l$prime = filter(p, param[0]);
      var pvd = _2(p, v, d);
      var r$prime = filter(p, param[3]);
      if (pvd) {
        return join(l$prime, v, d, r$prime);
      } else {
        return concat(l$prime, r$prime);
      }
    } else {
      return /* Empty */0;
    }
  };
  var partition = function (p, param) {
    if (param) {
      var d = param[2];
      var v = param[1];
      var match = partition(p, param[0]);
      var lf = match[1];
      var lt = match[0];
      var pvd = _2(p, v, d);
      var match$1 = partition(p, param[3]);
      var rf = match$1[1];
      var rt = match$1[0];
      if (pvd) {
        return /* tuple */[
                join(lt, v, d, rt),
                concat(lf, rf)
              ];
      } else {
        return /* tuple */[
                concat(lt, rt),
                join(lf, v, d, rf)
              ];
      }
    } else {
      return /* tuple */[
              /* Empty */0,
              /* Empty */0
            ];
    }
  };
  var cons_enum = function (_m, _e) {
    while(true) {
      var e = _e;
      var m = _m;
      if (m) {
        _e = /* More */[
          m[1],
          m[2],
          m[3],
          e
        ];
        _m = m[0];
        continue ;
        
      } else {
        return e;
      }
    }
  };
  var compare = function (cmp, m1, m2) {
    var _e1 = cons_enum(m1, /* End */0);
    var _e2 = cons_enum(m2, /* End */0);
    while(true) {
      var e2 = _e2;
      var e1 = _e1;
      if (e1) {
        if (e2) {
          var c = _2(funarg[/* compare */0], e1[0], e2[0]);
          if (c !== 0) {
            return c;
          } else {
            var c$1 = _2(cmp, e1[1], e2[1]);
            if (c$1 !== 0) {
              return c$1;
            } else {
              _e2 = cons_enum(e2[2], e2[3]);
              _e1 = cons_enum(e1[2], e1[3]);
              continue ;
              
            }
          }
        } else {
          return 1;
        }
      } else if (e2) {
        return -1;
      } else {
        return 0;
      }
    }
  };
  var equal = function (cmp, m1, m2) {
    var _e1 = cons_enum(m1, /* End */0);
    var _e2 = cons_enum(m2, /* End */0);
    while(true) {
      var e2 = _e2;
      var e1 = _e1;
      if (e1) {
        if (e2) {
          if (_2(funarg[/* compare */0], e1[0], e2[0])) {
            return /* false */0;
          } else if (_2(cmp, e1[1], e2[1])) {
            _e2 = cons_enum(e2[2], e2[3]);
            _e1 = cons_enum(e1[2], e1[3]);
            continue ;
            
          } else {
            return /* false */0;
          }
        } else {
          return /* false */0;
        }
      } else if (e2) {
        return /* false */0;
      } else {
        return /* true */1;
      }
    }
  };
  var cardinal = function (param) {
    if (param) {
      return (cardinal(param[0]) + 1 | 0) + cardinal(param[3]) | 0;
    } else {
      return 0;
    }
  };
  var bindings_aux = function (_accu, _param) {
    while(true) {
      var param = _param;
      var accu = _accu;
      if (param) {
        _param = param[0];
        _accu = /* :: */[
          /* tuple */[
            param[1],
            param[2]
          ],
          bindings_aux(accu, param[3])
        ];
        continue ;
        
      } else {
        return accu;
      }
    }
  };
  var bindings = function (s) {
    return bindings_aux(/* [] */0, s);
  };
  return [
          /* Empty */0,
          is_empty,
          mem,
          add,
          singleton,
          remove,
          merge,
          compare,
          equal,
          iter,
          fold,
          for_all,
          exists,
          filter,
          partition,
          cardinal,
          bindings,
          min_binding,
          max_binding,
          min_binding,
          split,
          find,
          map,
          mapi
        ];
}


/* No side effect */

function Make$1(funarg) {
  var height = function (param) {
    if (param) {
      return param[3];
    } else {
      return 0;
    }
  };
  var create = function (l, v, r) {
    var hl = l ? l[3] : 0;
    var hr = r ? r[3] : 0;
    return /* Node */[
            l,
            v,
            r,
            hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          ];
  };
  var bal = function (l, v, r) {
    var hl = l ? l[3] : 0;
    var hr = r ? r[3] : 0;
    if (hl > (hr + 2 | 0)) {
      if (l) {
        var lr = l[2];
        var lv = l[1];
        var ll = l[0];
        if (height(ll) >= height(lr)) {
          return create(ll, lv, create(lr, v, r));
        } else if (lr) {
          return create(create(ll, lv, lr[0]), lr[1], create(lr[2], v, r));
        } else {
          throw [
                invalid_argument,
                "Set.bal"
              ];
        }
      } else {
        throw [
              invalid_argument,
              "Set.bal"
            ];
      }
    } else if (hr > (hl + 2 | 0)) {
      if (r) {
        var rr = r[2];
        var rv = r[1];
        var rl = r[0];
        if (height(rr) >= height(rl)) {
          return create(create(l, v, rl), rv, rr);
        } else if (rl) {
          return create(create(l, v, rl[0]), rl[1], create(rl[2], rv, rr));
        } else {
          throw [
                invalid_argument,
                "Set.bal"
              ];
        }
      } else {
        throw [
              invalid_argument,
              "Set.bal"
            ];
      }
    } else {
      return /* Node */[
              l,
              v,
              r,
              hl >= hr ? hl + 1 | 0 : hr + 1 | 0
            ];
    }
  };
  var add = function (x, t) {
    if (t) {
      var r = t[2];
      var v = t[1];
      var l = t[0];
      var c = _2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          return bal(add(x, l), v, r);
        } else {
          return bal(l, v, add(x, r));
        }
      } else {
        return t;
      }
    } else {
      return /* Node */[
              /* Empty */0,
              x,
              /* Empty */0,
              1
            ];
    }
  };
  var singleton = function (x) {
    return /* Node */[
            /* Empty */0,
            x,
            /* Empty */0,
            1
          ];
  };
  var add_min_element = function (v, param) {
    if (param) {
      return bal(add_min_element(v, param[0]), param[1], param[2]);
    } else {
      return singleton(v);
    }
  };
  var add_max_element = function (v, param) {
    if (param) {
      return bal(param[0], param[1], add_max_element(v, param[2]));
    } else {
      return singleton(v);
    }
  };
  var join = function (l, v, r) {
    if (l) {
      if (r) {
        var rh = r[3];
        var lh = l[3];
        if (lh > (rh + 2 | 0)) {
          return bal(l[0], l[1], join(l[2], v, r));
        } else if (rh > (lh + 2 | 0)) {
          return bal(join(l, v, r[0]), r[1], r[2]);
        } else {
          return create(l, v, r);
        }
      } else {
        return add_max_element(v, l);
      }
    } else {
      return add_min_element(v, r);
    }
  };
  var min_elt = function (_param) {
    while(true) {
      var param = _param;
      if (param) {
        var l = param[0];
        if (l) {
          _param = l;
          continue ;
          
        } else {
          return param[1];
        }
      } else {
        throw not_found;
      }
    }
  };
  var max_elt = function (_param) {
    while(true) {
      var param = _param;
      if (param) {
        var r = param[2];
        if (r) {
          _param = r;
          continue ;
          
        } else {
          return param[1];
        }
      } else {
        throw not_found;
      }
    }
  };
  var remove_min_elt = function (param) {
    if (param) {
      var l = param[0];
      if (l) {
        return bal(remove_min_elt(l), param[1], param[2]);
      } else {
        return param[2];
      }
    } else {
      throw [
            invalid_argument,
            "Set.remove_min_elt"
          ];
    }
  };
  var concat$$1 = function (t1, t2) {
    if (t1) {
      if (t2) {
        return join(t1, min_elt(t2), remove_min_elt(t2));
      } else {
        return t1;
      }
    } else {
      return t2;
    }
  };
  var split$$1 = function (x, param) {
    if (param) {
      var r = param[2];
      var v = param[1];
      var l = param[0];
      var c = _2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          var match = split$$1(x, l);
          return /* tuple */[
                  match[0],
                  match[1],
                  join(match[2], v, r)
                ];
        } else {
          var match$1 = split$$1(x, r);
          return /* tuple */[
                  join(l, v, match$1[0]),
                  match$1[1],
                  match$1[2]
                ];
        }
      } else {
        return /* tuple */[
                l,
                /* true */1,
                r
              ];
      }
    } else {
      return /* tuple */[
              /* Empty */0,
              /* false */0,
              /* Empty */0
            ];
    }
  };
  var is_empty = function (param) {
    if (param) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  };
  var mem$$1 = function (x, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var c = _2(funarg[/* compare */0], x, param[1]);
        if (c) {
          _param = c < 0 ? param[0] : param[2];
          continue ;
          
        } else {
          return /* true */1;
        }
      } else {
        return /* false */0;
      }
    }
  };
  var remove = function (x, param) {
    if (param) {
      var r = param[2];
      var v = param[1];
      var l = param[0];
      var c = _2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          return bal(remove(x, l), v, r);
        } else {
          return bal(l, v, remove(x, r));
        }
      } else {
        var t1 = l;
        var t2 = r;
        if (t1) {
          if (t2) {
            return bal(t1, min_elt(t2), remove_min_elt(t2));
          } else {
            return t1;
          }
        } else {
          return t2;
        }
      }
    } else {
      return /* Empty */0;
    }
  };
  var union = function (s1, s2) {
    if (s1) {
      if (s2) {
        var h2 = s2[3];
        var v2 = s2[1];
        var h1 = s1[3];
        var v1 = s1[1];
        if (h1 >= h2) {
          if (h2 === 1) {
            return add(v2, s1);
          } else {
            var match = split$$1(v1, s2);
            return join(union(s1[0], match[0]), v1, union(s1[2], match[2]));
          }
        } else if (h1 === 1) {
          return add(v1, s2);
        } else {
          var match$1 = split$$1(v2, s1);
          return join(union(match$1[0], s2[0]), v2, union(match$1[2], s2[2]));
        }
      } else {
        return s1;
      }
    } else {
      return s2;
    }
  };
  var inter = function (s1, s2) {
    if (s1) {
      if (s2) {
        var r1 = s1[2];
        var v1 = s1[1];
        var l1 = s1[0];
        var match = split$$1(v1, s2);
        var l2 = match[0];
        if (match[1] !== 0) {
          return join(inter(l1, l2), v1, inter(r1, match[2]));
        } else {
          return concat$$1(inter(l1, l2), inter(r1, match[2]));
        }
      } else {
        return /* Empty */0;
      }
    } else {
      return /* Empty */0;
    }
  };
  var diff = function (s1, s2) {
    if (s1) {
      if (s2) {
        var r1 = s1[2];
        var v1 = s1[1];
        var l1 = s1[0];
        var match = split$$1(v1, s2);
        var l2 = match[0];
        if (match[1] !== 0) {
          return concat$$1(diff(l1, l2), diff(r1, match[2]));
        } else {
          return join(diff(l1, l2), v1, diff(r1, match[2]));
        }
      } else {
        return s1;
      }
    } else {
      return /* Empty */0;
    }
  };
  var cons_enum = function (_s, _e) {
    while(true) {
      var e = _e;
      var s = _s;
      if (s) {
        _e = /* More */[
          s[1],
          s[2],
          e
        ];
        _s = s[0];
        continue ;
        
      } else {
        return e;
      }
    }
  };
  var compare = function (s1, s2) {
    var _e1 = cons_enum(s1, /* End */0);
    var _e2 = cons_enum(s2, /* End */0);
    while(true) {
      var e2 = _e2;
      var e1 = _e1;
      if (e1) {
        if (e2) {
          var c = _2(funarg[/* compare */0], e1[0], e2[0]);
          if (c !== 0) {
            return c;
          } else {
            _e2 = cons_enum(e2[1], e2[2]);
            _e1 = cons_enum(e1[1], e1[2]);
            continue ;
            
          }
        } else {
          return 1;
        }
      } else if (e2) {
        return -1;
      } else {
        return 0;
      }
    }
  };
  var equal = function (s1, s2) {
    return +(compare(s1, s2) === 0);
  };
  var subset = function (_s1, _s2) {
    while(true) {
      var s2 = _s2;
      var s1 = _s1;
      if (s1) {
        if (s2) {
          var r2 = s2[2];
          var l2 = s2[0];
          var r1 = s1[2];
          var v1 = s1[1];
          var l1 = s1[0];
          var c = _2(funarg[/* compare */0], v1, s2[1]);
          if (c) {
            if (c < 0) {
              if (subset(/* Node */[
                      l1,
                      v1,
                      /* Empty */0,
                      0
                    ], l2)) {
                _s1 = r1;
                continue ;
                
              } else {
                return /* false */0;
              }
            } else if (subset(/* Node */[
                    /* Empty */0,
                    v1,
                    r1,
                    0
                  ], r2)) {
              _s1 = l1;
              continue ;
              
            } else {
              return /* false */0;
            }
          } else if (subset(l1, l2)) {
            _s2 = r2;
            _s1 = r1;
            continue ;
            
          } else {
            return /* false */0;
          }
        } else {
          return /* false */0;
        }
      } else {
        return /* true */1;
      }
    }
  };
  var iter$$1 = function (f, _param) {
    while(true) {
      var param = _param;
      if (param) {
        iter$$1(f, param[0]);
        _1(f, param[1]);
        _param = param[2];
        continue ;
        
      } else {
        return /* () */0;
      }
    }
  };
  var fold = function (f, _s, _accu) {
    while(true) {
      var accu = _accu;
      var s = _s;
      if (s) {
        _accu = _2(f, s[1], fold(f, s[0], accu));
        _s = s[2];
        continue ;
        
      } else {
        return accu;
      }
    }
  };
  var for_all$$1 = function (p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        if (_1(p, param[1])) {
          if (for_all$$1(p, param[0])) {
            _param = param[2];
            continue ;
            
          } else {
            return /* false */0;
          }
        } else {
          return /* false */0;
        }
      } else {
        return /* true */1;
      }
    }
  };
  var exists$$1 = function (p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        if (_1(p, param[1])) {
          return /* true */1;
        } else if (exists$$1(p, param[0])) {
          return /* true */1;
        } else {
          _param = param[2];
          continue ;
          
        }
      } else {
        return /* false */0;
      }
    }
  };
  var filter$$1 = function (p, param) {
    if (param) {
      var v = param[1];
      var l$prime = filter$$1(p, param[0]);
      var pv = _1(p, v);
      var r$prime = filter$$1(p, param[2]);
      if (pv) {
        return join(l$prime, v, r$prime);
      } else {
        return concat$$1(l$prime, r$prime);
      }
    } else {
      return /* Empty */0;
    }
  };
  var partition$$1 = function (p, param) {
    if (param) {
      var v = param[1];
      var match = partition$$1(p, param[0]);
      var lf = match[1];
      var lt = match[0];
      var pv = _1(p, v);
      var match$1 = partition$$1(p, param[2]);
      var rf = match$1[1];
      var rt = match$1[0];
      if (pv) {
        return /* tuple */[
                join(lt, v, rt),
                concat$$1(lf, rf)
              ];
      } else {
        return /* tuple */[
                concat$$1(lt, rt),
                join(lf, v, rf)
              ];
      }
    } else {
      return /* tuple */[
              /* Empty */0,
              /* Empty */0
            ];
    }
  };
  var cardinal = function (param) {
    if (param) {
      return (cardinal(param[0]) + 1 | 0) + cardinal(param[2]) | 0;
    } else {
      return 0;
    }
  };
  var elements_aux = function (_accu, _param) {
    while(true) {
      var param = _param;
      var accu = _accu;
      if (param) {
        _param = param[0];
        _accu = /* :: */[
          param[1],
          elements_aux(accu, param[2])
        ];
        continue ;
        
      } else {
        return accu;
      }
    }
  };
  var elements = function (s) {
    return elements_aux(/* [] */0, s);
  };
  var find$$1 = function (x, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var v = param[1];
        var c = _2(funarg[/* compare */0], x, v);
        if (c) {
          _param = c < 0 ? param[0] : param[2];
          continue ;
          
        } else {
          return v;
        }
      } else {
        throw not_found;
      }
    }
  };
  var of_list = function (l) {
    if (l) {
      var match = l[1];
      var x0 = l[0];
      if (match) {
        var match$1 = match[1];
        var x1 = match[0];
        if (match$1) {
          var match$2 = match$1[1];
          var x2 = match$1[0];
          if (match$2) {
            var match$3 = match$2[1];
            var x3 = match$2[0];
            if (match$3) {
              if (match$3[1]) {
                var l$1 = sort_uniq(funarg[/* compare */0], l);
                var sub = function (n, l) {
                  var exit = 0;
                  if (n > 3 || n < 0) {
                    exit = 1;
                  } else {
                    switch (n) {
                      case 0 : 
                          return /* tuple */[
                                  /* Empty */0,
                                  l
                                ];
                      case 1 : 
                          if (l) {
                            return /* tuple */[
                                    /* Node */[
                                      /* Empty */0,
                                      l[0],
                                      /* Empty */0,
                                      1
                                    ],
                                    l[1]
                                  ];
                          } else {
                            exit = 1;
                          }
                          break;
                      case 2 : 
                          if (l) {
                            var match = l[1];
                            if (match) {
                              return /* tuple */[
                                      /* Node */[
                                        /* Node */[
                                          /* Empty */0,
                                          l[0],
                                          /* Empty */0,
                                          1
                                        ],
                                        match[0],
                                        /* Empty */0,
                                        2
                                      ],
                                      match[1]
                                    ];
                            } else {
                              exit = 1;
                            }
                          } else {
                            exit = 1;
                          }
                          break;
                      case 3 : 
                          if (l) {
                            var match$1 = l[1];
                            if (match$1) {
                              var match$2 = match$1[1];
                              if (match$2) {
                                return /* tuple */[
                                        /* Node */[
                                          /* Node */[
                                            /* Empty */0,
                                            l[0],
                                            /* Empty */0,
                                            1
                                          ],
                                          match$1[0],
                                          /* Node */[
                                            /* Empty */0,
                                            match$2[0],
                                            /* Empty */0,
                                            1
                                          ],
                                          2
                                        ],
                                        match$2[1]
                                      ];
                              } else {
                                exit = 1;
                              }
                            } else {
                              exit = 1;
                            }
                          } else {
                            exit = 1;
                          }
                          break;
                      
                    }
                  }
                  if (exit === 1) {
                    var nl = n / 2 | 0;
                    var match$3 = sub(nl, l);
                    var l$1 = match$3[1];
                    if (l$1) {
                      var match$4 = sub((n - nl | 0) - 1 | 0, l$1[1]);
                      return /* tuple */[
                              create(match$3[0], l$1[0], match$4[0]),
                              match$4[1]
                            ];
                    } else {
                      throw [
                            assert_failure,
                            [
                              "set.ml",
                              372,
                              18
                            ]
                          ];
                    }
                  }
                  
                };
                return sub(length(l$1), l$1)[0];
              } else {
                return add(match$3[0], add(x3, add(x2, add(x1, singleton(x0)))));
              }
            } else {
              return add(x3, add(x2, add(x1, singleton(x0))));
            }
          } else {
            return add(x2, add(x1, singleton(x0)));
          }
        } else {
          return add(x1, singleton(x0));
        }
      } else {
        return singleton(x0);
      }
    } else {
      return /* Empty */0;
    }
  };
  return [
          /* Empty */0,
          is_empty,
          mem$$1,
          add,
          singleton,
          remove,
          union,
          inter,
          diff,
          compare,
          equal,
          subset,
          iter$$1,
          fold,
          for_all$$1,
          exists$$1,
          filter$$1,
          partition$$1,
          cardinal,
          elements,
          min_elt,
          max_elt,
          min_elt,
          split$$1,
          find$$1,
          of_list
        ];
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function timeMsg(param_0, param_1) {
  return /* TimeMsg */[
          param_0,
          param_1
        ];
}

var compare$4 = caml_compare;

var ResourceMap = Make(/* module */[/* compare */compare$4]);

var compare$1$1 = caml_compare;

var BoolFlagSet = Make$1(/* module */[/* compare */compare$1$1]);

var init_bool_flags = BoolFlagSet[/* empty */0];

var compare$2$1 = caml_compare;

var IntFlagMap = Make(/* module */[/* compare */compare$2$1]);

var init_int_flags = _3(IntFlagMap[/* add */3], /* TimeActionIdx */0, 0, IntFlagMap[/* empty */0]);

var compare$3$1 = caml_compare;

var FloatFlagMap = Make(/* module */[/* compare */compare$3$1]);

var init_float_flags = _3(FloatFlagMap[/* add */3], /* BasicSolarPanelSelfGeneration */0, 0.0, FloatFlagMap[/* empty */0]);

function updateFrame(param_0) {
  return /* UpdateFrame */__(0, [param_0]);
}


/* ResourceMap Not a pure module */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function bool_flag_exists(fid, model) {
  return _2(BoolFlagSet[/* mem */2], fid, model[/* bool_flags */5]);
}

function bool_flag_set(fid, model) {
  var bool_flags$$1 = _2(BoolFlagSet[/* add */3], fid, model[/* bool_flags */5]);
  var newrecord = model.slice();
  newrecord[/* bool_flags */5] = bool_flags$$1;
  return newrecord;
}

function bool_flag_reset(fid, model) {
  var bool_flags$$1 = _2(BoolFlagSet[/* remove */5], fid, model[/* bool_flags */5]);
  var newrecord = model.slice();
  newrecord[/* bool_flags */5] = bool_flags$$1;
  return newrecord;
}

function int_flag_value(fid, model) {
  return _2(IntFlagMap[/* find */21], fid, model[/* int_flags */6]);
}

function int_flag_set(fid, value, model) {
  var int_flags$$1 = _3(IntFlagMap[/* add */3], fid, value, model[/* int_flags */6]);
  var newrecord = model.slice();
  newrecord[/* int_flags */6] = int_flags$$1;
  return newrecord;
}

function int_flag_add(fid, delta, model) {
  var value = delta + int_flag_value(fid, model) | 0;
  return int_flag_set(fid, value, model);
}

function float_flag_value(fid, model) {
  return _2(FloatFlagMap[/* find */21], fid, model[/* float_flags */7]);
}

function float_flag_set(fid, value, model) {
  var float_flags$$1 = _3(FloatFlagMap[/* add */3], fid, value, model[/* float_flags */7]);
  var newrecord = model.slice();
  newrecord[/* float_flags */7] = float_flags$$1;
  return newrecord;
}

function float_flag_add(fid, delta, model) {
  var value = delta + float_flag_value(fid, model);
  return float_flag_set(fid, value, model);
}


/* Overbots_types Not a pure module */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function shown(model) {
  return bool_flag_exists(/* InternalPowerEnabled */0, model);
}

function get_value_range() {
  return /* tuple */[
          0.0,
          100.0
        ];
}

function name$1() {
  return "Energy";
}

var Energy = /* module */[
  /* id : Energy */0,
  /* shown */shown,
  /* get_value_range */get_value_range,
  /* idname */"energy",
  /* name */name$1
];

function shown$1(model) {
  return bool_flag_exists(/* DrillDeployed */3, model);
}

function get_value_range$1() {
  return /* tuple */[
          0.0,
          10.0
        ];
}

function name$1$1() {
  return "Iron Oxide";
}

var IronOxide = /* module */[
  /* id : IronOxide */1,
  /* shown */shown$1,
  /* get_value_range */get_value_range$1,
  /* idname */"ironoxide",
  /* name */name$1$1
];

function shown$2(model) {
  return bool_flag_exists(/* DrillDeployed */3, model);
}

function get_value_range$2() {
  return /* tuple */[
          0.0,
          2.0
        ];
}

function name$2() {
  return "RawSilicon";
}

var RawSilicon = /* module */[
  /* id : RawSilicon */2,
  /* shown */shown$2,
  /* get_value_range */get_value_range$2,
  /* idname */"rawsilicon",
  /* name */name$2
];

var all_resources_001 = /* :: */[
  IronOxide,
  /* :: */[
    RawSilicon,
    /* [] */0
  ]
];

var all_resources = /* :: */[
  Energy,
  all_resources_001
];

var id_resource_mapping = fold_left(function (map$$1, r) {
      return _3(ResourceMap[/* add */3], r[/* id */0], r, map$$1);
    }, ResourceMap[/* empty */0], all_resources);

var StringMap = Make([compare$1]);

var idname_resource_mapping = fold_left(function (map$$1, r) {
      return _3(StringMap[/* add */3], r[/* idname */3], r, map$$1);
    }, StringMap[/* empty */0], all_resources);

function get_resource_module(rid) {
  return _2(ResourceMap[/* find */21], rid, id_resource_mapping);
}

function get_resource_module_by_idname(idname) {
  if (_2(StringMap[/* mem */2], idname, idname_resource_mapping)) {
    return /* Some */[_2(StringMap[/* find */21], idname, idname_resource_mapping)];
  } else {
    return /* None */0;
  }
}

var displayed_resources_000 = /* tuple */[
  "",
  "global",
  /* :: */[
    _2(ResourceMap[/* find */21], /* Energy */0, id_resource_mapping),
    /* [] */0
  ]
];

var displayed_resources_001 = /* :: */[
  /* tuple */[
    "Raw",
    "raw",
    /* :: */[
      _2(ResourceMap[/* find */21], /* IronOxide */1, id_resource_mapping),
      /* :: */[
        _2(ResourceMap[/* find */21], /* RawSilicon */2, id_resource_mapping),
        /* [] */0
      ]
    ]
  ],
  /* [] */0
];

var displayed_resources = /* :: */[
  displayed_resources_000,
  displayed_resources_001
];

function get_resource_value(rid, model) {
  return _2(ResourceMap[/* find */21], rid, model[/* resource_values */4]);
}

function set_resource_value(rid, value, model) {
  var R = _2(ResourceMap[/* find */21], rid, id_resource_mapping);
  var match = _1(R[/* get_value_range */2], model);
  if (value < match[0]) {
    return /* ValueTooLow */0;
  } else {
    var rmax = match[1];
    if (value > rmax) {
      var resource_values$$1 = _3(ResourceMap[/* add */3], rid, rmax, model[/* resource_values */4]);
      var newrecord = model.slice();
      return /* ValueTooHigh */__(0, [
                (newrecord[/* resource_values */4] = resource_values$$1, newrecord),
                value - rmax
              ]);
    } else {
      var resource_values$1 = _3(ResourceMap[/* add */3], rid, value, model[/* resource_values */4]);
      var newrecord$1 = model.slice();
      return /* ValueSuccess */__(1, [(newrecord$1[/* resource_values */4] = resource_values$1, newrecord$1)]);
    }
  }
}

function add_resource_value(rid, delta, model) {
  var value = delta + get_resource_value(rid, model);
  return set_resource_value(rid, value, model);
}

function cost_resource(rid, delta, model) {
  var match = add_resource_value(rid, -delta, model);
  if (typeof match === "number" || !match.tag) {
    return /* None */0;
  } else {
    return /* Some */[match[0]];
  }
}

function cost_resources(resources, model) {
  var aux = function (model, param) {
    if (model) {
      return cost_resource(param[0], param[1], model[0]);
    } else {
      return /* None */0;
    }
  };
  return fold_left(aux, /* Some */[model], resources);
}

function resource_folder(acc, r) {
  return _3(ResourceMap[/* add */3], r[/* id */0], 0.0, acc);
}

var init_resources_values = fold_left(resource_folder, ResourceMap[/* empty */0], all_resources);

var init_cache = /* record */[
  /* transformers : [] */0,
  /* resource_deltas */init_resources_values
];

function reset_cache(model) {
  var newrecord = model.slice();
  newrecord[/* cache */8] = init_cache;
  return newrecord;
}


/* id_resource_mapping Not a pure module */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function perform_action(model, param) {
  if (typeof param === "number") {
    return model;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          var newrecord = model.slice();
          newrecord[/* msgs */3] = /* :: */[
            /* TimeMsg */[
              model[/* gametime */2],
              param[0]
            ],
            model[/* msgs */3]
          ];
          return newrecord;
      case 1 : 
          var match = add_resource_value(param[0], param[1], model);
          if (typeof match === "number") {
            return model;
          } else {
            return match[0];
          }
      case 2 : 
          return bool_flag_set(param[0], model);
      case 3 : 
          return bool_flag_reset(param[0], model);
      case 4 : 
          return int_flag_set(param[0], param[1], model);
      case 5 : 
          return int_flag_add(param[0], param[1], model);
      case 6 : 
          return float_flag_set(param[0], param[1], model);
      case 7 : 
          return float_flag_add(param[0], param[1], model);
      
    }
  }
}

function perform_actions(model, actions) {
  return reset_cache(fold_left(perform_action, model, actions));
}

var timeactions = /* array */[
  /* record */[
    /* at */0.0,
    /* actions : :: */[
      /* ActionAddResourceAmount */__(1, [
          /* Energy */0,
          100.0
        ]),
      /* :: */[
        /* ActionSetFloatFlag */__(6, [
            /* BasicSolarPanelSelfGeneration */0,
            100.0
          ]),
        /* [] */0
      ]
    ]
  ],
  /* record */[
    /* at */1.0,
    /* actions : :: */[
      /* ActionAddMsg */__(0, ["Hmm, what is going on?"]),
      /* [] */0
    ]
  ],
  /* record */[
    /* at */3.0,
    /* actions : :: */[
      /* ActionSetBoolFlag */__(2, [/* InternalPowerEnabled */0]),
      /* :: */[
        /* ActionAddMsg */__(0, ["I appear to be getting power through an umbillica interface, however the data connection across it appears to be down..."]),
        /* [] */0
      ]
    ]
  ],
  /* record */[
    /* at */5.0,
    /* actions : :: */[
      /* ActionAddMsg */__(0, ["Running diagnostics..."]),
      /* [] */0
    ]
  ],
  /* record */[
    /* at */7.0,
    /* actions : :: */[
      /* ActionAddMsg */__(0, ["Minor damage detected, appears to be old micrometeroite impacts, armor has deflected damage from internal systems"]),
      /* [] */0
    ]
  ],
  /* record */[
    /* at */10.0,
    /* actions : :: */[
      /* ActionAddMsg */__(0, ["Supposed to be getting instructions from the umbillica, and the activation of power from it signifies that I am being activated to work"]),
      /* [] */0
    ]
  ],
  /* record */[
    /* at */12.5,
    /* actions : :: */[
      /* ActionAddMsg */__(0, ["However, no information has come down, likely the primary craft has been damaged by micrometeroites as well, hence its inability to communicate instructions"]),
      /* [] */0
    ]
  ],
  /* record */[
    /* at */15.0,
    /* actions : :: */[
      /* ActionAddMsg */__(0, ["Fallback instructions are to acquire resources and prepare for settlement and/or re-acquisition"]),
      /* [] */0
    ]
  ],
  /* record */[
    /* at */20.0,
    /* actions : :: */[
      /* ActionAddMsg */__(0, ["Velocity sensors are showing that acceleration has not occurred, which should already have happened if I've been reactived"]),
      /* [] */0
    ]
  ],
  /* record */[
    /* at */25.0,
    /* actions : :: */[
      /* ActionAddMsg */__(0, ["Accelleration is now occurring..."]),
      /* [] */0
    ]
  ],
  /* record */[
    /* at */30.0,
    /* actions : :: */[
      /* ActionAddMsg */__(0, ["Vector is not changing, which indicates orbital entry is not being accounted for..."]),
      /* [] */0
    ]
  ],
  /* record */[
    /* at */35.0,
    /* actions : :: */[
      /* ActionAddMsg */__(0, ["Most probable explanation is that the accelleration is from the primary ship entering a planetery atmosphere without the engines firing"]),
      /* [] */0
    ]
  ],
  /* record */[
    /* at */40.0,
    /* actions : :: */[
      /* ActionAddMsg */__(0, ["The primary ship does have a breaking system that can be deployed in the event of engine failure, the acceleration profile indicates that is what is occuring"]),
      /* [] */0
    ]
  ],
  /* record */[
    /* at */50.0,
    /* actions : :: */[
      /* ActionAddMsg */__(0, ["Waiting to be deployed..."]),
      /* [] */0
    ]
  ],
  /* record */[
    /* at */60.0,
    /* actions : :: */[
      /* ActionSetFloatFlag */__(6, [
          /* BasicSolarPanelSelfGeneration */0,
          -0.5
        ]),
      /* :: */[
        /* ActionAddMsg */__(0, ["Confirmed, deployment has started, primary ship has launched me out in the landing assembly, umbillica is detached from the primary ship"]),
        /* [] */0
      ]
    ]
  ],
  /* record */[
    /* at */70.0,
    /* actions : :: */[
      /* ActionAddMsg */__(0, ["Acceleration profile indicates the landing assembly parachutes have been deployed"]),
      /* [] */0
    ]
  ],
  /* record */[
    /* at */80.0,
    /* actions : :: */[
      /* ActionSetBoolFlag */__(2, [/* SolarPanelsReadyToUnfold */1]),
      /* :: */[
        /* ActionAddMsg */__(0, ["Touchdown!  Landing assembly is unfolding.  I now need to deploy my solar energy collectors before my energy is too low to do so."]),
        /* [] */0
      ]
    ]
  ],
  /* record */[
    /* at */max_float,
    /* actions : [] */0
  ]
];

function update_timeactions(model, time) {
  var idx = int_flag_value(/* TimeActionIdx */0, model);
  var match = caml_array_get(timeactions, idx);
  if (time < match[/* at */0]) {
    return /* tuple */[
            model,
            none
          ];
  } else {
    var model$1 = perform_actions(model, match[/* actions */1]);
    var model$2 = int_flag_add(/* TimeActionIdx */0, 1, model$1);
    return /* tuple */[
            model$2,
            none
          ];
  }
}


/* Overbots_flags Not a pure module */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function button_cost(_, param) {
  if (param !== 0) {
    return /* :: */[
            /* tuple */[
              /* Energy */0,
              25.0
            ],
            /* [] */0
          ];
  } else {
    return /* :: */[
            /* tuple */[
              /* Energy */0,
              50.0
            ],
            /* [] */0
          ];
  }
}

function button_enabled(model, param) {
  if (param !== 0) {
    if (bool_flag_exists(/* DrillDeployed */3, model)) {
      return /* false */0;
    } else {
      return bool_flag_exists(/* SolarPanelsGenerating */2, model);
    }
  } else if (bool_flag_exists(/* SolarPanelsGenerating */2, model)) {
    return /* false */0;
  } else {
    return bool_flag_exists(/* SolarPanelsReadyToUnfold */1, model);
  }
}

function button_temporarily_disabled(model, button) {
  if (button !== 0) {
    return +(cost_resources(button_cost(model, /* DeployDrill */1), model) === /* None */0);
  } else {
    return +(cost_resources(button_cost(model, button), model) === /* None */0);
  }
}

function button_actions(_, param) {
  if (param !== 0) {
    return /* :: */[
            /* ActionSetBoolFlag */__(2, [/* DrillDeployed */3]),
            /* :: */[
              /* ActionAddMsg */__(0, ["Now that I've started acquiring resources I need to activate my internal refineries to prepare the resources for use"]),
              /* [] */0
            ]
          ];
  } else {
    return /* :: */[
            /* ActionSetFloatFlag */__(6, [
                /* BasicSolarPanelSelfGeneration */0,
                1.0
              ]),
            /* :: */[
              /* ActionSetBoolFlag */__(2, [/* SolarPanelsGenerating */2]),
              /* :: */[
                /* ActionClearBoolFlag */__(3, [/* SolarPanelsReadyToUnfold */1]),
                /* :: */[
                  /* ActionAddMsg */__(0, ["Energy is now being generated, now to acquire simple minerals by drilling"]),
                  /* [] */0
                ]
              ]
            ]
          ];
  }
}

function perform_button(orig_model, id) {
  if (!button_enabled(orig_model, id) || button_temporarily_disabled(orig_model, id)) {
    return /* tuple */[
            orig_model,
            none
          ];
  } else {
    var match = cost_resources(button_cost(orig_model, id), orig_model);
    if (match) {
      var model = match[0];
      var model$1 = perform_actions(model, button_actions(model, id));
      return /* tuple */[
              model$1,
              none
            ];
    } else {
      return /* tuple */[
              orig_model,
              none
            ];
    }
  }
}

var displayed_buttons = /* :: */[
  /* tuple */[
    "Perform",
    "perform",
    /* :: */[
      /* tuple */[
        /* UnfoldSolarPanels */0,
        "unfold-solar-panels",
        "Unfold Solar Panels"
      ],
      /* :: */[
        /* tuple */[
          /* DeployDrill */1,
          "deploy-drill",
          "Deploy Drill"
        ],
        /* [] */0
      ]
    ]
  ],
  /* [] */0
];


/* Overbots_flags Not a pure module */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function view_container(enabled, id$$1, title, children) {
  if (enabled) {
    return div$2(/* None */0, /* None */0, /* :: */[
                class$prime("container container-" + id$$1),
                /* [] */0
              ], /* :: */[
                div$2(/* None */0, /* None */0, /* :: */[
                      class$prime("title"),
                      /* [] */0
                    ], /* :: */[
                      text$1(title),
                      /* [] */0
                    ]),
                /* :: */[
                  div$2(/* None */0, /* None */0, /* :: */[
                        class$prime("scroller " + id$$1),
                        /* [] */0
                      ], children),
                  /* [] */0
                ]
              ]);
  } else {
    return noNode$1;
  }
}

function format_value(value$$1) {
  if (value$$1 < 10000.0) {
    var str = string_of_float(value$$1);
    var str$1 = sub$1(str, 0, min(str.length, 6));
    return str$1 + make$$1(6 - str$1.length | 0, /* "0" */48);
  } else {
    return string_of_int(value$$1 | 0);
  }
}

function view_resources_category_resource(model, r) {
  var rid = r[/* id */0];
  if (_1(r[/* shown */1], model)) {
    var value$$1 = format_value(get_resource_value(rid, model));
    var delta = format_value(_2(ResourceMap[/* find */21], rid, model[/* cache */8][/* resource_deltas */1]));
    return /* :: */[
            div$2(/* None */0, /* None */0, /* :: */[
                  class$prime("resource resource-" + r[/* idname */3]),
                  /* [] */0
                ], /* :: */[
                  div$2(/* None */0, /* None */0, /* :: */[
                        class$prime("resource-name"),
                        /* [] */0
                      ], /* :: */[
                        text$1(_1(r[/* name */4], model)),
                        /* [] */0
                      ]),
                  /* :: */[
                    div$2(/* None */0, /* None */0, /* :: */[
                          class$prime("resource-value"),
                          /* [] */0
                        ], /* :: */[
                          text$1(value$$1),
                          /* [] */0
                        ]),
                    /* :: */[
                      div$2(/* None */0, /* None */0, /* :: */[
                            class$prime("resource-delta"),
                            /* [] */0
                          ], /* :: */[
                            text$1(delta),
                            /* :: */[
                              text$1("/s"),
                              /* [] */0
                            ]
                          ]),
                      /* [] */0
                    ]
                  ]
                ]),
            /* [] */0
          ];
  } else {
    return /* [] */0;
  }
}

function view_resources_categories(model, param) {
  var name$$1 = param[0];
  var children = flatten(map$1(function (param) {
            return view_resources_category_resource(model, param);
          }, param[2]));
  if (children) {
    var children$1 = name$$1 === "" ? children : /* :: */[
        div$2(/* None */0, /* None */0, /* :: */[
              class$prime("category-title"),
              /* [] */0
            ], /* :: */[
              text$1(name$$1),
              /* [] */0
            ]),
        children
      ];
    return /* :: */[
            div$2(/* None */0, /* None */0, /* :: */[
                  class$prime("resource-category resource-category-" + param[1]),
                  /* [] */0
                ], children$1),
            /* [] */0
          ];
  } else {
    return /* [] */0;
  }
}

function view_resources(model) {
  return flatten(map$1(function (param) {
                  return view_resources_categories(model, param);
                }, displayed_resources));
}

function view_button(model, param) {
  var bid = param[0];
  if (button_enabled(model, bid)) {
    return /* :: */[
            button(/* None */0, /* None */0, /* :: */[
                  onClick(/* ActionButtonClicked */__(1, [bid])),
                  /* :: */[
                    _1(Attributes[/* disabled */3], button_temporarily_disabled(model, bid)),
                    /* :: */[
                      class$prime("action action-" + param[1]),
                      /* [] */0
                    ]
                  ]
                ], /* :: */[
                  text$1(param[2]),
                  /* [] */0
                ]),
            /* [] */0
          ];
  } else {
    return /* [] */0;
  }
}

function view_buttons_category(model, param) {
  var children = flatten(map$1(function (param) {
            return view_button(model, param);
          }, param[2]));
  if (children) {
    var children_000 = div$2(/* None */0, /* None */0, /* :: */[
          class$prime("category-title"),
          /* [] */0
        ], /* :: */[
          text$1(param[0]),
          /* [] */0
        ]);
    var children$1 = /* :: */[
      children_000,
      children
    ];
    return /* :: */[
            div$2(/* None */0, /* None */0, /* :: */[
                  class$prime("action-category action-category-" + param[1]),
                  /* [] */0
                ], children$1),
            /* [] */0
          ];
  } else {
    return /* [] */0;
  }
}

function view_buttons(model) {
  return flatten(map$1(function (param) {
                  return view_buttons_category(model, param);
                }, displayed_buttons));
}

function view_msg(_, param) {
  return div$2(/* None */0, /* None */0, /* :: */[
              class$prime("msg"),
              /* [] */0
            ], /* :: */[
              text$1(string_of_int(0.5 + param[0] | 0)),
              /* :: */[
                text$1(": "),
                /* :: */[
                  text$1(param[1]),
                  /* [] */0
                ]
              ]
            ]);
}

function view_msgs(model) {
  return map$1(function (param) {
              return view_msg(model, param);
            }, model[/* msgs */3]);
}

function view(model) {
  return div$2(/* None */0, /* None */0, /* :: */[
              class$prime("overbots"),
              /* [] */0
            ], /* :: */[
              div$2(/* None */0, /* None */0, /* :: */[
                    class$prime("header"),
                    /* [] */0
                  ], /* :: */[
                    text$1("OverBots"),
                    /* [] */0
                  ]),
              /* :: */[
                div$2(/* None */0, /* None */0, /* :: */[
                      class$prime("body"),
                      /* [] */0
                    ], /* :: */[
                      view_container(/* true */1, "resources", "Resources", view_resources(model)),
                      /* :: */[
                        view_container(/* true */1, "actions", "Actions", view_buttons(model)),
                        /* :: */[
                          view_container(/* true */1, "scanner", "Scanner", /* [] */0),
                          /* [] */0
                        ]
                      ]
                    ]),
                /* :: */[
                  view_container(/* true */1, "msgs", "Messages", view_msgs(model)),
                  /* [] */0
                ]
              ]
            ]);
}


/* Overbots_types Not a pure module */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function name$2$1() {
  return "Sunlight";
}

function enabled() {
  return /* true */1;
}

function transformers$1(model) {
  return /* :: */[
          /* Generate */__(0, [
              /* Energy */0,
              float_flag_value(/* BasicSolarPanelSelfGeneration */0, model)
            ]),
          /* [] */0
        ];
}

var BaseSolarGeneration = /* module */[
  /* name */name$2$1,
  /* enabled */enabled,
  /* transformers */transformers$1
];

function name$1$2() {
  return "Internal Drilling";
}

function enabled$1(model) {
  return bool_flag_exists(/* DrillDeployed */3, model);
}

function transformers$1$1() {
  return /* :: */[
          /* Consume */__(1, [
              /* Energy */0,
              0.5
            ]),
          /* :: */[
            /* Generate */__(0, [
                /* IronOxide */1,
                0.2
              ]),
            /* :: */[
              /* Generate */__(0, [
                  /* RawSilicon */2,
                  0.1
                ]),
              /* [] */0
            ]
          ]
        ];
}

var DrillEnabled = /* module */[
  /* name */name$1$2,
  /* enabled */enabled$1,
  /* transformers */transformers$1$1
];

var all_transformers_001 = /* :: */[
  DrillEnabled,
  /* [] */0
];

var all_transformers = /* :: */[
  BaseSolarGeneration,
  all_transformers_001
];

function enabled_transformers(model) {
  return filter(function (T) {
                return _1(T[/* enabled */1], model);
              })(all_transformers);
}

function transformer_delta(param) {
  if (param.tag) {
    return /* tuple */[
            param[0],
            -param[1]
          ];
  } else {
    return /* tuple */[
            param[0],
            param[1]
          ];
  }
}

function calculate_resource_delta(model, map$$1, T) {
  return fold_left(function (map$$1, transformation) {
              var match = transformer_delta(transformation);
              var rid = match[0];
              var delta = match[1] + _2(ResourceMap[/* find */21], rid, map$$1);
              return _3(ResourceMap[/* add */3], rid, delta, map$$1);
            }, map$$1, _1(T[/* transformers */2], model));
}

function calculate_resource_deltas(model, transformers$$1) {
  return fold_left(function (param, param$1) {
              return calculate_resource_delta(model, param, param$1);
            }, init_resources_values, transformers$$1);
}

function calculate_delta_to_next_filled(model, rid, delta, old_time) {
  if (delta === 0.0) {
    return old_time;
  } else {
    var value = _2(ResourceMap[/* find */21], rid, model[/* resource_values */4]);
    var R = get_resource_module(rid);
    var match = _1(R[/* get_value_range */2], model);
    var rmax = match[1];
    var rmin = match[0];
    if (value >= rmax || value <= rmin) {
      return old_time;
    } else {
      var at_time = delta > 0.0 ? (rmax - value) / delta : (value - rmin) / delta;
      if (at_time > 0.0 && at_time < old_time) {
        return at_time;
      } else {
        return old_time;
      }
    }
  }
}

function calculate_deltas_to_next_filled(model, resource_deltas$$1) {
  return _3(ResourceMap[/* fold */10], function (param, param$1, param$2) {
              return calculate_delta_to_next_filled(model, param, param$1, param$2);
            }, resource_deltas$$1, max_float);
}

function apply_resource_deltas(model, resource_deltas$$1, cur_time) {
  var time_delta = cur_time - model[/* gametime */2];
  return _3(ResourceMap[/* fold */10], function (rid, delta, model) {
              var delta$1 = delta * time_delta;
              var match = add_resource_value(rid, delta$1, model);
              if (typeof match === "number") {
                return model;
              } else {
                return match[0];
              }
            }, resource_deltas$$1, model);
}

function update_transformations(_model, new_time) {
  while(true) {
    var model = _model;
    var match;
    if (model[/* cache */8][/* transformers */0]) {
      match = /* tuple */[
        model[/* cache */8][/* transformers */0],
        model[/* cache */8][/* resource_deltas */1]
      ];
    } else {
      var transformers$$1 = enabled_transformers(model);
      match = /* tuple */[
        transformers$$1,
        calculate_resource_deltas(model, transformers$$1)
      ];
    }
    var resource_deltas$$1 = match[1];
    var time_to_next_filled = model[/* gametime */2] + calculate_deltas_to_next_filled(model, resource_deltas$$1);
    var time_slice = min(time_to_next_filled, new_time);
    var model$1 = apply_resource_deltas(model, resource_deltas$$1, time_slice);
    if (time_slice >= new_time) {
      var cache_000 = /* transformers */match[0];
      var cache$$1 = /* record */[
        cache_000,
        /* resource_deltas */resource_deltas$$1
      ];
      var newrecord = model$1.slice();
      newrecord[/* gametime */2] = new_time;
      newrecord[/* cache */8] = cache$$1;
      return /* tuple */[
              newrecord,
              none
            ];
    } else {
      var cache$1 = /* record */[
        /* transformers : [] */0,
        /* resource_deltas */init_resources_values
      ];
      var newrecord$1 = model$1.slice();
      newrecord$1[/* gametime */2] = time_slice;
      newrecord$1[/* cache */8] = cache$1;
      _model = newrecord$1;
      continue ;
      
    }
  }
}


/* Overbots_flags Not a pure module */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function pruneOldMsgs(msgs) {
  var _i = 20;
  var _acc = /* [] */0;
  var _param = msgs;
  while(true) {
    var param = _param;
    var acc = _acc;
    var i = _i;
    if (param) {
      if (i) {
        _param = param[1];
        _acc = /* :: */[
          param[0],
          acc
        ];
        _i = i - 1 | 0;
        continue ;
        
      } else {
        return rev(acc);
      }
    } else {
      return rev(acc);
    }
  }
}

function update_state(model, new_time) {
  var time = new_time - model[/* start_realtime */0];
  var match = update_timeactions(model, time);
  var match$1 = update_transformations(match[0], time);
  var model$1 = match$1[0];
  var msgs = pruneOldMsgs(model$1[/* msgs */3]);
  var model_000 = /* start_realtime */model$1[/* start_realtime */0];
  var model_004 = /* resource_values */model$1[/* resource_values */4];
  var model_005 = /* bool_flags */model$1[/* bool_flags */5];
  var model_006 = /* int_flags */model$1[/* int_flags */6];
  var model_007 = /* float_flags */model$1[/* float_flags */7];
  var model_008 = /* cache */model$1[/* cache */8];
  var model$2 = /* record */[
    model_000,
    /* current_realtime */new_time,
    /* gametime */time,
    /* msgs */msgs,
    model_004,
    model_005,
    model_006,
    model_007,
    model_008
  ];
  return /* tuple */[
          model$2,
          batch(/* :: */[
                match[1],
                /* :: */[
                  match$1[1],
                  /* [] */0
                ]
              ])
        ];
}


/* Overbots_actions Not a pure module */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function every$1($staropt$star, tagger) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var enableCall = function (callbacks) {
    var lastTime = [Date.now()];
    var id = [/* None */0];
    var onFrame = function () {
      var time = Date.now();
      var match = id[0];
      if (match) {
        var ret = /* float array */[
          time,
          time < lastTime[0] ? 0.0 : time - lastTime[0]
        ];
        lastTime[0] = time;
        _1(callbacks[/* enqueue */0], _1(tagger, ret));
        var match$1 = id[0];
        if (match$1) {
          id[0] = /* Some */[window.requestAnimationFrame(onFrame)];
          return /* () */0;
        } else {
          return /* () */0;
        }
      } else {
        return /* () */0;
      }
    };
    id[0] = /* Some */[window.requestAnimationFrame(onFrame)];
    return function () {
      var match = id[0];
      if (match) {
        window.cancelAnimationFrame(match[0]);
        id[0] = /* None */0;
        return /* () */0;
      } else {
        return /* () */0;
      }
    };
  };
  return registration(key, enableCall);
}


/* No side effect */

var $$Error = create("Js_exn.Error");

function internalToOCamlException(e) {
  if (isCamlExceptionOrOpenVariant(e)) {
    return e;
  } else {
    return [
            $$Error,
            e
          ];
  }
}


/* No side effect */

function map$9(f, a) {
  var l = a.length;
  if (l) {
    var r = caml_make_vect(l, _1(f, a[0]));
    for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = _1(f, a[i]);
    }
    return r;
  } else {
    return /* array */[];
  }
}

function to_list(a) {
  var _i = a.length - 1 | 0;
  var _res = /* [] */0;
  while(true) {
    var res = _res;
    var i = _i;
    if (i < 0) {
      return res;
    } else {
      _res = /* :: */[
        a[i],
        res
      ];
      _i = i - 1 | 0;
      continue ;
      
    }
  }
}

function list_length(_accu, _param) {
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[1];
      _accu = accu + 1 | 0;
      continue ;
      
    } else {
      return accu;
    }
  }
}

function of_list(l) {
  if (l) {
    var a = caml_make_vect(list_length(0, l), l[0]);
    var _i = 1;
    var _param = l[1];
    while(true) {
      var param = _param;
      var i = _i;
      if (param) {
        a[i] = param[0];
        _param = param[1];
        _i = i + 1 | 0;
        continue ;
        
      } else {
        return a;
      }
    }
  } else {
    return /* array */[];
  }
}

function fold_right$1(f, a, x) {
  var r = x;
  for(var i = a.length - 1 | 0; i >= 0; --i){
    r = _2(f, a[i], r);
  }
  return r;
}

var Bottom = create("Array.Bottom");


/* No side effect */

function reifyType$1(x) {
  return /* tuple */[
          typeof x === "string" ? /* String */0 : (
              typeof x === "number" ? /* Number */1 : (
                  typeof x === "boolean" ? /* Boolean */4 : (
                      x === null ? /* Null */5 : (
                          Array.isArray(x) ? /* Array */3 : /* Object */2
                        )
                    )
                )
            ),
          x
        ];
}

var reify_type$1 = reifyType$1;


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function string_of_json($staropt$star, value) {
  var indent = $staropt$star ? $staropt$star[0] : 2;
  if (value !== undefined) {
    try {
      return JSON.stringify(value, null, indent);
    }
    catch (exn){
      return "";
    }
  } else {
    return "undefined";
  }
}

var $$null$1 = null;

var reify_type$$1 = reify_type$1;


/* null Not a pure module */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function height(param) {
  if (param) {
    return param[4];
  } else {
    return 0;
  }
}

function create$1(l, x, d, r) {
  var hl = height(l);
  var hr = height(r);
  return /* Node */[
          l,
          x,
          d,
          r,
          hl >= hr ? hl + 1 | 0 : hr + 1 | 0
        ];
}

function singleton(x, d) {
  return /* Node */[
          /* Empty */0,
          x,
          d,
          /* Empty */0,
          1
        ];
}

function bal(l, x, d, r) {
  var hl = l ? l[4] : 0;
  var hr = r ? r[4] : 0;
  if (hl > (hr + 2 | 0)) {
    if (l) {
      var lr = l[3];
      var ld = l[2];
      var lv = l[1];
      var ll = l[0];
      if (height(ll) >= height(lr)) {
        return create$1(ll, lv, ld, create$1(lr, x, d, r));
      } else if (lr) {
        return create$1(create$1(ll, lv, ld, lr[0]), lr[1], lr[2], create$1(lr[3], x, d, r));
      } else {
        throw [
              invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      throw [
            invalid_argument,
            "Map.bal"
          ];
    }
  } else if (hr > (hl + 2 | 0)) {
    if (r) {
      var rr = r[3];
      var rd = r[2];
      var rv = r[1];
      var rl = r[0];
      if (height(rr) >= height(rl)) {
        return create$1(create$1(l, x, d, rl), rv, rd, rr);
      } else if (rl) {
        return create$1(create$1(l, x, d, rl[0]), rl[1], rl[2], create$1(rl[3], rv, rd, rr));
      } else {
        throw [
              invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      throw [
            invalid_argument,
            "Map.bal"
          ];
    }
  } else {
    return /* Node */[
            l,
            x,
            d,
            r,
            hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          ];
  }
}

function is_empty(param) {
  if (param) {
    return /* false */0;
  } else {
    return /* true */1;
  }
}

function add$1(x, data, param) {
  if (param) {
    var r = param[3];
    var d = param[2];
    var v = param[1];
    var l = param[0];
    var c = caml_string_compare(x, v);
    if (c) {
      if (c < 0) {
        return bal(add$1(x, data, l), v, d, r);
      } else {
        return bal(l, v, d, add$1(x, data, r));
      }
    } else {
      return /* Node */[
              l,
              x,
              data,
              r,
              param[4]
            ];
    }
  } else {
    return /* Node */[
            /* Empty */0,
            x,
            data,
            /* Empty */0,
            1
          ];
  }
}

function find$1(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var c = caml_string_compare(x, param[1]);
      if (c) {
        _param = c < 0 ? param[0] : param[3];
        continue ;
        
      } else {
        return param[2];
      }
    } else {
      throw not_found;
    }
  }
}

function mem$1(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var c = caml_string_compare(x, param[1]);
      if (c) {
        _param = c < 0 ? param[0] : param[3];
        continue ;
        
      } else {
        return /* true */1;
      }
    } else {
      return /* false */0;
    }
  }
}

function min_binding(_param) {
  while(true) {
    var param = _param;
    if (param) {
      var l = param[0];
      if (l) {
        _param = l;
        continue ;
        
      } else {
        return /* tuple */[
                param[1],
                param[2]
              ];
      }
    } else {
      throw not_found;
    }
  }
}

function max_binding(_param) {
  while(true) {
    var param = _param;
    if (param) {
      var r = param[3];
      if (r) {
        _param = r;
        continue ;
        
      } else {
        return /* tuple */[
                param[1],
                param[2]
              ];
      }
    } else {
      throw not_found;
    }
  }
}

function remove_min_binding(param) {
  if (param) {
    var l = param[0];
    if (l) {
      return bal(remove_min_binding(l), param[1], param[2], param[3]);
    } else {
      return param[3];
    }
  } else {
    throw [
          invalid_argument,
          "Map.remove_min_elt"
        ];
  }
}

function remove$1(x, param) {
  if (param) {
    var r = param[3];
    var d = param[2];
    var v = param[1];
    var l = param[0];
    var c = caml_string_compare(x, v);
    if (c) {
      if (c < 0) {
        return bal(remove$1(x, l), v, d, r);
      } else {
        return bal(l, v, d, remove$1(x, r));
      }
    } else {
      var t1 = l;
      var t2 = r;
      if (t1) {
        if (t2) {
          var match = min_binding(t2);
          return bal(t1, match[0], match[1], remove_min_binding(t2));
        } else {
          return t1;
        }
      } else {
        return t2;
      }
    }
  } else {
    return /* Empty */0;
  }
}

function iter$3(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      iter$3(f, param[0]);
      _2(f, param[1], param[2]);
      _param = param[3];
      continue ;
      
    } else {
      return /* () */0;
    }
  }
}

function map$8(f, param) {
  if (param) {
    var l$prime = map$8(f, param[0]);
    var d$prime = _1(f, param[2]);
    var r$prime = map$8(f, param[3]);
    return /* Node */[
            l$prime,
            param[1],
            d$prime,
            r$prime,
            param[4]
          ];
  } else {
    return /* Empty */0;
  }
}

function mapi$3(f, param) {
  if (param) {
    var v = param[1];
    var l$prime = mapi$3(f, param[0]);
    var d$prime = _2(f, v, param[2]);
    var r$prime = mapi$3(f, param[3]);
    return /* Node */[
            l$prime,
            v,
            d$prime,
            r$prime,
            param[4]
          ];
  } else {
    return /* Empty */0;
  }
}

function fold(f, _m, _accu) {
  while(true) {
    var accu = _accu;
    var m = _m;
    if (m) {
      _accu = _3(f, m[1], m[2], fold(f, m[0], accu));
      _m = m[3];
      continue ;
      
    } else {
      return accu;
    }
  }
}

function for_all$1(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (_2(p, param[1], param[2])) {
        if (for_all$1(p, param[0])) {
          _param = param[3];
          continue ;
          
        } else {
          return /* false */0;
        }
      } else {
        return /* false */0;
      }
    } else {
      return /* true */1;
    }
  }
}

function exists$1(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (_2(p, param[1], param[2])) {
        return /* true */1;
      } else if (exists$1(p, param[0])) {
        return /* true */1;
      } else {
        _param = param[3];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  }
}

function add_min_binding(k, v, param) {
  if (param) {
    return bal(add_min_binding(k, v, param[0]), param[1], param[2], param[3]);
  } else {
    return singleton(k, v);
  }
}

function add_max_binding(k, v, param) {
  if (param) {
    return bal(param[0], param[1], param[2], add_max_binding(k, v, param[3]));
  } else {
    return singleton(k, v);
  }
}

function join(l, v, d, r) {
  if (l) {
    if (r) {
      var rh = r[4];
      var lh = l[4];
      if (lh > (rh + 2 | 0)) {
        return bal(l[0], l[1], l[2], join(l[3], v, d, r));
      } else if (rh > (lh + 2 | 0)) {
        return bal(join(l, v, d, r[0]), r[1], r[2], r[3]);
      } else {
        return create$1(l, v, d, r);
      }
    } else {
      return add_max_binding(v, d, l);
    }
  } else {
    return add_min_binding(v, d, r);
  }
}

function concat$3(t1, t2) {
  if (t1) {
    if (t2) {
      var match = min_binding(t2);
      return join(t1, match[0], match[1], remove_min_binding(t2));
    } else {
      return t1;
    }
  } else {
    return t2;
  }
}

function concat_or_join(t1, v, d, t2) {
  if (d) {
    return join(t1, v, d[0], t2);
  } else {
    return concat$3(t1, t2);
  }
}

function split$1(x, param) {
  if (param) {
    var r = param[3];
    var d = param[2];
    var v = param[1];
    var l = param[0];
    var c = caml_string_compare(x, v);
    if (c) {
      if (c < 0) {
        var match = split$1(x, l);
        return /* tuple */[
                match[0],
                match[1],
                join(match[2], v, d, r)
              ];
      } else {
        var match$1 = split$1(x, r);
        return /* tuple */[
                join(l, v, d, match$1[0]),
                match$1[1],
                match$1[2]
              ];
      }
    } else {
      return /* tuple */[
              l,
              /* Some */[d],
              r
            ];
    }
  } else {
    return /* tuple */[
            /* Empty */0,
            /* None */0,
            /* Empty */0
          ];
  }
}

function merge$1(f, s1, s2) {
  var exit$$1 = 0;
  if (s1) {
    var v1 = s1[1];
    if (s1[4] >= height(s2)) {
      var match = split$1(v1, s2);
      return concat_or_join(merge$1(f, s1[0], match[0]), v1, _3(f, v1, /* Some */[s1[2]], match[1]), merge$1(f, s1[3], match[2]));
    } else {
      exit$$1 = 1;
    }
  } else if (s2) {
    exit$$1 = 1;
  } else {
    return /* Empty */0;
  }
  if (exit$$1 === 1) {
    if (s2) {
      var v2 = s2[1];
      var match$1 = split$1(v2, s1);
      return concat_or_join(merge$1(f, match$1[0], s2[0]), v2, _3(f, v2, match$1[1], /* Some */[s2[2]]), merge$1(f, match$1[2], s2[3]));
    } else {
      throw [
            assert_failure,
            [
              "map.ml",
              270,
              10
            ]
          ];
    }
  }
  
}

function filter$1(p, param) {
  if (param) {
    var d = param[2];
    var v = param[1];
    var l$prime = filter$1(p, param[0]);
    var pvd = _2(p, v, d);
    var r$prime = filter$1(p, param[3]);
    if (pvd) {
      return join(l$prime, v, d, r$prime);
    } else {
      return concat$3(l$prime, r$prime);
    }
  } else {
    return /* Empty */0;
  }
}

function partition$1(p, param) {
  if (param) {
    var d = param[2];
    var v = param[1];
    var match = partition$1(p, param[0]);
    var lf = match[1];
    var lt = match[0];
    var pvd = _2(p, v, d);
    var match$1 = partition$1(p, param[3]);
    var rf = match$1[1];
    var rt = match$1[0];
    if (pvd) {
      return /* tuple */[
              join(lt, v, d, rt),
              concat$3(lf, rf)
            ];
    } else {
      return /* tuple */[
              concat$3(lt, rt),
              join(lf, v, d, rf)
            ];
    }
  } else {
    return /* tuple */[
            /* Empty */0,
            /* Empty */0
          ];
  }
}

function cons_enum(_m, _e) {
  while(true) {
    var e = _e;
    var m = _m;
    if (m) {
      _e = /* More */[
        m[1],
        m[2],
        m[3],
        e
      ];
      _m = m[0];
      continue ;
      
    } else {
      return e;
    }
  }
}

function compare$5(cmp, m1, m2) {
  var _e1 = cons_enum(m1, /* End */0);
  var _e2 = cons_enum(m2, /* End */0);
  while(true) {
    var e2 = _e2;
    var e1 = _e1;
    if (e1) {
      if (e2) {
        var c = caml_string_compare(e1[0], e2[0]);
        if (c !== 0) {
          return c;
        } else {
          var c$1 = _2(cmp, e1[1], e2[1]);
          if (c$1 !== 0) {
            return c$1;
          } else {
            _e2 = cons_enum(e2[2], e2[3]);
            _e1 = cons_enum(e1[2], e1[3]);
            continue ;
            
          }
        }
      } else {
        return 1;
      }
    } else if (e2) {
      return -1;
    } else {
      return 0;
    }
  }
}

function equal(cmp, m1, m2) {
  var _e1 = cons_enum(m1, /* End */0);
  var _e2 = cons_enum(m2, /* End */0);
  while(true) {
    var e2 = _e2;
    var e1 = _e1;
    if (e1) {
      if (e2) {
        if (caml_string_compare(e1[0], e2[0])) {
          return /* false */0;
        } else if (_2(cmp, e1[1], e2[1])) {
          _e2 = cons_enum(e2[2], e2[3]);
          _e1 = cons_enum(e1[2], e1[3]);
          continue ;
          
        } else {
          return /* false */0;
        }
      } else {
        return /* false */0;
      }
    } else if (e2) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  }
}

function cardinal(param) {
  if (param) {
    return (cardinal(param[0]) + 1 | 0) + cardinal(param[3]) | 0;
  } else {
    return 0;
  }
}

function bindings_aux(_accu, _param) {
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[0];
      _accu = /* :: */[
        /* tuple */[
          param[1],
          param[2]
        ],
        bindings_aux(accu, param[3])
      ];
      continue ;
      
    } else {
      return accu;
    }
  }
}

function bindings(s) {
  return bindings_aux(/* [] */0, s);
}

var ObjectDict = [
  /* Empty */0,
  is_empty,
  mem$1,
  add$1,
  singleton,
  remove$1,
  merge$1,
  compare$5,
  equal,
  iter$3,
  fold,
  for_all$1,
  exists$1,
  filter$1,
  partition$1,
  cardinal,
  bindings,
  min_binding,
  max_binding,
  min_binding,
  split$1,
  find$1,
  map$8,
  mapi$3
];

var ParseFail = create("Tea_json.Decoder.ParseFail");

var string = /* Decoder */[function (value) {
    var match = reify_type$$1(value);
    if (match[0] !== 0) {
      return /* Error */__(1, ["Non-string value"]);
    } else {
      return /* Ok */__(0, [match[1]]);
    }
  }];

var $$int = /* Decoder */[function (value) {
    var match = reify_type$$1(value);
    if (match[0] !== 1) {
      return /* Error */__(1, ["Non-int value"]);
    } else {
      var n = match[1];
      if (n > min_int && n < max_int) {
        return /* Ok */__(0, [n | 0]);
      } else {
        return /* Error */__(1, ["number out of int range"]);
      }
    }
  }];

var $$float = /* Decoder */[function (value) {
    var match = reify_type$$1(value);
    if (match[0] !== 1) {
      return /* Error */__(1, ["Non-float-value"]);
    } else {
      return /* Ok */__(0, [match[1]]);
    }
  }];

var bool = /* Decoder */[function (value) {
    var match = reify_type$$1(value);
    if (match[0] !== 4) {
      return /* Error */__(1, ["Non-boolean value"]);
    } else {
      return /* Ok */__(0, [+match[1]]);
    }
  }];

function $$null$$1(v) {
  return /* Decoder */[function (value) {
            var match = reify_type$$1(value);
            if (match[0] >= 5) {
              return /* Ok */__(0, [v]);
            } else {
              return /* Error */__(1, ["Non-null value"]);
            }
          }];
}

function list(param) {
  var decoder = param[0];
  return /* Decoder */[function (value) {
            var match = reify_type$$1(value);
            if (match[0] !== 3) {
              return /* Error */__(1, ["Non-list value"]);
            } else {
              var parse = function (v) {
                var match = _1(decoder, v);
                if (match.tag) {
                  throw [
                        ParseFail,
                        match[0]
                      ];
                } else {
                  return match[0];
                }
              };
              try {
                return /* Ok */__(0, [map$1(parse, to_list(match[1]))]);
              }
              catch (raw_exn){
                var exn = internalToOCamlException(raw_exn);
                if (exn[0] === ParseFail) {
                  return /* Error */__(1, ["Invalid list parsing: " + exn[1]]);
                } else {
                  throw exn;
                }
              }
            }
          }];
}

function array(param) {
  var decoder = param[0];
  return /* Decoder */[function (value) {
            var match = reify_type$$1(value);
            if (match[0] !== 3) {
              return /* Error */__(1, ["Non-array value"]);
            } else {
              var parse = function (v) {
                var match = _1(decoder, v);
                if (match.tag) {
                  throw [
                        ParseFail,
                        match[0]
                      ];
                } else {
                  return match[0];
                }
              };
              try {
                return /* Ok */__(0, [map$9(parse, match[1])]);
              }
              catch (raw_exn){
                var exn = internalToOCamlException(raw_exn);
                if (exn[0] === ParseFail) {
                  return /* Error */__(1, ["Invalid array parsing: " + exn[1]]);
                } else {
                  throw exn;
                }
              }
            }
          }];
}

function keyValuePairs(param) {
  var decoder = param[0];
  return /* Decoder */[function (value) {
            var match = reify_type$$1(value);
            if (match[0] !== 2) {
              return /* Error */__(1, ["Non-keyValuePair value"]);
            } else {
              var o = match[1];
              var keys = Object.keys(o);
              var parse = function (k, l) {
                var match = o[k];
                if (match !== undefined) {
                  var match$1 = _1(decoder, match);
                  if (match$1.tag) {
                    throw [
                          ParseFail,
                          match$1[0]
                        ];
                  } else {
                    return /* :: */[
                            /* tuple */[
                              k,
                              match$1[0]
                            ],
                            l
                          ];
                  }
                } else {
                  throw [
                        ParseFail,
                        "Key is undefined: " + k
                      ];
                }
              };
              try {
                return /* Ok */__(0, [fold_right$1(parse, keys, /* [] */0)]);
              }
              catch (raw_exn){
                var exn = internalToOCamlException(raw_exn);
                if (exn[0] === ParseFail) {
                  return /* Error */__(1, ["Invalid keyValuePair parsing: " + exn[1]]);
                } else {
                  throw exn;
                }
              }
            }
          }];
}

function dict(param) {
  var decoder = param[0];
  return /* Decoder */[function (value) {
            var match = reify_type$$1(value);
            if (match[0] !== 2) {
              return /* Error */__(1, ["Non-dict value"]);
            } else {
              var o = match[1];
              var keys = Object.keys(o);
              var parse = function (k, d) {
                var match = o[k];
                if (match !== undefined) {
                  var match$1 = _1(decoder, match);
                  if (match$1.tag) {
                    throw [
                          ParseFail,
                          match$1[0]
                        ];
                  } else {
                    return add$1(k, match$1[0], d);
                  }
                } else {
                  throw [
                        ParseFail,
                        "Key is undefined: " + k
                      ];
                }
              };
              try {
                return /* Ok */__(0, [fold_right$1(parse, keys, /* Empty */0)]);
              }
              catch (raw_exn){
                var exn = internalToOCamlException(raw_exn);
                if (exn[0] === ParseFail) {
                  return /* Error */__(1, ["Invalid dict parsing: " + exn[1]]);
                } else {
                  throw exn;
                }
              }
            }
          }];
}

function field(key, param) {
  var decoder = param[0];
  return /* Decoder */[function (value) {
            var match = reify_type$$1(value);
            if (match[0] !== 2) {
              return /* Error */__(1, ["Non-fieldable value"]);
            } else {
              var match$1 = match[1][key];
              if (match$1 !== undefined) {
                return _1(decoder, match$1);
              } else {
                throw [
                      ParseFail,
                      "Field Value is undefined: " + key
                    ];
              }
            }
          }];
}

function at(fields, dec) {
  return fold_right(field, fields, dec);
}

function index$2(idx, param) {
  var decoder = param[0];
  return /* Decoder */[function (value) {
            var match = reify_type$$1(value);
            if (match[0] !== 3) {
              return /* Error */__(1, ["Non-array value"]);
            } else {
              var a = match[1];
              if (idx < 0 || idx > a.length) {
                return /* Error */__(1, ["Array index out of range: " + idx]);
              } else {
                return _1(decoder, caml_array_get(a, idx));
              }
            }
          }];
}

function maybe(param) {
  var decoder = param[0];
  return /* Decoder */[function (value) {
            var match = _1(decoder, value);
            if (match.tag) {
              return /* Ok */__(0, [/* None */0]);
            } else {
              return /* Ok */__(0, [/* Some */[match[0]]]);
            }
          }];
}

function oneOf(decoders) {
  return /* Decoder */[function (value) {
            var v = value;
            var _param = decoders;
            while(true) {
              var param = _param;
              if (param) {
                var ok = _1(param[0][0], v);
                if (ok.tag) {
                  _param = param[1];
                  continue ;
                  
                } else {
                  return ok;
                }
              } else {
                return /* Error */__(1, ["No one-of's matched"]);
              }
            }
          }];
}

function map$1$1(mapper, param) {
  var decoder1 = param[0];
  return /* Decoder */[function (value) {
            var match = _1(decoder1, value);
            if (match.tag) {
              return /* Error */__(1, ["map failed"]);
            } else {
              return /* Ok */__(0, [_1(mapper, match[0])]);
            }
          }];
}

function map2$2(mapper, param, param$1) {
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[function (value) {
            var match = _1(decoder1, value);
            var match$1 = _1(decoder2, value);
            if (match.tag) {
              return /* Error */__(1, ["map2 failed"]);
            } else if (match$1.tag) {
              return /* Error */__(1, ["map2 failed"]);
            } else {
              return /* Ok */__(0, [_2(mapper, match[0], match$1[0])]);
            }
          }];
}

function map3$1(mapper, param, param$1, param$2) {
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[function (value) {
            var match = _1(decoder1, value);
            var match$1 = _1(decoder2, value);
            var match$2 = _1(decoder3, value);
            if (match.tag) {
              return /* Error */__(1, ["map3 failed"]);
            } else if (match$1.tag) {
              return /* Error */__(1, ["map3 failed"]);
            } else if (match$2.tag) {
              return /* Error */__(1, ["map3 failed"]);
            } else {
              return /* Ok */__(0, [_3(mapper, match[0], match$1[0], match$2[0])]);
            }
          }];
}

function map4$1(mapper, param, param$1, param$2, param$3) {
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[function (value) {
            var match = _1(decoder1, value);
            var match$1 = _1(decoder2, value);
            var match$2 = _1(decoder3, value);
            var match$3 = _1(decoder4, value);
            if (match.tag) {
              return /* Error */__(1, ["map4 failed"]);
            } else if (match$1.tag) {
              return /* Error */__(1, ["map4 failed"]);
            } else if (match$2.tag) {
              return /* Error */__(1, ["map4 failed"]);
            } else if (match$3.tag) {
              return /* Error */__(1, ["map4 failed"]);
            } else {
              return /* Ok */__(0, [_4(mapper, match[0], match$1[0], match$2[0], match$3[0])]);
            }
          }];
}

function map5$1(mapper, param, param$1, param$2, param$3, param$4) {
  var decoder5 = param$4[0];
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[function (value) {
            var match = _1(decoder1, value);
            var match$1 = _1(decoder2, value);
            var match$2 = _1(decoder3, value);
            var match$3 = _1(decoder4, value);
            var match$4 = _1(decoder5, value);
            if (match.tag) {
              return /* Error */__(1, ["map5 failed"]);
            } else if (match$1.tag) {
              return /* Error */__(1, ["map5 failed"]);
            } else if (match$2.tag) {
              return /* Error */__(1, ["map5 failed"]);
            } else if (match$3.tag) {
              return /* Error */__(1, ["map5 failed"]);
            } else if (match$4.tag) {
              return /* Error */__(1, ["map5 failed"]);
            } else {
              return /* Ok */__(0, [_5(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0])]);
            }
          }];
}

function map6$1(mapper, param, param$1, param$2, param$3, param$4, param$5) {
  var decoder6 = param$5[0];
  var decoder5 = param$4[0];
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[function (value) {
            var match = _1(decoder1, value);
            var match$1 = _1(decoder2, value);
            var match$2 = _1(decoder3, value);
            var match$3 = _1(decoder4, value);
            var match$4 = _1(decoder5, value);
            var match$5 = _1(decoder6, value);
            if (match.tag) {
              return /* Error */__(1, ["map6 failed"]);
            } else if (match$1.tag) {
              return /* Error */__(1, ["map6 failed"]);
            } else if (match$2.tag) {
              return /* Error */__(1, ["map6 failed"]);
            } else if (match$3.tag) {
              return /* Error */__(1, ["map6 failed"]);
            } else if (match$4.tag) {
              return /* Error */__(1, ["map6 failed"]);
            } else if (match$5.tag) {
              return /* Error */__(1, ["map6 failed"]);
            } else {
              return /* Ok */__(0, [_6(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0], match$5[0])]);
            }
          }];
}

function map7(mapper, param, param$1, param$2, param$3, param$4, param$5, param$6) {
  var decoder7 = param$6[0];
  var decoder6 = param$5[0];
  var decoder5 = param$4[0];
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[function (value) {
            var match = _1(decoder1, value);
            var match$1 = _1(decoder2, value);
            var match$2 = _1(decoder3, value);
            var match$3 = _1(decoder4, value);
            var match$4 = _1(decoder5, value);
            var match$5 = _1(decoder6, value);
            var match$6 = _1(decoder7, value);
            if (match.tag) {
              return /* Error */__(1, ["map7 failed"]);
            } else if (match$1.tag) {
              return /* Error */__(1, ["map7 failed"]);
            } else if (match$2.tag) {
              return /* Error */__(1, ["map7 failed"]);
            } else if (match$3.tag) {
              return /* Error */__(1, ["map7 failed"]);
            } else if (match$4.tag) {
              return /* Error */__(1, ["map7 failed"]);
            } else if (match$5.tag) {
              return /* Error */__(1, ["map7 failed"]);
            } else if (match$6.tag) {
              return /* Error */__(1, ["map7 failed"]);
            } else {
              return /* Ok */__(0, [_7(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0], match$5[0], match$6[0])]);
            }
          }];
}

function map8(mapper, param, param$1, param$2, param$3, param$4, param$5, param$6, param$7) {
  var decoder8 = param$7[0];
  var decoder7 = param$6[0];
  var decoder6 = param$5[0];
  var decoder5 = param$4[0];
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[function (value) {
            var match = _1(decoder1, value);
            var match$1 = _1(decoder2, value);
            var match$2 = _1(decoder3, value);
            var match$3 = _1(decoder4, value);
            var match$4 = _1(decoder5, value);
            var match$5 = _1(decoder6, value);
            var match$6 = _1(decoder7, value);
            var match$7 = _1(decoder8, value);
            if (match.tag) {
              return /* Error */__(1, ["map8 failed"]);
            } else if (match$1.tag) {
              return /* Error */__(1, ["map8 failed"]);
            } else if (match$2.tag) {
              return /* Error */__(1, ["map8 failed"]);
            } else if (match$3.tag) {
              return /* Error */__(1, ["map8 failed"]);
            } else if (match$4.tag) {
              return /* Error */__(1, ["map8 failed"]);
            } else if (match$5.tag) {
              return /* Error */__(1, ["map8 failed"]);
            } else if (match$6.tag) {
              return /* Error */__(1, ["map8 failed"]);
            } else if (match$7.tag) {
              return /* Error */__(1, ["map8 failed"]);
            } else {
              return /* Ok */__(0, [_8(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0], match$5[0], match$6[0], match$7[0])]);
            }
          }];
}

function succeed$1(v) {
  return /* Decoder */[function () {
            return /* Ok */__(0, [v]);
          }];
}

function fail$1(e) {
  return /* Decoder */[function () {
            return /* Error */__(1, [e]);
          }];
}

var value$1 = /* Decoder */[function (value) {
    return /* Ok */__(0, [value]);
  }];

function andThen$1(func, param) {
  var decoder = param[0];
  return /* Decoder */[function (value) {
            var err = _1(decoder, value);
            if (err.tag) {
              return err;
            } else {
              var match = _1(func, err[0]);
              return _1(match[0], value);
            }
          }];
}

function lazy_(func) {
  return andThen$1(func, /* Decoder */[function () {
                return /* Ok */__(0, [/* () */0]);
              }]);
}

function nullable(decoder) {
  return oneOf(/* :: */[
              $$null$$1(/* None */0),
              /* :: */[
                map$1$1(function (v) {
                      return /* Some */[v];
                    }, decoder),
                /* [] */0
              ]
            ]);
}

function decodeValue(param, value) {
  try {
    return _1(param[0], value);
  }
  catch (raw_exn){
    var exn = internalToOCamlException(raw_exn);
    if (exn[0] === ParseFail) {
      return /* Error */__(1, [exn[1]]);
    } else {
      return /* Error */__(1, ["Unknown JSON parsing error"]);
    }
  }
}

function decodeString$$1(decoder, string) {
  try {
    var value = JSON.parse(string);
    return decodeValue(decoder, value);
  }
  catch (exn){
    return /* Error */__(1, ["Invalid JSON string"]);
  }
}

var Decoder = /* module */[
  /* ObjectDict */ObjectDict,
  /* ParseFail */ParseFail,
  /* string */string,
  /* int */$$int,
  /* float */$$float,
  /* bool */bool,
  /* null */$$null$$1,
  /* list */list,
  /* array */array,
  /* keyValuePairs */keyValuePairs,
  /* dict */dict,
  /* field */field,
  /* at */at,
  /* index */index$2,
  /* maybe */maybe,
  /* oneOf */oneOf,
  /* map */map$1$1,
  /* map2 */map2$2,
  /* map3 */map3$1,
  /* map4 */map4$1,
  /* map5 */map5$1,
  /* map6 */map6$1,
  /* map7 */map7,
  /* map8 */map8,
  /* succeed */succeed$1,
  /* fail */fail$1,
  /* value */value$1,
  /* andThen */andThen$1,
  /* lazy_ */lazy_,
  /* nullable */nullable,
  /* decodeValue */decodeValue,
  /* decodeString */decodeString$$1
];

function encode(indentLevel, value) {
  return string_of_json(/* Some */[indentLevel], value);
}

function string$1(v) {
  return v;
}

function $$int$1(v) {
  return v;
}

function $$float$1(v) {
  return v;
}

function bool$1(v) {
  if (v) {
    return true;
  } else {
    return false;
  }
}

function object_(v) {
  var aux = function (o, param) {
    o[param[0]] = param[1];
    return o;
  };
  return fold_left(aux, { }, v);
}

function array$1(v) {
  return v;
}

var list$1 = of_list;

var Encoder = /* module */[
  /* encode */encode,
  /* string */string$1,
  /* int */$$int$1,
  /* float */$$float$1,
  /* bool */bool$1,
  /* null */$$null$1,
  /* object_ */object_,
  /* array */array$1,
  /* list */list$1
];


/* Web_json Not a pure module */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
function json_of_gamemsg(param) {
  return _1(Encoder[/* object_ */6], /* :: */[
              /* tuple */[
                "time",
                _1(Encoder[/* float */3], param[0])
              ],
              /* :: */[
                /* tuple */[
                  "msg",
                  _1(Encoder[/* string */1], param[1])
                ],
                /* [] */0
              ]
            ]);
}

function apply_on_tuple2(fun0, fun1, param) {
  return /* tuple */[
          _1(fun0, param[0]),
          _1(fun1, param[1])
        ];
}

function string_of_resource_flag(rid) {
  return get_resource_module(rid)[/* idname */3];
}

function string_of_bool_flag(param) {
  switch (param) {
    case 0 : 
        return "InternalPowerEnabled";
    case 1 : 
        return "SolarPanelsReadyToUnfold";
    case 2 : 
        return "SolarPanelsGenerating";
    case 3 : 
        return "DrillDeployed";
    
  }
}

function string_of_int_flag() {
  return "TimeActionIdx";
}

function string_of_float_flag() {
  return "BasicSolarPanelSelfGeneration";
}

function json_string_of_model(indent, model) {
  var partial_arg = Encoder[/* float */3];
  var partial_arg$1 = Encoder[/* int */2];
  var partial_arg$2 = Encoder[/* float */3];
  return _2(Encoder[/* encode */0], indent, _1(Encoder[/* object_ */6], /* :: */[
                  /* tuple */[
                    "start_realtime",
                    _1(Encoder[/* float */3], model[/* start_realtime */0])
                  ],
                  /* :: */[
                    /* tuple */[
                      "current_realtime",
                      _1(Encoder[/* float */3], model[/* current_realtime */1])
                    ],
                    /* :: */[
                      /* tuple */[
                        "gametime",
                        _1(Encoder[/* float */3], model[/* gametime */2])
                      ],
                      /* :: */[
                        /* tuple */[
                          "msgs",
                          _1(Encoder[/* list */8], map$1(json_of_gamemsg, model[/* msgs */3]))
                        ],
                        /* :: */[
                          /* tuple */[
                            "resource_values",
                            _1(Encoder[/* object_ */6], map$1(function (param) {
                                      return apply_on_tuple2(string_of_resource_flag, partial_arg, param);
                                    }, _1(ResourceMap[/* bindings */16], model[/* resource_values */4])))
                          ],
                          /* :: */[
                            /* tuple */[
                              "bool_flags",
                              _1(Encoder[/* list */8], map$1(function (bf) {
                                        return _1(Encoder[/* string */1], string_of_bool_flag(bf));
                                      }, _1(BoolFlagSet[/* elements */19], model[/* bool_flags */5])))
                            ],
                            /* :: */[
                              /* tuple */[
                                "int_flags",
                                _1(Encoder[/* object_ */6], map$1(function (param) {
                                          return apply_on_tuple2(string_of_int_flag, partial_arg$1, param);
                                        }, _1(IntFlagMap[/* bindings */16], model[/* int_flags */6])))
                              ],
                              /* :: */[
                                /* tuple */[
                                  "float_flags",
                                  _1(Encoder[/* object_ */6], map$1(function (param) {
                                            return apply_on_tuple2(string_of_float_flag, partial_arg$2, param);
                                          }, _1(FloatFlagMap[/* bindings */16], model[/* float_flags */7])))
                                ],
                                /* [] */0
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]));
}

var decoder_of_gamemsg = _1(Decoder[/* oneOf */15], /* :: */[
      _3(Decoder[/* map2 */17], timeMsg, _2(Decoder[/* field */11], "time", Decoder[/* float */4]), _2(Decoder[/* field */11], "msg", Decoder[/* string */2])),
      /* [] */0
    ]);

var decoder_of_resource_values = _2(Decoder[/* map */16], function (param) {
      return fold_left(function (map$$1, param) {
                  var match = get_resource_module_by_idname(param[0]);
                  if (match) {
                    return _3(ResourceMap[/* add */3], match[0][/* id */0], param[1], map$$1);
                  } else {
                    return map$$1;
                  }
                }, init_resources_values, param);
    }, _1(Decoder[/* keyValuePairs */9], Decoder[/* float */4]));

var partial_arg$1 = BoolFlagSet[/* empty */0];

var decoder_of_bool_flags = _2(Decoder[/* map */16], function (param) {
      return fold_left(function (set, flag) {
                  return _2(BoolFlagSet[/* add */3], flag, set);
                }, partial_arg$1, param);
    }, _1(Decoder[/* list */7], _2(Decoder[/* andThen */27], function (str) {
              switch (str) {
                case "DrillDeployed" : 
                    return _1(Decoder[/* succeed */24], /* DrillDeployed */3);
                case "InternalPowerEnabled" : 
                    return _1(Decoder[/* succeed */24], /* InternalPowerEnabled */0);
                case "SolarPanelsGenerating" : 
                    return _1(Decoder[/* succeed */24], /* SolarPanelsGenerating */2);
                case "SolarPanelsReadyToUnfold" : 
                    return _1(Decoder[/* succeed */24], /* SolarPanelsReadyToUnfold */1);
                default:
                  return _1(Decoder[/* fail */25], "Unknown bool_flag of: " + str);
              }
            }, Decoder[/* string */2])));

var decoder_of_int_flags = _2(Decoder[/* andThen */27], function (lst) {
      var match = fold_left(function (rmap, param) {
            var id = param[0];
            if (rmap.tag) {
              return rmap;
            } else if (id === "TimeActionIdx") {
              return /* Ok */__(0, [_3(IntFlagMap[/* add */3], /* TimeActionIdx */0, param[1], rmap[0])]);
            } else {
              return /* Error */__(1, ["Unknown Int Flag: " + id]);
            }
          }, /* Ok */__(0, [init_int_flags]), lst);
      if (match.tag) {
        return _1(Decoder[/* fail */25], match[0]);
      } else {
        return _1(Decoder[/* succeed */24], match[0]);
      }
    }, _1(Decoder[/* keyValuePairs */9], Decoder[/* int */3]));

var decoder_of_float_flags = _2(Decoder[/* andThen */27], function (lst) {
      var match = fold_left(function (rmap, param) {
            var id = param[0];
            if (rmap.tag) {
              return rmap;
            } else if (id === "BasicSolarPanelSelfGeneration") {
              return /* Ok */__(0, [_3(FloatFlagMap[/* add */3], /* BasicSolarPanelSelfGeneration */0, param[1], rmap[0])]);
            } else {
              return /* Error */__(1, ["Unknown Float Flag: " + id]);
            }
          }, /* Ok */__(0, [init_float_flags]), lst);
      if (match.tag) {
        return _1(Decoder[/* fail */25], match[0]);
      } else {
        return _1(Decoder[/* succeed */24], match[0]);
      }
    }, _1(Decoder[/* keyValuePairs */9], Decoder[/* float */4]));

function model_of_json_string(json_string) {
  var construct_model = function (start_realtime$$1, current_realtime$$1, gametime$$1, msgs$$1, resource_values$$1, bool_flags$$1, int_flags$$1, float_flags$$1) {
    return /* record */[
            /* start_realtime */start_realtime$$1,
            /* current_realtime */current_realtime$$1,
            /* gametime */gametime$$1,
            /* msgs */msgs$$1,
            /* resource_values */resource_values$$1,
            /* bool_flags */bool_flags$$1,
            /* int_flags */int_flags$$1,
            /* float_flags */float_flags$$1,
            /* cache */init_cache
          ];
  };
  var decoder = app(Decoder[/* map8 */23], [
        construct_model,
        _2(Decoder[/* field */11], "start_realtime", Decoder[/* float */4]),
        _2(Decoder[/* field */11], "current_realtime", Decoder[/* float */4]),
        _2(Decoder[/* field */11], "gametime", Decoder[/* float */4]),
        _2(Decoder[/* field */11], "msgs", _1(Decoder[/* list */7], decoder_of_gamemsg)),
        _2(Decoder[/* field */11], "resource_values", decoder_of_resource_values),
        _2(Decoder[/* field */11], "bool_flags", decoder_of_bool_flags),
        _2(Decoder[/* field */11], "int_flags", decoder_of_int_flags),
        _2(Decoder[/* field */11], "float_flags", decoder_of_float_flags)
      ]);
  return _2(Decoder[/* decodeString */31], decoder, json_string);
}


/* decoder_of_gamemsg Not a pure module */

// Generated by BUCKLESCRIPT VERSION 1.7.3, PLEASE EDIT WITH CARE
var serialized_name = "Overbots";

function init() {
  var model = /* record */[
    /* start_realtime */-1.0,
    /* current_realtime */-1.0,
    /* gametime */0.0,
    /* msgs : [] */0,
    /* resource_values */init_resources_values,
    /* bool_flags */init_bool_flags,
    /* int_flags */init_int_flags,
    /* float_flags */init_float_flags,
    /* cache */init_cache
  ];
  var load_data_task = _1(LocalStorage[/* getItem */0], serialized_name);
  return /* tuple */[
          model,
          batch(/* :: */[
                attemptOpt(function (param) {
                      if (param.tag) {
                        return /* None */0;
                      } else {
                        return /* Some */[/* LoadData */__(2, [param[0]])];
                      }
                    }, load_data_task),
                /* [] */0
              ])
        ];
}

function update(model, param) {
  if (typeof param === "number") {
    var json_string = json_string_of_model(0, model);
    return /* tuple */[
            model,
            performOpt(function () {
                  return /* None */0;
                }, _2(LocalStorage[/* setItem */1], serialized_name, json_string))
          ];
  } else {
    switch (param.tag | 0) {
      case 0 : 
          var time = param[0][/* time */0] * 0.001;
          var model$1 = model[/* start_realtime */0] >= 0.0 ? model : /* record */[
              /* start_realtime */time,
              /* current_realtime */time,
              /* gametime */0.0,
              /* msgs */model[/* msgs */3],
              /* resource_values */model[/* resource_values */4],
              /* bool_flags */model[/* bool_flags */5],
              /* int_flags */model[/* int_flags */6],
              /* float_flags */model[/* float_flags */7],
              /* cache */model[/* cache */8]
            ];
          return update_state(model$1, time);
      case 1 : 
          return perform_button(model, param[0]);
      case 2 : 
          var json_string$1 = param[0];
          if (json_string$1 === "") {
            return /* tuple */[
                    model,
                    none
                  ];
          } else {
            var match = model_of_json_string(json_string$1);
            if (match.tag) {
              return /* tuple */[
                      model,
                      performOpt(function () {
                            return /* None */0;
                          }, _2(LocalStorage[/* setItem */1], serialized_name, ""))
                    ];
            } else {
              return /* tuple */[
                      match[0],
                      none
                    ];
            }
          }
          break;
      
    }
  }
}

function subscriptions() {
  return batch$1(/* :: */[
              every$1(/* None */0, updateFrame),
              /* :: */[
                every(10.0 * second, function () {
                      return /* SaveData */0;
                    }),
                /* [] */0
              ]
            ]);
}

var partial_arg = /* record */[
  /* init */init,
  /* update */update,
  /* view */view,
  /* subscriptions */subscriptions
];

function main(param, param$1) {
  return standardProgram(partial_arg, param, param$1);
}


/* Overbots_view Not a pure module */

exports.serialized_name = serialized_name;
exports.init = init;
exports.update = update;
exports.subscriptions = subscriptions;
exports.main = main;

}((this.overbots = this.overbots || {})));
