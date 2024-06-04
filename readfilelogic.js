const fs = require('fs');

const dirPath = 'D:\\testing\\newDirectory\\myFile.txt';  // directory path along with the fileName with extension

fs.readFile(dirPath, {encoding: 'utf-8'}, (err, data) => { // here we need to specify the second parameter with required encoding
    if(err){
    	console.log(err);
        return;
    } else {
    	console.log('File read successfully! Here is the data'); // here we print a success message
        console.log(data); // here we print the read data from the file
    }
})