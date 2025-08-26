"use strict";

const btn = document.querySelector("button");
const inpt = document.querySelector("input");
const text = document.querySelector("h2");

const randomNr = Math.floor(Math.random() * 100) + 1;
let userGuess;

btn.addEventListener("click", click_btn);
/*btn.addEventListener("keypress", click_btn, function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    
    document.addEventListener("btn").click();
  }
});*/

function click_btn() {
  userGuess = inpt.value;
  console.log("click");
  console.log("userGuess");
  let feedBack;
  if (userGuess < randomNr) {
    feedBack = "that's not right, try a higher number!";
  } else if (userGuess > randomNr) {
    feedBack = "try again! maybe a lower number?";
  } else {
    feedBack = "correct:)";
  }
  console.log(feedBack);
  text.innerText = feedBack;
}