var fs = require('fs'); // node's file system module is used for reading files from file system

console.log('Going to get a file');

fs.readFile('readFileAsync.js', function (err, file) {
    console.log('Got the file :'+ file);
});

console.log('App continues.....');