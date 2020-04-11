//Initial variables to be used at start of game:
var currentQuestion = 0;
var score = 0;
var highScore = 0;
var totalQuestions = questions.length;

//Initial variables to be pulled from/pushed through HTML:
var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
var quizEl = document.getElementById("quiz");
var questionEl = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var nextButton = document.getElementById("nextButton");
var resultEl = document.getElementById("result");
var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");

nextButton.addEventListener('click', renderNextQuestion)


//to load the first question:
function renderQuestion(questionIndex){
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + ". " + q.question;
    option1.textContent = q.option1;
    option2.textContent = q.option2;
    option3.textContent = q.option3;
    option4.textContent = q.option4;
};

//to load following questions and continue through the quiz:
function renderNextQuestion(){
    //If the user selects no answer:
    var selectedOption = document.querySelector("input[type=radio]:checked");
    if(!selectedOption){
        alert("Please select an answer!");
        return;
    };

    //If the user's answers is correct (user answer is the same as the correct answer stored in question.js):
    var userAnswer = selectedOption.value;
    console.log(questions[currentQuestion].correct)
    console.log(userAnswer)
    if(questions[currentQuestion].correct === userAnswer){
        alert("correct answer!")
        score += 10;
        console.log(score);
        currentQuestion++;

    }
    else{
        alert("this answer is incorrect. The correct answer is: " + questions[currentQuestion].correct + ".");
        currentQuestion++;
    };

    //When user reaches the final question...
    if(currentQuestion === totalQuestions - 1){
        nextButton.textContent = "Finished!";
    };

    //When the quiz is completed
    var displayScore;

    if(currentQuestion === totalQuestions){
        quizEl.style.display = "none";
        resultEl.style.display = "block";
        displayScore = document.createElement("h1");
        displayScore.textContent = "Your final score is " + score;
        resultEl.append(displayScore);
        alert("Your final score is: " + score + " out of 100!"); //stil have to figure out how to display the final score on the screen. This is a stopgap
        return
    };

    renderQuestion(currentQuestion);
};

renderQuestion(currentQuestion);

//countdown timer:
var total_seconds = 60;
var countdown_minutes = parseInt(total_seconds/60);
var countdown_seconds = parseInt(total_seconds%60);

function setTime(){
    document.getElementById("main").innerHTML= "Time Left: " + countdown_minutes + " minutes " + countdown_seconds + " seconds ";

    if (total_seconds <= 0){
        setTimeout();
    }

    else {
        total_seconds = total_seconds - 1;
        countdown_minutes = parseInt(total_seconds/60);
        countdown_seconds = parseInt(total_seconds%60);
        setTimeout("setTime()", 1000);
    }
setTimeout("setTime()", 1000)
}

// function setTime (){
//     var countdownTimer = setInterval(
        
//         function(){
//         secondsLeft--;
//         timerEl.textContent = secondsLeft + " seconds left.";


//         if(secondsLeft === 0){
//             clearInterval(countdownTimer);

//         }

//     }, 1000);
// };

//to store user score info to local storage
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

var numOfHighScores = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = event => {
  console.log("clicked the save button!");
  event.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value
  };
  highScores.push(score);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
};


