// Et array (liste) med alle "brødkrummerne" på din side.
// Hvert element har et "name" (det man ser på skærmen)
// og et "link" (hvor man kommer hen, hvis man klikker).
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

// Finder <button> i HTML og siger: "Når der bliver klikket på den,
// så skal funktionen 'klik()' køre."
document.querySelector("button").addEventListener("click", klik);

// Funktionen der bygger breadcrumb-stien
function klik() {
  // Starter med en tom streng (her skal vi samle HTML'en op i)
  let str = "";

  // .forEach går igennem hvert element i arrayet "bc"
  // elm = selve elementet (fx {name: "Hvidevarer", link: "/hvidevarer"})
  // index = nummeret på elementet (0 = første, 1 = andet, 2 = tredje osv.)
  bc.forEach((elm, index) => {
    // Hvis det IKKE er det første element (index > 0),
    // så tilføjer vi en " / " foran.
    // Det gør at vi får: Hvidevarer / Vaskemaskiner / Bosch
    // og ikke: / Hvidevarer / Vaskemaskiner / Bosch
    if (index > 0) {
      str += " / ";
    }

    // Hvis vi er på DET SIDSTE element i arrayet (altså index === længden af array - 1),
    // så laver vi det KUN som tekst (ingen link).
    if (index === bc.length - 1) {
      str += `${elm.name}`;
    } else {
      // Hvis det IKKE er det sidste, så laver vi det som et klikbart link <a>.
      // Her bruger vi elm.link som href og elm.name som tekst.
      str += `<a href="${elm.link}">${elm.name}</a>`;
    }
  });

  // Når forEach er færdig, har vi bygget en færdig streng med breadcrumb-stien.
  // Den indsætter vi i <ul> i HTML'en.
  document.querySelector("ul").innerHTML = str;
}
