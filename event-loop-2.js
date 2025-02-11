const fs = require("fs");

const a = 100;

setImmediate(() => console.log("set Immediate"));

Promise.resolve().then(() => console.log("Promise"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("reading file");
});

setTimeout(() => {
  console.log("settimeout function");
}, 0);

process.nextTick(() => console.log("process.nexttick"));

function printA() {
  console.log("a = ", a);
}
printA();
console.log("last line of the file.");
