//Initial variables to be used at start of game:
var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

//Initial variables to be pulled from/pushed through HTML:
var quizEl = document.getElementById("quiz");
var questionEl = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var nextButton = document.getElementById("nextButton");
var resultEl = document.getElementById("result");

