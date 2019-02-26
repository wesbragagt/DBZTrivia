$(document).ready(function() {
  populate();
  intervalId = setInterval(decrement, 1000);
});

// function check submit button
function check() {
  stop();
  var correct = 0;
  var incorrect = 0;
  var results = $("#results");
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

  // Populate the page with results

  results.append("<h2>" + "correct answers: " + correct + "</h2>");
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
    question: "Who Killed Frieza?",
    options: ["Gohan", "Raditz", "Vegeta", "Future Trunks"],
    correct: "Future Trunks"
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
