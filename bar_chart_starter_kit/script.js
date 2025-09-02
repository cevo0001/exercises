import getRandomNum from "./utils.js";

const list = document.querySelector("ul");

setInterval(generateStat, 1000);

const stats = [];

function generateStat() {
console.log("GeneratStat");

const li = document.createElement("li");
const randomNum = getRandomNum(100);
stats.push(randomNum);
list.style.setProperty("--height", randomNum);
list.appendChild(li);
console.log(stats);

if (stats.length >= 21) {
    stats.shift();
}

}