//Initial variables to be used at start of game:
var currentQuestion = 0;
var score = 0;
var totalQuestions = question.length;

//Initial variables to be pulled from/pushed through HTML:
var quizEl = document.getElementById("quiz");
var questionEl = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var nextButton = document.getElementById("nextButton");
var resultEl = document.getElementById("result");

//to load the first Question:
function renderQuestion(questionIndex){
    var q = question[questionIndex];
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
    }

    //If the user's answers is correct (user answer is the same as the correct answer stored in question.js):
    var userAnswer = selectedOption.value;
    if(question[currentQuestion].answer === userAnswer){
        score += 10;
    }
    else{
        currentQuestion++;
    }

    //When user reaches the final question...
    if(currentQuestion === totalQuestions - 1){
        nextButton.textContent = "Finished!";
    }

    //When the quiz is completed
    if(currentQuestion === totalQuestions){
        container.style.display = "none";
        resultEl.style.display = " ";
        resultEl.textContent = "Your final score is " + score;
        return
    }

    renderQuestion(currentQuestion);
}

renderQuestion(currentQuestion);