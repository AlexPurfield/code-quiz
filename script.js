//VARIABLES
var questionsFormElement = document.querySelector("form");
var startButton = document.querySelector("#start");
var questionBody = document.querySelector(".show-question");
var answerOptions= document.querySelector(".answers-list"); //accessing the array of answers withing questions list to display the multiple choice answers in the ul in the html (questionsList.answerList[0])



//var multipleChoice= document.querySelector("#multiple-choice") 
//console.log ({questionsFormElement, startButton});

var welcomeSection = document.querySelector("#welcome-page");

var currentQuestionIndex = 0;

var questionsList = [
  { //[0]
    numberkey: 1,
    questionText: "Commonly used data types do NOT include:",
    answersList: ["strings", "booleans", "alerts", "numbers"],
  },                //[0]       [1]         [2]         [3]

  { //[1]
    numberkey: 2,
    questionText: "Arrays in JavaScript can be used to store ______.",
    answersList: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
  },

  {//[2]
    numberkey: 3,
    questionText: "The condition in an if/else statement is enclosed with _____.",
    answersList: ["quotes", "curly brackets", "parenthesis", "square brackets"],
  },

  { //[3]
    numberkey: 4,
    questionText: "String values must be enclosed within _____ when being assigned to variables.",
    answersList: [ "commas", "curly brackets", "quotes", "paranthesis"],
  },

  { //[4]
    numberkey: 5,
    questionText: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answersList: ["JavaScript", "terminal/bash", "for loops", "console.log"],
  },
];
console.log (questionsList[0]);
//FUNTIONS

//start the quiz hides the start button and welcome message after click listed in event listeners
function startQuiz() {
  console.log("starting quiz");
  startButton.setAttribute("hidden", "true");
  welcomeSection.setAttribute("hidden", "true");

//
  return

}

function getNextQuestion() {            //question [0] in the questionsList
  console.log("getting next question", questionsList[currentQuestionIndex])
    var currentQuestion = questionsList[currentQuestionIndex]; 

    //answerButton.innerHTML=JSON.stringify(currentQuestion.answersList[0])
    //multipleChoice.append(questionsList[0].answersList);
    
    for (var currentQuestion= 0; currentQuestion < questionsList.length; currentQuestion++) {
      
    }
  //for loop at very end of function (currentQuestion++)
return}

function showQuestion() {
    console.log("showing question on page");
    numberkey(questionsList[0]).setAttribute("hidden","false");
}

function showMultipleChoice() {


}


function countdown() {
  setTimeout(() => {
    console.log("quiz over");
  }, 60000);
}



//EVENT LISTENERS

startButton.addEventListener("click", (event) => {
  console.log(event.target);
  event.preventDefault();
  startQuiz();
  getNextQuestion();
  showQuestion();
}
);










