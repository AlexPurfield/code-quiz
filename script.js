console.log("hello");

//VARIABLES
var questionsFormElement = document.querySelector("form");
var startButton = document.querySelector("#start");
//console.log ({questionsFormElement, startButton});

var welcomeSection = document.querySelector("#welcome-page");

var currentQuestionIndex = 0

var questionsList = [
  {
    numberkey: 1,
    questionTitle: "whats your name",
    answersList: ["a", "b", "c", "d"],
  },

  {
    numberkey: 1,
    questionTitle: "whats your name",
    answersList: ["a", "b", "c", "d"],
  },

  {
    numberkey: 1,
    questionTitle: "whats your name",
    answersList: ["a", "b", "c", "d"],
  },

  {
    numberkey: 1,
    questionTitle: "whats your name",
    answersList: ["a", "b", "c", "d"],
  },

  {
    numberkey: 1,
    questionTitle: "whats your name",
    answersList: ["a", "b", "c", "d"],
  },
];

//FUNTIONS

function startQuiz () {
    console.log("starting quiz");
    startButton.setAttribute("hidden", "true")

countdown()


}

function getNextQuestion () {
    console.log("getting next question",questionsList[currentQuestionIndex])
    var currentQuestion=questionsList[currentQuestionIndex]

    //for loop at very end of function (currentQuestion++)
}

function countdown () {
    setTimeout(() => {
    console.log ("quiz over");    
    }, 60000);
}

//EVENT LISTENERS

startButton.addEventListener("click", (event) => {
    console.log(event.target); 
    event.preventDefault()
    startQuiz()
})