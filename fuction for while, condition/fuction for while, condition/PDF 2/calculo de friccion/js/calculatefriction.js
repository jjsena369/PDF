/*     
    Ejercicio: calculate friction
    Fecha: 25 de sept 2025
    Autor: JOHAN ARCHILA
*/


let coefficientFriction =5;
let numberObject = 3;
let mass = 12;
let gravity = 9.8;



//proceso
function calculateNormalForce(mass, gravity){
    return mass * gravity;
}

function calculateForceFriction(coefficientFriction, normalForce){
    return coefficientFriction * normalForce;
}

for (let i = 1; i <= numberObject; i++) {
    let normalForce = calculateNormalForce(mass, gravity);
    let forceFriction = calculateForceFriction(coefficientFriction, normalForce); 


    console.log("the normalForce is :" +normalForce);
    console.log("the forceFriction is :" +forceFriction);
    console.log("Object #" + i);
}


