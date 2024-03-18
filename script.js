let firstQuestion = document.querySelector(".question1")
let choice1 = document.querySelector(".choice1");
let choice2 = document.querySelector(".choice2");

let secondQuestion = document.querySelector(".question2")


let answer1;
let answer2;


choice1.addEventListener("click", function(){
  
  answer1 = 1;
  firstQuestion.style.display = "none";
  secondQuestion.style.display = "block";
  
})

choice2.addEventListener("click", function(){

  answer1 = 2;
  firstQuestion.style.display = "none";
  secondQuestion.style.display = "block";

})