const fs= require("fs")

let obj = {
    name : "MOHAK",
    age: 23
  }
  
  const jsonData= JSON.stringify(obj)
  
//  fs.writeFile("json2.json", jsonData, (err)=>{
//     console.log("done")
//   })
  
  fs.readFile("json2.json", "utf-8", (err, data)=>{
    console.log(data)

    console.log(JSON.parse(data))
  })