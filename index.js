// require("./add.js")  // require() [function] is used to load modules into this file

const addFunction = require("./add.js");

const sum = addFunction(3, 4);

console.log("Printing the addition of two numbers : " + sum);

console.log("Hello World"); // displays whatever is given inside this console