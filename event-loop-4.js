//last line of the file.
//nexttick
//inner nexttick
//promise
//timer expired
//setimmediate
//file reading cb

const fs = require("fs");

setImmediate(() => console.log("immediate"));

setTimeout(() => console.log("timeout"));

Promise.resolve().then(() => {
  console.log("promise");
});

fs.readFile("./file.txt", "utf8", () => {
  console.log("file reading");
});

process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick1"));
  console.log("next tick");
});
console.log("last line of the file");
