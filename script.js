//VARIABLES
var questionsFormElement = document.querySelector("form");
var startButton = document.querySelector("#start");
//var multipleChoice= document.querySelector("#multiple-choice") 
//console.log ({questionsFormElement, startButton});

var welcomeSection = document.querySelector("#welcome-page");

var currentQuestionIndex = 0;

var questionsList = [
  {
    numberkey: 1,
    questionTitle: "Commonly used data types do NOT include:",
    answersList: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
  },

  {
    numberkey: 2,
    questionTitle: "Arrays in JavaScript can be used to store ______.",
    answersList: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
  },

  {
    numberkey: 3,
    questionTitle: "The condition in an if/else statement is enclosed with _____.",
    answersList: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
  },

  {
    numberkey: 4,
    questionTitle: "String values must be enclosed within _____ when being assigned to variables.",
    answersList: ["1. commas", "2. curly brackets", "3. quotes", "4. paranthesis"],
  },

  {
    numberkey: 5,
    questionTitle: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answersList: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
  },
];
console.log (questionsList[0]);
//FUNTIONS

//start the quiz hides the start button and welcome message after click listed in event listeners
function startQuiz() {
  console.log("starting quiz");
  startButton.setAttribute("hidden", "true");
  welcomeSection.setAttribute("hidden", "true");
  return

}

function getNextQuestion() {            //question [0] in the questionsList
  console.log("getting next question", questionsList[currentQuestionIndex])
    var currentQuestion = questionsList[currentQuestionIndex]; console.log(currentQuestion);
    questionsFormElement.innerHTML=JSON.stringify(questionsList[0].questionTitle);
    //multipleChoice.append(questionsList[0].answersList);
    
    for (var i= 0; i < questionsList.length; i++) {
      
    }
  //for loop at very end of function (currentQuestion++)
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
}
);
questionsFormElement.addEventListener("click", (event) => {
    console.log(event.target);
    event.preventDefault();
    getNextQuestion();
}
) 






