var userPick;

var correctAnswer = 0;

var incorrectAnswer = 0;

var answerVal = 0;

var questionNum = 0;

var images;

var count = 30;

var popQuestions = [
  {
    question: "Who is the bad guy in Star Wars: A New Hope?",
    choices: ["Darth Vader", "Admiral Ahkbar", "Jar Jar Binks", "Yoda"],
    images: "./assets/images/vader.gif",
    validAnswer: 0
  },
  {
    question: "Testing",
    choices: ["12", "34", "56", "78"],
    validAnswer: 3
  }
];

$(".startButton").click(function() {
  $(this).hide();
  counter = setInterval(timer, 1000);
  displayTrivia();
});

function timer() {
  count--;
  $(".timer").html("Time remaining: " + "00:" + count + " secs");
  if(count <= 0){
      return;
  }
}

function displayTrivia() {
  $(".questionsDiv").html(popQuestions[questionNum].question);
  count = 30;

  var choicesArr = popQuestions[questionNum].choices;
  var buttonsArr = [];

  for (let i = 0; i < choicesArr.length; i++) {
    var button = $("<button>");
    button.text(choicesArr[i]);
    button.attr("data-id", i);
    $(".answersDiv").append(button);
  }

  answerVal = popQuestions[questionNum].validAnswer;
  console.log(questionNum);
  console.log(answerVal);
}

$(".answersDiv").on("click", "button", function(e) {
  userPick = $(this).data("id");
  popQuestions[questionNum].validAnswer;
  if (userPick != popQuestions[questionNum].validAnswer) {
    count = 10;
    timer();
    if (count <= 10) {
      $(".answersDiv").html("Wrong Answer! The correct answer is " + popQuestions[questionNum].choices[answerVal]+"<br><br><img src='"+popQuestions[questionNum].images+"'/>");
      $(".a")
    } else {
      questionNum++;
      incorrectAnswer++;
      displayTrivia();
    }
  } else if (userPick === popQuestions[questionNum].validAnswer) {
    $(".answersDiv").text(
      "Correct!!! The answer is " + popQuestions[questionNum].choices[answerVal]
    );
    questionNum++;
    correctAnswer++;
    displayTrivia();
  }
});
