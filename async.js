const fs = require("fs");
const https = require("https");

console.log("asynchronous code");
var a = 1078698;
var b = 20986;

//synchronous function - this will block the main thread.
console.log(fs.readFileSync("./file.txt", "utf-8"));
console.log("This will execute only after file read");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

setTimeout(() => {
  console.log("set timeout called after 5 seconds");
}, 5000);

//Async functions
fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("Async File Data: ", data);
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication result is : ", c);
