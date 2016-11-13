require('./instantHello');//it will look into node_module folder


var question = require('./talk/questions');

var goodBye = require('./talk/goodBye');
var talk = require('./talk');//it will look for index.js. Default behavior

talk.intro();
talk.hello('sharmava');

var answer = question.ask("What is your purpose?"); //this is how we get specific exposed method from a node file.
console.log("Answer : " + answer);

goodBye();