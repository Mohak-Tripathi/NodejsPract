const fs= require('fs');

//  fs.writeFileSync("readme.txt", "Welcome Mohak tripathi again")

// fs.appendFileSync("readme.txt", "   Welcome jumanji")


// const buf_data =  fs.readFileSync("readme.txt") 
// // console.log(buf_data)

// const org_data = buf_data.toString() 
// console.log(org_data) 

fs.renameSync("readme.txt", "learn.txt")