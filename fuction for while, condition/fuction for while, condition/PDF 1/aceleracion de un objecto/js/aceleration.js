/*     
    Ejercicio: aceleration
    Fecha: 10 de oct 2025
    Autor: Johan ARCHILA
*/


let mass = 12;
let appliedForce = 19;

function calculateAcceleration(mass, appliedForce) {
    let acceleration = appliedForce * mass;
    return acceleration;
}

let acceleration = calculateAcceleration(mass, appliedForce);
console.log("La aceleracion es de: " + acceleration  )