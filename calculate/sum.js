//Modules are a collection of code that is private to itself.
//Modules protects their variables and functions from leaking.
//we need to explicitly mention the methods and variables that we want export.
// module.exports = {
//     x,
//     sum,
//   };
//   is similar to
//   module.exports = {
//     x:x,
//     sum:sum,
//   };

//module.exports initially is an empty object
//we can also export using module.exports.x = x, module.exports.sum = sum;
console.log("sum module");

let x = "Hello world";
const sum = (a, b) => {
  console.log(a + b);
};

module.exports = {
  x,
  sum,
};
