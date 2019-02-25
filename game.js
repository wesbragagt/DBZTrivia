$(document).ready(function(){

intervalId = setInterval(decrement, 1000);

})

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