const bc = [{ name: "Hvidevarer", link: "/hvidevarer" },{ name: " Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },{ name: " Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },];



document.querySelector("button").addEventListener("click", klik);

function klik() {

    let str = "";
    // &nbsp; sætter mellemrum ind mellem teksten fast. 
    console.log(str);

    bc.forEach(elm =>{
        // console.log("elm", elm.name);
        str += `<a href="">${elm.name}</a>`
    });


    document.querySelector("ul").innerHTML = str;
}