const {sum,multiply} = require("./calculate/index")
console.log (sum)
// console.log (imported)
// const name = 100;
// console.log (imported.x() + name)
// const app = "Hello"
var a = 10;
var b = 10;


console.log (sum(a,b))
console.log (multiply(a,b))

module.exports = {a,b}