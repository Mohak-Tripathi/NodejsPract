// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   //  console.log(req.url)

//   if (req.url === "/") {
//     res.end("Hello from other sides");
//   } else if (req.url === "/about") {
//     res.end("Hello from about side");
//   } else if (req.url === "/contact") {

//     fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", function(err, data){
//     //   console.log(err) // to see in terminal 
//     //   res.end(data) // to see in browser UI   
  
//       const objData = JSON.parse(data) 
//       res.end(objData[0].name)
  
//     })


//   } else {
//     res.writeHead(404, { "Content-Type": "text/html" });
//     res.end(" <h1> 404 Not Found. Page not found. <h1>");
//   }
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening to port number 8000");
// });












const http = require("http"); 
const fs = require("fs"); 

const server = http.createServer((req, res) =>{

 const data=  fs.readFileSync(`${__dirname}/UserApi/userapi.json`, "utf-8")
const objData = JSON.parse(data)


if(req.url === "/"){
  res.end("Hello from other sides")
}
else if(req.url === "/about"){
  res.end("Hello from about side")
}
else if(req.url === "/contact"){
  res.end("Hello from contact side")  
  
}
else if(req.url == "/userapi"){
  res.writeHead(200, {"content-Type": "application/json"})
    res.end(objData[0].name)

}
else{
  res.writeHead(404, {"content-Type": "text/html"})
  res.end(" <h1> 404 Not Found. Page not found. <h1>" )
}

})









server.listen(8000, "127.0.0.1", ()=>{
  console.log("Listening to port number 8000")
})