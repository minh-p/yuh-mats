const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((res) => {
  res.statusCode = 200;
});

server.listen(PORT)
