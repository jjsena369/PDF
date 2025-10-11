let mass = 12;
let appliedForce = 19;

function calculateAcceleration(mass, appliedForce) {
    let acceleration = appliedForce * mass;
    return acceleration;
}

let acceleration = calculateAcceleration(mass, appliedForce);
console.log("La aceleracion es de: " + acceleration + ".");