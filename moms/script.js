"use strict";


function calculateMoms(beloeb, moms = 25) {
  let total = beloeb + (beloeb * moms / 100);
  console.log(total);
}

calculateMoms(100);       // 125 (fordi moms = default 25%)
calculateMoms(200, 10);   // 220 (fordi moms = 10%, de 10 er procent moms den skal regne i stedet for 25 og man kan se at parameter rækkefølgen bestemmer at moms er til sidst)

