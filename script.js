//VARIABLES
var questionsFormElement = document.querySelector("form");
var startButton = document.querySelector("#start");
var questionBody = document.querySelector("h2");
var answerOptions = document.querySelector("ul"); //accessing the array of answers withing questions list to display the multiple choice answers in the ul in the html (questionsList.answerList[0])
var welcomeSection = document.querySelector("#welcome-page");


var currentQuestionIndex = [0];

var questionsList = [
  {
    //[0]
    rightAnswer: 'c',
    questionText: "Commonly used data types do NOT include:",
    answersList: { a: "strings", b: "booleans", c: "alerts", d: "numbers",
  }}, //[0]       [1]         [2]         [3]

  {
    //[1]
    rightAnswer: "d",
    questionText: "Arrays in JavaScript can be used to store ______.",
    answersList: {
      a: "numbers and strings",b: "other arrays",c: "booleans", d: "all of the above"
    }
  },

  {
    //[2]
    rightAnswer: "c",
    questionText:
      "The condition in an if/else statement is enclosed with _____.",
    answersList: {a: "quotes", b: "curly brackets", c: "parenthesis", d: "square brackets",
  }
},

  {
    //[3]
    rightAnswer: "c",
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    answersList: {a:"commas", b:"curly brackets", c: "quotes", d: "paranthesis",
  }},

  {
    //[4]
    rightAnswer: "d",
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answersList: {a: "JavaScript", b: "terminal/bash", c: "for loops", d: "console.log"},
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
  var Answer1 = currentQuestion.answersList.a;
  var Answer2 = currentQuestion.answersList.b;
  var Answer3 = currentQuestion.answersList.c;
  var Answer4 = currentQuestion.answersList.d;
  if (startingQuiz === true) {
    questionBody.textContent= currentQuestion.questionText;
    var createLI = document.createElement("button");
    createLI.textContent = Answer1;
    answerOptions.appendChild(createLI);
    var createLI2 = document.createElement("button");
    createLI2.textContent = Answer2;
    answerOptions.appendChild(createLI2);
    var createLI3 = document.createElement("button");
    createLI3.textContent = Answer3;
    answerOptions.appendChild(createLI3);
    var createLI4 = document.createElement("button");
    createLI4.textContent = Answer4; 
    answerOptions.appendChild(createLI4);
  } else {
    return
  };
}

function compareAnswer() {
  console.log("your answer");
  var CorrectAnswser = questionsList.rightAnswer;
  console.log(CorrectAnswser);




}





  

  
  


  // for (var i =0, i < questionsList.answersList)


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

startButton.addEventListener("click", (event) => {console.log(event.target);
  event.preventDefault();
  startQuiz();
  countdown();
  //getNextQuestion();
  //showQuestion();
  //showMultipleChoice();
});

answerOptions.addEventListener("click", (event) =>
{console.log(event.target);
  event.preventDefault();
event.compareAnswer();
});

//questionBody.questionsList[0].questionText.setAttribute("hidden", "false");
// var questionQuestion= questionsList[0].questionText
//console.log(questionQuestion);
//questionBody.appendChild.questionQuestion;
//questionQuestion.setAttribute("hidden","false");
//questionBody.append.questionQuestion //
