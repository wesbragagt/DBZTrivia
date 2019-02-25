$(document).ready(function(){

// intervalId = setInterval(decrement, 1000);

})

// TRIVIA, create an array with all the questions that are going to be used

var trivia = {
    questions:[
        "What's Goku's real name?", 
        "Who is the first DBZ fighter to turn Super Sayian 2?"
    ],
    answer: ["Kakarot", "Gohan"]

}





// GLOBAL TIME COUNTDOWN
var countdown = 30;
var intervalId;

function decrement(){
    countdown--;
    $("#time").html(countdown + "s");

    if(countdown == 0){
        stop();
        check();
    }
    
}
function stop(){
    clearInterval(intervalId);
}

function check(){
    stop();
    alert("results");

}