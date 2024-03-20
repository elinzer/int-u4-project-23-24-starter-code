let startImage = document.querySelector(".image-start");
let h3 = document.querySelector("h3");
let allQuestions = document.querySelector(".questions");
let result = document.querySelector(".result");

// first question variables
let firstQuestion = document.querySelector(".question1")
let choice1 = document.querySelector(".choice1");
let choice2 = document.querySelector(".choice2");

//second question variables
let secondQuestion = document.querySelector(".question2")
let choice3 = document.querySelector(".choice3");
let choice4 = document.querySelector(".choice4");

//variables that store the users answers
let answer1;
let answer2;

startImage.addEventListener("click", function(){

  h3.style.display = "none";
  startImage.style.display = "none";
  allQuestions.style.display = "block";
  firstQuestion.style.display = "block";

})


choice1.addEventListener("click", function(){
  
  answer1 = 1;
  secondQuestion.scrollIntoView()
  

})

choice2.addEventListener("click", function(){

  answer1 = 2;
  secondQuestion.style.display = "block";

})

choice3.addEventListener("click", function(){

  answer2 = "friends";
  
  secondQuestion.style.display = "none";

})