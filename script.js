//VARIABLES
var questionsFormElement = document.querySelector("#quiz-form");
var startButton = document.getElementById("start");
var questionBody = document.querySelector("h2");
var answerOptions = document.querySelector("ul"); //accessing the array of answers withing questions list to display the multiple choice answers in the ul in the html (questionsList.answerList[0])
var welcomeSection = document.querySelector("#welcome-page");
var endQuiz = document.querySelector(".finished-quiz")

var submitButton = document.getElementById("submit-btn");
var FinalScore=document.querySelector("#score-percentage");

var currentQuestionIndex = 0;

var userCorrect = 0; //number of correct answers
var userIncorrect = 0; //number of incorrect answers

var initials = document.querySelector("#input-initials");


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
    userCorrect++

  } else {
    //Handle incorrect answer
    console.log("Incorrect!");
    alert("Incorrect");
    userIncorrect++;    
    secondsLeft= secondsLeft-10;
    timerElement.innerHTML=secondsLeft;
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
    endQuiz.style.display='block';
    //questionsFormElement.style.display='none';

    userCorrect.textContent=userCorrect;
    userIncorrect.textContent=userIncorrect;
    var totalAnswers = userCorrect + userIncorrect;
    console.log (totalAnswers);
    var userScoreFunc = userCorrect/totalAnswers*100;
    localStorage.setItem('score', JSON.stringify(userScoreFunc));
  
  
   
    FinalScore.textContent=userScoreFunc;
    console.log(userScoreFunc);
 
  
  }
}



var timerElement = document.querySelector("h3");

var secondsLeft = 60;


//set timer
function setTime()  {
var timerInterval = setInterval(function()  {
  secondsLeft--;
  timerElement.textContent = secondsLeft + " seconds left in quiz";
  if(secondsLeft===0) {
    clearInterval(timerInterval);
    console.log ("time is up and quiz is over");

    
    }

  }, 1000);
  
}
//save scores and initials to localstorage 
function saveHighscore() {
  userCorrect.textContent=userCorrect;
  userIncorrect.textContent=userIncorrect;
  var totalAnswers = userCorrect + userIncorrect;
  console.log (totalAnswers);
  var userScoreFunc = userCorrect/totalAnswers*100;
  localStorage.setItem('score', JSON.stringify(userScoreFunc));
  var initialsSave= initials.value
  console.log ( initialsSave);
  window.localStorage.setItem('Initials', JSON.stringify (initialsSave));

}



//EVENT LISTENERS
//start quiz with click and begins timer countdown

//start quiz and timer
if  (startButton) {
startButton.addEventListener("click", (event) => {          event.preventDefault();
  startQuiz();
  setTime();
});
}


// compare user answer to righ answer 
if (answerOptions)  {// shows answer options 
answerOptions.addEventListener("click", (event) => {
  event.preventDefault();
  compareAnswer(event);
  console.log ("getting answers");
  
  
});
}


// move to score board page after submit event listener
if (submitButton) {
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  saveHighscore();
  console.log ("You just submitted");
  if (submitButton) {
    (window.location.href = "highscores.html");
    
    }
});

}




