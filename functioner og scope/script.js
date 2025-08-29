"use strict";

let myVarGlob;

upDateFinn("Finn");

function upDateFinn(name){

    let myVar= name
    
    myVarGlob = myVar;

    myVar += " er flink";  //myVar = myVar + "er flink"

}

 console.log(myVarGlob);