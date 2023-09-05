//VARIABLES
var questionsFormElement = document.querySelector("form");
var startButton = document.querySelector("#start");
var questionBody = document.querySelector("h2");
var answerOptions = document.querySelector("ul li"); //accessing the array of answers withing questions list to display the multiple choice answers in the ul in the html (questionsList.answerList[0])
var welcomeSection = document.querySelector("#welcome-page");
var createAnswerLIs = document.createElement.li;

var currentQuestionIndex = [0];

var questionsList = [
  {
    //[0]
    numberkey: 1,
    questionText: "Commonly used data types do NOT include:",
    answersList: ["strings", "booleans", "alerts", "numbers"],
  }, //[0]       [1]         [2]         [3]

  {
    //[1]
    numberkey: 2,
    questionText: "Arrays in JavaScript can be used to store ______.",
    answersList: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
  },

  {
    //[2]
    numberkey: 3,
    questionText:
      "The condition in an if/else statement is enclosed with _____.",
    answersList: ["quotes", "curly brackets", "parenthesis", "square brackets"],
  },

  {
    //[3]
    numberkey: 4,
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    answersList: ["commas", "curly brackets", "quotes", "paranthesis"],
  },

  {
    //[4]
    numberkey: 5,
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answersList: ["JavaScript", "terminal/bash", "for loops", "console.log"],
  },
];

//FUNTIONS

//start the quiz hides the start button and welcome message after click listed in event listeners
function startQuiz() {
  console.log("starting quiz");
  startButton.setAttribute("hidden", "true");
  welcomeSection.setAttribute("hidden", "true");
  var startingQuiz = confirm("are you ready to begin the quiz?");
  var currentQuestion = questionsList[currentQuestionIndex];
  var Answer1 = currentQuestion.answersList[0];
  var Answer2 = currentQuestion.answersList[1];
  var Answer3 = currentQuestion.answersList[2];
  var Answer4 = currentQuestion.answersList[3];
  if (startingQuiz === true) {
    var createH2 = document.createElement("h2");createH2.textContent= currentQuestion;
    document.body.appendChild(createH2);
    var createLI = document.createElement("li");
    createLI.textContent = Answer1;
    document.body.appendChild(createLI);
    var createLI2 = document.createElement("li");
    createLI2.textContent = Answer2;
    document.body.appendChild(createLI2);
    var createLI3 = document.createElement("li");
    createLI3.textContent = Answer3;
    document.body.appendChild(createLI3);
    var createLI4 = document.createElement("li");
    createLI4.textContent = Answer4; 
    document.body.appendChild(createLI4);
   
  }


  // for (var i =0, i < questionsList.answersList)
}

//answerButton.innerHTML=JSON.stringify(currentQuestion.answersList[0])
//multipleChoice.append(questionsList[0].answersList);

// for (var currentQuestion= 0; currentQuestion < questionsList.length; currentQuestion++) {

//for loop at very end of function (currentQuestion++)

//function showQuestion() {
  //console.log("showing question on page");
  //questionBody.append(questionsList[0].questionText);


//questionsList[0].questionText.setAttribute("hidden","false");
//for loop at very end of function (currentQuestion++)

//function showMultipleChoice() {
  //console.log("showing answer options on page");
  //answerOptions.append(questionsList[0].answersList[0]);
//}

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
  //getNextQuestion();
  //showQuestion();
  //showMultipleChoice();
});

//questionBody.questionsList[0].questionText.setAttribute("hidden", "false");
// var questionQuestion= questionsList[0].questionText
//console.log(questionQuestion);
//questionBody.appendChild.questionQuestion;
//questionQuestion.setAttribute("hidden","false");
//questionBody.append.questionQuestion //
