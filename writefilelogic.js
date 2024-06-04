const fs = require('fs');

const dataToBeWritten = "Hi,this is newFile.txt"; // data to be written into the newly created file

const dirPath = 'D:\\testing\\newDirectory\\myFile.txt';  // directory path along with the fileName with extension

fs.writeFile(dirPath, dataToBeWritten, {flag: 'a'}, (err)=> {
    if(err){
        console.log(err);
        return;
    } else {
    	console.log('Writen to file successfully!');
    }
})