console.log("SetTimeoutZero");

var a = 1078698;
var b = 20986;

//This callback function is pushed to the callstack only after the callstack is empty
setTimeout(() => {
  console.log("set Timeout zero");
}, 0);
function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication of a, b is:", c);
