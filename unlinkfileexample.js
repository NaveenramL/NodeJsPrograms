const fs = require('fs');

const dirPath = 'D:\\testing\\newDirectory\\myFile.txt';

fs.unlink(dirPath, (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('File Deleted Successfully!')
})