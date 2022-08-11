const path = require("path")

// console.log(path.dirname("G:/NodejsPract/PathModule/path.js"))  

// console.log(path.extname("G:/NodejsPract/PathModule/path.js"))  

// console.log(path.basename("G:/NodejsPract/PathModule/path.js"))  

// console.log(path.parse("G:/NodejsPract/PathModule/path.js"))  

const myPath= path.parse("G:/NodejsPract/PathModule/path.js")

console.log(myPath.root)   
console.log(myPath.base)  
