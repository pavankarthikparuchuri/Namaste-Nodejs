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

# Nodejs has an event-driven architecture capable of asynchronous I/O

- Javascript is a synchronous single threaded language
- Meaning there is only one thread in which js engine runs (single threaded)
- Thread is a smallest unit of execution in a process
- Javascript is single threaded meaning executes line by line
- Javascript is synchronous but with Nodejs we can perform asynchronous tasks.
- Asynchronous tasks are tasks that takes time.
- js engine offloads the requirements like accessing timer, databases, network calls and file system to libuv and libuv inteacts with os that manages all these and gets access to the resources and does the task and passes to JS Engine.
- js engine can get access to all these super powers through libuv.
- libuv is a multi-platform C library that provides support for asynchronous I/O based on event loops.
- libuv acts a middle-layer between v8 engine and operating system.
- That is why NodeJs is asynchronous and can do asynchronous I/O and non-blocking I/O as doesnot block the main thread JS ENGINE.
- Javascript is synchronous singlethreaded but nodejs has libuv through which asynchronous I/O can be performed.
- libuv is a famous library used in other places as well as where we need I/O operations to handle.

# require require("node:util") is same as require("util")
