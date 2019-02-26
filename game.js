$(document).ready(function() {
  populate();
  intervalId = setInterval(decrement, 1000);
});

// function check submit button
function check() {
  stop();
  var correct = 0;
  var incorrect = 0;
  var results = $("#game");
  // array of select choices
  var selected = [];

  // loop through all inputs which were selected and return a value for them
  $("input:checked").each(function() {
    selected.push($(this).val());
  });

  // loop which will check a number of questions amount of time for matching selections with the correct answers
  for (var i = 0; i < trivia.length; i++) {
    if (selected[i] === trivia[i].correct) {
      correct++;
    } else {
      incorrect++;
    }
  }

  // Populate the page with results and an image

  results.html("<h2>" + "correct answers: " + correct + "</h2>");
  $(
    "<img src = 'https://media.giphy.com/media/D1SBnJEaUdZIc/giphy.gif'>"
  ).appendTo(results);
  //   results.append("<h2>" + "incorrect: " + incorrect + "</h2>");
}

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
    options: ["Gohan", "Raditz", "Vegeta", "Future Trunks"],
    correct: "Future Trunks"
  },

  {
    question: "What's the name of Goku and Vegeta potara fusion?",
    options: ["Gogeta", "Gotenks", "Vegigo", "Vegito"],
    correct: "Vegito"
  },

  {
    question: "What planet is Piccolo's race from?",
    options: ["Earth", "Mars", "Namek", "Vegeta"],
    correct: "Namek"
  },

  {
    question:
      "What technique did Goku used to overpower Vegeta in their first fight?",
    options: ["Hadouken", "Kamehameha", "Kaiokenx10", "Fusion"],
    correct: "Kaiokenx10"
  },

  {
    question: "What item is used to recover a Z fighter to their full health?",
    options: ["kaikotsu no kima", "senzu beans", "soda", "strawberry"],
    correct: "senzu beans"
  },

  {
    question: "Which Super Sayian form was able to rival Majin Boo's power?",
    options: [
      "Super Sayian 2",
      "Super Sayian Blue",
      "Super Sayian 3",
      "Super Sayian 4"
    ],
    correct: "Super Sayian 3"
  },

  {
    question: "Which author created Dragon Ball Z?",
    options: ["Makoto Shinkay", "Rintaro", "Akira Toryama", "Hiromu Arakawa"],
    correct: "Akira Toryama"
  },

  {
    question: "Who is Goku's best friend?",
    options: ["Gohan", "Vegeta", "Krillin", "Piccolo"],
    correct: "Krillin"
  }
];
// populate the screen with questions and their options to pick
function populate() {
  for (var i = 0; i < trivia.length; i++) {
    var convertI = (i + 1).toString();
    var questionId = "question" + convertI;

    // QUESTION
    var h2 = $("<h2/>").attr({ id: questionId, class: "question" });
    h2.text(convertI + ". " + trivia[i].question);
    $("#quiz").append(h2);

    // DIV WHICH I WILL HAVE MY OPTIONS NESTED
    var newDivId = "div" + convertI;

    var newDiv = $("<div class = 'options'/>").attr("id", newDivId);
    $("#" + questionId).after(newDiv);

    // LABELS AND INPUTS
    for (var j = 0; j < trivia[i].options.length; j++) {
      var convertJ = j + 1;
      var inputId = "input" + convertJ;
      var labelId = "label" + convertJ;

      var label = $("<label class = 'label'>")
        .attr({ for: questionId, name: labelId, id: labelId })
        .text(trivia[i].options[j]);

      label.text(trivia[i].options[j]);
      $("#" + newDivId).append(label);

      var input = $("<input class= 'input' type = 'radio'/>").attr({
        name: questionId,
        value: trivia[i].options[j]
      });
      $("#" + newDivId).append(input);
    }
  }
}

// GLOBAL TIME COUNTDOWN
var countdown = 100;
var intervalId;

function decrement() {
  countdown--;
  $("#time").html(countdown + "s");

  if (countdown == 0) {
    stop();
    check();
  }
}
function stop() {
  clearInterval(intervalId);
}
