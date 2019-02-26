$(document).ready(function(){
populate();
// intervalId = setInterval(decrement, 1000);

})

// TRIVIA, create an array with an object and all the questions that are going to be used


var trivia = [
    {
        question: "What's Goku's real name?",
        options: ["Kakarot", "Gohan", "Bardock", "Trunks"],
        correct: "Kakarot"
    },

    {
        question: "Which Android did Vegeta kill?",
        options: ["Android 17", "Android 18", "Android 20", "Android 16"],
        correct: "Android 20"
    },

    {
        question: "Who Killed Frieza?",
        options: ["Gohan", "Raditz", "Vegeta", "Future Trunks"]
    }

    
];

function populate(){
    for(var i = 0; i < trivia.length;i++){
        var convertI = (i+1).toString();
        var questionId = "question" + convertI;
        console.log(questionId);
        
        // QUESTION
        var h2 = $("<h2/>").attr({id: questionId, class: "question"});
        h2.text(convertI+". " + trivia[i].question);
        $("#quiz").append(h2);
        
        var newDivId = "div" + convertI;

        var newDiv = $("<div class = 'options'/>").attr("id", newDivId);
        $("#" + questionId).after(newDiv);
        
        
        // INPUTS
        for(var j = 0; j < trivia[i].options.length; j++){
            var convertJ = (j+1);
            var inputId = "input" + convertJ;
            var labelId = "label" + convertJ;
            
            
            var label = $("<label class = 'label'>").attr({for: questionId, name: questionId, id: labelId}).text(trivia[i].options[j]);
            
            label.text(trivia[i].options[j]);
            $("#"+ newDivId).append(label);

            var input = $("<input class= 'input' type = 'radio'/>").attr({name: questionId, value: trivia[i].options[j]});
            $("#" + newDivId).append(input);
            
            // console.log(label);
            // console.log(input);
            
            
        }
        
        
        
        
        
        
        
        
        
        
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