const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <h1>DSO101 Assignment 3</h1>
    <p>Todo App running successfully.</p>
    <p>CI/CD pipeline is working successfully.</p>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});