var answer = "That is a good question";

module.exports.ask = function (question) { //exposing specific method 
    console.log("Question : " + question);
    return answer;
}