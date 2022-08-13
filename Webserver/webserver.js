const http = require("http");

const server = http.createServer((req, res) => {
  //  console.log(req.url)

  if (req.url === "/") {
    res.end("Hello from other sides");
  } else if (req.url === "/about") {
    res.end("Hello from about side");
  } else if (req.url === "/contact") {
    res.end("Hello from contact side");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(" <h1> 404 Not Found. Page not found. <h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to port number 8000");
});
