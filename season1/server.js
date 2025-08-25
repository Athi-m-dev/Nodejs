const http = require("http");

const server = http.createServer(function (req, res) {
  res.end("hello from server");
  if (req.url === "/getdata") {
    res.end("data from /getdata");
  }
});

server.listen(8000);