"use Strict";

let userChoice;
let computerChoice;

const btn = document.querySelector("button");
const text = document.querySelector("h2");

const randomNr = Math.floor(Math.random() * 100) + 1;
console.log(randomNr);

btn.addEventListener("click", click_btn);

function click_btn() {}