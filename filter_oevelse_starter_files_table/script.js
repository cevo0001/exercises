// const vehicles = [
//   { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
//   { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
//   { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
//   { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
//   { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
//   { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
//   { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
//   { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
//   { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
//   { type: "Løbehjul", passengers: 1, isElectric: true },
// ];
// const tbodyPointer = document.querySelector("tbody");
// showTheseVehicles(vehicles);

// function showTheseVehicles(arr) {
//   arr.forEach((each) => {
//     tbodyPointer.innerHTML += `<tr>
//   <td>${each.type}</td>
//   <td>${each.fuel}</td>
//   <td>${each.passengers}</td> 
//   <td>${each.stops}</td>
//   <td>${each.ownedBy}</td>
//   <td>${each.isElectric}</td>
//   <td>${each.isTandem}</td>
// </tr>`;
//   });
// }



// --- Data med køretøjer ---
const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

// Peg på tabellen og feedback-feltet
const tbodyPointer = document.querySelector("tbody");
const feedbackPointer = document.querySelector("#feedback");

// Først vis alle køretøjer
showTheseVehicles(vehicles);

// --- Funktion til at vise køretøjer ---
function showTheseVehicles(arr) {
  // Rydder gammel tabel hver gang
  tbodyPointer.innerHTML = "";

  // Hvis filteret giver et tomt array, vis feedback
  if (arr.length === 0) {
    feedbackPointer.textContent = "Ingen køretøjer matcher filteret 🚫";
    return;
  } else {
    feedbackPointer.textContent = `Viser ${arr.length} køretøjer`;
  }

  // Gennemgå arrayet og lav rækker
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `
      <tr>
        <td>${each.type ?? ""}</td>
        <td>${each.fuel ?? ""}</td>
        <td>${each.passengers ?? ""}</td>
        <td>${each.stops ? each.stops.join(", ") : ""}</td>
        <td>${each.ownedBy ?? ""}</td>
        <td>${each.isElectric ? "⚡ Ja" : "Nej"}</td>
        <td>${each.isTandem ? "👫 Ja" : "Nej"}</td>
      </tr>
    `;
  });
}

// --- Filtreringer ---
// 1. El-drevne
document.querySelector("#electricVehicles").addEventListener("click", () => {
  const result = vehicles.filter(v => v.isElectric === true);
  showTheseVehicles(result);
});

// 2. Mere end 2 sæder
document.querySelector("#moreThanTwoSeats").addEventListener("click", () => {
  const result = vehicles.filter(v => v.passengers > 2);
  showTheseVehicles(result);
});

// 3. El-drevne ejet af Jonas
document.querySelector("#electricOwnedByJonas").addEventListener("click", () => {
  const result = vehicles.filter(v => v.isElectric === true && v.ownedBy === "Jonas");
  showTheseVehicles(result);
});

// 4. Rugbrøds-drevne med plads til mere end 1
document.querySelector("#rugbrodMoreThanOne").addEventListener("click", () => {
  const result = vehicles.filter(v => v.fuel === "Rugbrød" && v.passengers > 1);
  showTheseVehicles(result);
});

// 5. Vis alle
document.querySelector("#showAll").addEventListener("click", () => {
  showTheseVehicles(vehicles);
});



