

const add = (a, b) => {  // this is a function i.e local module
    return a + b
};

module.exports = add; // here exporting the add function, so that we can import and use it in required files

// const result = add(2,3); // assigning the module output to a variable
// console.log("Printing the result : "+result);