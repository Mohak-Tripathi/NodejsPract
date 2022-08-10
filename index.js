const fs= require('fs');

// fs.mkdir("pp", function(err){
//     console.log("dir created")
// })


// const data= fs.readFileSync("pp/readme.txt", "UTF-8") 
// console.log(data)   

// console.log("After reading data" )  




fs.readFile("pp/readme.txt", "utf8", function(err, data){
    err ? console.log(err) : console.log(data)
  })
  
  console.log("After reading data" )  


// fs.writeFile("pp/readme.txt", "today is awesome day", function(err){
// console.log("file is created") 
// console.log(err) // null ayega yha . Hai hi ni. 
// })


// fs.appendFile("pp/readme.txt", "    plz help me" , function(err){
//     console.log("done");
  
//   })


//   fs.readFile("pp/readme.txt", "UTF-8", function(err, data){
//     console.log(data)
//     })
    



// fs.mkdirSync("thapa")

// fs.writeFileSync("thapa/bio.txt", "my name is mohaktripathi")

// fs.appendFileSync("thapa/bio.txt", "hello my name is Rakesh")


// const data= fs.readFileSync("thapa/bio.txt", "utf-8") //encoding in 2nd parameter 
// console.log(data)


// fs.renameSync("thapa/bio.txt", "thapa/mybio.txt")


// fs.unlinkSync("thapa/mybio.txt")

// fs.rmdirSync("thapa")


//  fs.writeFileSync("readme.txt", "Welcome Mohak tripathi again")

// fs.appendFileSync("readme.txt", "   Welcome jumanji")


// const buf_data =  fs.readFileSync("readme.txt") 
// // console.log(buf_data)

// const org_data = buf_data.toString() 
// console.log(org_data) 

// fs.renameSync("readme.txt", "learn.txt")