const fs = require("fs")
var a = 10;
Promise.resolve().then(()=> {
    console.log("promise")
    console.log(a)
})


process.nextTick(() => {
    console.log("nextTick 1");
});

process.nextTick(() => {
    console.log("nextTick 2");
});

setImmediate(()=> {
    console.log("immediate time")
})

fs.readFile("./file.txt","utf8",()=> {
    console.log("filereading")
})

setTimeout(()=> {
    console.log ("timer")
})

function x() {
    console.log ("sync function")
}
x()

console.log ("lastcode")