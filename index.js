// // require("./add.js")  // require() [function] is used to load modules into this file

// const addFunction = require("./add.js");

// const sum = addFunction(3, 4);

// console.log("Printing the addition of two numbers : " + sum);

// console.log("Hello World"); // displays whatever is given inside this console

const laptopBrand = require("./laptop");
console.log("Printing the laptop brand : "+laptopBrand.getName()); // here getting the laptop name

laptopBrand.setName("Sony"); // here setting the laptop name
console.log("Printing the laptop brand : "+laptopBrand.getName());

const newInstance = require("./laptop");
console.log("Printing the laptop brand : "+newInstance.getName());

const desktop = require("./desktop");

const firstDesktop = new desktop("Apple");
console.log("Printing the Desktop name : "+firstDesktop.getName());

const secondDesktop = new desktop("Microsoft");
console.log("Printing the secondDesktop name : "+secondDesktop.getName());