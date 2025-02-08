console.log("Synchronous Code");
var a = 1078698;
var b = 20986;

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication of a, b is:", c);
