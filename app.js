//require('./instantHello');//it will look into node_module folder


// var question = require('./talk/questions');

// var goodBye = require('./talk/goodBye');
// var talk = require('./talk');//it will look for index.js. Default behavior

// talk.intro();
// talk.hello('sharmava');

// var answer = question.ask("What is your purpose?"); //this is how we get specific exposed method from a node file.
// console.log("Answer : " + answer);

// goodBye();

var express = require('express');
var app = express();
var path = require('path');

app.set('port', 3000);

app.get('/', function (req, res) {
    console.log('GET home page');
    res
        .status(200)
        .sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/json', function (req, res) {
    console.log('GET the json');
    res
        .status(200)
        .json({ 'jsonData': true });
});

app.get('/file',function(req,res){
    console.log("GET the file");
    res
    .status(200)
    .sendFile(patha.join(__dirname,'app.js'));
});

var server = app.listen(app.get('port'),function(){
   var port = server.address().port;
   console.log('Magic happens on port '+ port);
});



