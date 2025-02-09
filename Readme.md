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

# diving deep into v8 engine

- Developed and maintained by google.
- V8 engine parses, interprets, compiles and executes Javascript code.
- when the code goes through v8 engine, the following steps happen
- Parsing:
  - lexical analysis (also known as tokenization): code that we provide is broken down into tokens
  - syntax analysis: an abstract syntax tree(AST) is developed from the tokens.
  - Example of AST:-
  - ![alt text](image.png)
  - when the code was not able to generate an abstract syntax tree, we face syntax error.
- There are two types of languages, interpretted and compiled.
- In interpretter, the code is translated line by line at the time of excution.
- In Compiler, the code is first compiled to machine code so that during execution, no translation is required.
- interpretted languages have fast initial execution but compiled languages initially heavily but executed.
- interpretted languages are slow, although compiled languages takes time initially they are faster later.
- Javascript is just in time compilation language. it has compiler as well as interpretter.
- After Ast is formed, it goes to interpretter.
- v8 engines interpretter name is ignition.
- interpretter converts the code to byte code and after that the code goes through execution.
- v8 engines compiler is turbo fan.
- when the code is being processed in interpretter it finds out the code which is used again and again. this reusabled code is called hot code, this code is passed to compiler so that it could optimize in such a way that the execution of that hot code would be faster.
- compiler compiles the hot code and generates an optimised machine code.
- The role of the compiler is to optimise the hot code so that it's execution would be faster.
- but while converting to optimised machine code it makes some assumptions.
- like if the hot code is a sum function that takes 2 parameters a and b, lets say it assumes that a and b are numbers.
- if in future a sum call is invoked with two strings then it deoptimises the code and passes it to interpretter, it interpretts and converts into byte code.
- ![alt text](image-1.png)
- the use of interpretter and a compiler to convert the ast into byte and optimised machine code is called just in time compilation.
- Also garbage collection is done in parallel, v8's garbage collection are called orinoco, oil pan, scavenger
- mark and sweep algorithm is used for garbage collection.
- v8 engine also does inline caching, copy elision
