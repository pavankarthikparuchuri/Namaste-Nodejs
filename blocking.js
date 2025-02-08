const crypto = require("crypto");

console.log("Blocking Code");

var a = 1078698;
var b = 20986;
//sync functions doesnot have a callback function
// Synchronous Function - Will BLOCK THE MAIN THREAD - DON'T USE IT
console.log(crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512"));
console.log("This will execute only after the above sync function");
//Password based key derivation function
//password, salt for encryption, iteration(more the iteration, hard to decrypt), keylength, algorithm, callback function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("key is genrated: ", key);
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication result is : ", c);
