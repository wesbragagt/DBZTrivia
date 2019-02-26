$(document).ready(function(){
populate();
// intervalId = setInterval(decrement, 1000);

})

// TRIVIA, create an array with all the questions that are going to be used

// var trivia = {
//     questions:[
//         "What's Goku's real name?", 
//         "Who is the first DBZ fighter to turn Super Sayian 2?"
//     ],
//     answer: ["Kakarot", "Gohan"]

// }

var trivia = [
    {
        question: "What's Goku's real name?",
        options: ["Kakarot", "Gohan", "Bardock", "Trunks"],
        correct: "Kakarot"
    }

    
];

function populate(){
    for(var i = 0; i < trivia.questions.length;i++){
        var convertI = (i+1).toString();
        var questionNumber = "question" + convertI;
        
        var h2 = $("<h2/>").addClass("question").attr("id", questionNumber);
        h2.text(convertI+". " + trivia.questions[i]);
        $("#quiz").append(h2);  
        
        
    }
    // trivia.questions.forEach(function(index, value){
    //     var questionNumber = "question" + (value+1);
        
    //     for(var i = 0; i < 4; i++){
    //         // var convertI = (i+1).toString();
    //         // var questionNumber = "question" + convertI;
    //         var textInput = trivia.answerChoice.question1[i];
    //         console.log(textInput);
            
    //         var input = $("<input type='radio'/>").addClass("options").attr({name: questionNumber});
    //         input.text(textInput);
    //         $("#" + questionNumber).append(input);
    //         console.log(input);
            
            
    //     }
    // })

    
    
    
    
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