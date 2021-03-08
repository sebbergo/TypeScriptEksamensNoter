const http = require("http");
const task1D = require("./task1D");

const server = http.createServer((req, res) => {
  if (req.url === "/api/randoms") {
    res.setHeader("Content-Type", "application/json");
    task1D
      .getAsyncResult([8, 16, 24, 32, 40])
      .then((data) => res.write(JSON.stringify(data)));
    setTimeout(() => {
      res.end();
    }, 1000);
  }
});

server.on("connection", (sock) => {
  sock.remoteAddress;
});

server.listen(3000);
console.log("listening on 3000");
