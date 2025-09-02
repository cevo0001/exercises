const bc = [{ name: "Hvidevarer", link: "/hvidevarer" } ,{ name: " Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },{ name: " Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },];

document.querySelector("button").addEventListener("click", klik);
// lærer giver en ny funktion, der kan blive brugbar fremad:    // &nbsp; sætter mellemrum ind mellem teksten fast. 

function klik() {
  let str = "";

  bc.forEach((elm, index) => {
    // tilføj skråstreg kun hvis det IKKE er første element
    if (index > 0) {
      str += " / ";
    }

    // hvis det er sidste element -> ingen link
    if (index === bc.length - 1) {
      str += `${elm.name}`;
    } else {
      str += `<a href="${elm.link}">${elm.name}</a>`;
    }
  });

  document.querySelector("ul").innerHTML = str;
}
