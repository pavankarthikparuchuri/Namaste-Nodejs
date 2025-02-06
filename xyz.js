console.log("very important js code");
console.log(__filename);
console.log(__dirname);
console.log(exports);
const a = 100;
function x() {
  var a = 10;
  function y() {
    console.log("y");
  }
}
console.log(a);
