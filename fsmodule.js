// Import fs module
const fs = require('fs');

const dirPath = 'D:\\testing\\newDirectory';

if (!fs.existsSync(dirPath)) { // here it checks if the directory to be created is already exists or not
    // Create the directory
    fs.mkdir(dirPath, { recursive: true }, (err) => { // if not then newDirectory will be created
        if (err) {
            return console.error(`Error creating directory: ${err.message}`);
        }
        console.log('Directory created successfully!');
    });
} else {
    console.log('Directory already exists.'); //  if the directory already exists it will print this message
}
