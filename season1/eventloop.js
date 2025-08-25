const fs = require("fs")
var a = 10;

setImmediate(()=> {
    console.log("immediate time")
    console.log(a)
})

fs.readFile("./file.txt","utf8",()=> {
    console.log("filereading")
})

setTimeout(()=> {
    console.log ("timer")
})

console.log ("lastcode")