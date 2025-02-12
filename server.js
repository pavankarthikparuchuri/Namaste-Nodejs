const http = require("http");

const server = http.createServer(function (req, res) {
  //req,res are two methods which have multiple properties
  //reply the users with message hello world
  if (req.url === "/getSecretData") {
    res.end("There is no secret data");
  }
  res.end("Hello world!");
}); //this creates an instance of a server

server.listen(7777);
