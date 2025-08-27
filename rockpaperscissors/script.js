"use strict";
let userChoice;
let computerChoice;
// userChoice = hvad spilleren vælger (rock, paper eller scissors)
// computerChoice = hvad computeren vælger

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

rockBtn.addEventListener("click", () => {
  userChoice = "rock"; // Spilleren vælger rock
  computerGuess(); // Computeren gætter sit valg og animation starter
});

paperBtn.addEventListener("click", () => {
  userChoice = "paper";
  computerGuess();
});

scissorsBtn.addEventListener("click", () => {
  userChoice = "scissors";
  computerGuess();
});

function computerGuess() {
  const choice_arr = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  computerChoice = choice_arr[randomNum];
  console.log("randomNum", randomNum);
  console.log(userChoice);
  animationStart();
}

function animationStart() {
  player1.classList.add("shake"); 
  player2.classList.add("shake");

  
  player1.addEventListener("animationend", animationEnd);
  player2.addEventListener("animationend", animationEnd); // lytter efter slut og kalder animationend derefter
}

function animationEnd() {
  player1.classList.remove("shake"); 
  player2.classList.remove("shake");

  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");
  // sletter de tidligere valg fra begge players



  player1.classList.add(userChoice);
  player2.classList.add(computerChoice);  // viser players valg via userChoice og computerChoice


  const result = getResult(userChoice, computerChoice);  // tjekker hvem der vandt - getResult

  showResultScreen(result); // viser resultatet på skærmen (win/lose/draw) Skjuler alle resultater først
  // Viser kun det resultat, der passer med 'result'
}


function getResult()  { // Funktionen bestemmer hvad slutskærm viser. Hvis valg er det samme -> uafgjort
  // Hvis bruger vinder over computer -> win // Ellers -> lose
  if (userChoice === computerChoice) {
    return "draw"; 
  }
  if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
    return "win";
  }
  return "lose"; 
}


function showResultScreen(result) { 
  // Denne funktion viser kun det resultat, der passer med 'result'
  // Først skjuler vi alle resultatskærme (win, lose, draw)
  document.querySelector("#win").classList.add("hidden"); 
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");

  // Fjern 'hidden' fra den skærm, der matcher resultatet
  document.querySelector(`#${result}`).classList.remove("hidden");
}