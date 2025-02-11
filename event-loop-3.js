const fs = require("fs");

setImmediate(() => "setImmediate");
Promise.resolve().then(() => console.log("Promise"));
setTimeout(() => {
  console.log("Timer expired");
}, 0);

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("2nd timer"), 0);
  process.nextTick(() => console.log("2nd nexttick"));
  setImmediate(() => console.log("2nd immediate"));
  console.log("file reading cb");
});

process.nextTick(() => console.log("nextTick"));
console.log("last line of the file.");
