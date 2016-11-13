var fs = require('fs'); // node's file system module is used for reading files from file system

console.log('Going to get a file');

var file = fs.readFileSync('readFileSync.js');

console.log('Got the file');

console.log('App continues.....');
