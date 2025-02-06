# Modules

- Modules are a collection of code that is private to itself.
- Modules protects their variables and functions from leaking.
- we need to explicitly mention the methods and variables that we want export.
- module.exports = {
  x,
  sum,
  };
  is similar to
  module.exports = {
  x:x,
  sum:sum,
  };

- module.exports initially is an empty object
- we can also export using module.exports.x = x, module.exports.sum = sum;
- when require("./path") is used, all of the code is wrapped inside a function(IIFE)
- IIFE - Immediately invoked function expression.
- example of IIFE
- (function(){
  // ALL the code of the module runs inside here
  })()
  - IIFE invokes the function immediately
  - provides privacy to variables to methods
  - so the reason for variables and methods private in different modules is because of IIFE and require statement.
- How do you get access to mode.exports, require?
- Nodejs passes modules, require and also other as a parameter to the IIFE
- (function(exports, require,module, **filename, **dirname){
  // ALL the code of the module runs inside here
  })(module, require, ...rest)
- this IIFE along with params passed by nodejs is what is passed to js engine

# Five step mechanism happens when require("/path") is used

- Resolving the module
  - checking whether it is a local path etc.
  - checking whether it is json file of node:module etc or a created private module.
- Loading the module
  - file content is loaded according file type
- wraps inside an IIFE (compile step )
- Code Evaluation
  - module.exports is returned from the require statement
- Caching
  - module is cached
