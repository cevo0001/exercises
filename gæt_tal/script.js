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
 computerChoice();
}