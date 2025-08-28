
"use strict"; // Tvinger JavaScript til at være strengere. Hjælper med at fange fejl tidligt, fx stavefejl i variabelnavne.

let userChoice;     // Vi behøver denne ikke i denne version, men kunne bruges hvis vi ville gemme brugerens tal
let computerChoice; // Samme her, men ikke brugt. Kan evt. fjernes for simplificering

// Her definerer vi computerens "logiske interval"
// low = laveste mulige tal computer tror det kan være
// high = højeste mulige tal computer tror det kan være
// guess = computerens aktuelle gæt
// attempts = tæller hvor mange gæt computeren har lavet
let low = 0;
let high = 100;
let guess;
let attempts = 0;

// Vi henter HTML-elementer, så vi kan manipulere dem
const text = document.querySelector("h2"); // Her skriver vi computerens gæt ud
const btnLow = document.querySelector(".btn1"); // Knappen: gæt var for højt
const btnCorrect = document.querySelector(".btn2"); // Knappen: gæt var korrekt
const btnHigh = document.querySelector(".btn3"); // Knappen: gæt var for lavt
const btnStart = document.querySelector(".btn4"); // Knappen: start spillet

// Før spillet starter: de tre “gæt-knapper” skal være deaktiveret
// så brugeren kun kan starte spillet først
btnLow.disabled = true;
btnCorrect.disabled = true; 
btnHigh.disabled = true;

// Vi fortæller hver knap hvad den skal gøre, når der klikkes på den
btnStart.addEventListener("click", startGame);    // Start spillet
btnLow.addEventListener("click", guessLow);      // Gæt var for højt
btnHigh.addEventListener("click", guessHigh);    // Gæt var for lavt
btnCorrect.addEventListener("click", guessCorrect); // Gæt var korrekt

// --------------------------------------------------
// Funktion: startGame
// Dette kaldes når man trykker på "Start guessing!"
// 1. Nulstiller intervallet (low og high) til hele 0-100
// 2. Sætter attempts = 0, fordi vi starter forfra
// 3. Kalder nextGuess() for at lave computerens første gæt
// 4. Deaktiverer Start-knappen, så man ikke kan trykke igen midt i spil
// 5. Aktiverer de tre gæt-knapper, så brugeren kan give feedback
function startGame() {
    low = 0;
    high = 100;
    attempts = 0;
    nextGuess();
    btnStart.disabled = true;
    btnLow.disabled = false;
    btnCorrect.disabled = false;
    btnHigh.disabled = false;
}

// --------------------------------------------------
// Funktion: nextGuess
// Beregner computerens næste gæt
// Strategi: altid gætte midten af intervallet (low → high)
// Dette sikrer, at computer gætter så hurtigt som muligt
// Øger attempt-tælleren med 1
// Skriver gættet ud på siden
function nextGuess() {
    guess = Math.floor((low + high) / 2); // Midtpunktet af intervallet
    attempts++; // Tæller antal gæt
    text.textContent = `is this the right number ${guess}?? :P`; // Skriver gæt ud
}

// --------------------------------------------------
// Funktion: guessLow
// Brugeren siger “for højt”
// Justerer interval: alt over guess kan fjernes
// Kalder nextGuess() for at lave nyt gæt
function guessLow() {
    high = guess - 1; // Nyt højeste tal = gæt - 1
    nextGuess();
}

// Funktion: guessHigh
// Brugeren siger “for lavt”
// Justerer interval: alt under guess kan fjernes
// Kalder nextGuess() for at lave nyt gæt
function guessHigh() {
    low = guess + 1; // Nyt laveste tal = gæt + 1
    nextGuess();
}

// Funktion: guessCorrect
// Brugeren siger “korrekt”
// Skriver resultatet med antal forsøg
// Deaktiverer gæt-knapperne, så spillet stopper
// Aktiverer start-knappen igen, så man kan spille igen
function guessCorrect() {
    text.textContent = `yay! I guessed your number ${guess} in ${attempts} attempts!`;
    btnStart.disabled = false; // Start igen
    btnLow.disabled = true;    // Deaktiver gæt-knapper
    btnCorrect.disabled = true; 
    btnHigh.disabled = true;
}
