$(document).ready(function(){
setInterval(decrement, 1000);
})
var countdown = 30;
var intervalId;

function decrement(){
    countdown--;
    $("#time").html(countdown + "s");
    
}
function stop(){
    clearInterval(intervalId);
}