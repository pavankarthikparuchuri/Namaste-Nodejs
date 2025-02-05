require("./xyz");

const { x, sum, multiply } = require("./calculate");

const data = require("./data.json");

const util = require("node:util");

var name = "pavankarthik";

var a = 10;
var b = 20;
console.log(name);
console.log(x);
sum(a, b);
multiply(a, b);
console.log(data);
// console.log(util);

console.log(globalThis === global);
