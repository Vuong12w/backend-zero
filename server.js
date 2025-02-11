const { createServer } = require('node:http');

const hostname = 'localhost';//localhost
const port = 3000;// có thể lựa chọn từ 0-65535 né những port phổ biến như 80 443
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n vuong le');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
