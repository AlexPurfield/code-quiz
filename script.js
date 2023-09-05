//VARIABLES
var questionsFormElement = document.getElementById("#quiz-form");
var startButton = document.querySelector("#start");
var questionBody = document.querySelector("h2");
var answerOptions = document.querySelector("ul"); //accessing the array of answers withing questions list to display the multiple choice answers in the ul in the html (questionsList.answerList[0])
var welcomeSection = document.querySelector("#welcome-page");

var currentQuestionIndex = 0;

var userCorrect = 0; //number of correct answers
var userIncorrect = 0; //number of incorrect answers


var questionsList = [   //List of questions in an array var
  {
    //[0]
    rightAnswer: "alerts",
    questionText: "Commonly used data types do NOT include:",
    answersList: { 
      a: "strings",
      b: "booleans", 
      c: "alerts", 
      d: "numbers" }
  }, 

  {
    //[1]
    rightAnswer: "all of the above",
    questionText: "Arrays in JavaScript can be used to store ______.",
    answersList: {
      a: "numbers and strings",
      b: "other arrays",
      c: "booleans",
      d: "all of the above",
    }
  },

  {
    //[2]
    rightAnswer: "parenthesis",
    questionText:
      "The condition in an if/else statement is enclosed with _____.",
    answersList: {
      a: "quotes",
      b: "curly brackets",
      c: "parenthesis",
      d: "square brackets",
    }
  },

  {
    //[3]
    rightAnswer: "quotes",
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    answersList: {
      a: "commas",
      b: "curly brackets",
      c: "quotes",
      d: "paranthesis",
    }
  },

  {
    //[4]
    rightAnswer: "console.log",
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answersList: {
      a: "JavaScript",
      b: "terminal/bash",
      c: "for loops",
      d: "console.log",
    },
  },
];

//FUNTIONS

//start the quiz hides the start button and welcome message after click listed in event listeners
//displays first question with mc answers if the person presses the start quiz button
function startQuiz(event) {
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
    questionBody.textContent = currentQuestion.questionText;
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
    return;
  }
}

//compares the user answer to the correct answer and figures out if they're right or wrong

function compareAnswer(event) {
  console.log("your answer: " + event.target.textContent); 
  var correctAnswser = questionsList[currentQuestionIndex].rightAnswer;
  console.log("Correct Answser: " + correctAnswser);
  if (event.target.textContent === correctAnswser) {
    //Handle correct answer
    console.log("Correct!");
    userIncorrect++
  } else {
    //Handle incorrect answer
    console.log("Incorrect!");
    alert("Incorrect");
    userCorrect++
  }

  //Move to the next question
  currentQuestionIndex++;
  if (currentQuestionIndex < questionsList.length) {
    //Display the next question and answer options
    var currentQuestion = questionsList[currentQuestionIndex];
    questionBody.textContent = currentQuestion.questionText;
    answerOptions.innerHTML = ""; //Clear previous answer options
    var Answer1 = currentQuestion.answersList.a;
    var Answer2 = currentQuestion.answersList.b;
    var Answer3 = currentQuestion.answersList.c;
    var Answer4 = currentQuestion.answersList.d;

    var createButton1 = document.createElement("button");
    createButton1.textContent = Answer1;
    answerOptions.appendChild(createButton1);
    //... (create and append buttons for other answers)
    var createButton2= document.createElement("button");
    createButton2.textContent = Answer2;
    answerOptions.appendChild(createButton2);
    var createButton3 = document.createElement("button");
    createButton3.textContent= Answer3;
    answerOptions.appendChild(createButton3);
    var createButton4 = document.createElement("button");
    createButton4.textContent= Answer4;
    answerOptions.appendChild(createButton4);

  } else {
    //Quiz is over out of questions
    console.log("Quiz over!");
    window.alert(
      "Wrong Answers: " + userIncorrect + ";" + " Right Answers: " +userCorrect
     );
  }
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

var timerElement = document.querySelector("h3");

var secondsLeft = 60;

function setTime()  {
var timerInterval = setInterval(function()  {
  secondsLeft--;
  timerElement.textContent = secondsLeft + "seconds left in quiz";
  if(secondsLeft===0) {
    clearInterval(timerInterval);
    sendMessage("time is out");
    }

  }, 6000);
  
}

//timerElement.addEventListener("click", (event) => {
 // event.preventDefault();
  //setTime();
//});


//EVENT LISTENERS
//start quiz with click and begins timer countdown 
startButton.addEventListener("click", (event) => {
  event.preventDefault();
  setTime();
  startQuiz();
});


// shows answer options 
answerOptions.addEventListener("click", (event) => {
  event.preventDefault();
  compareAnswer(event);
});


