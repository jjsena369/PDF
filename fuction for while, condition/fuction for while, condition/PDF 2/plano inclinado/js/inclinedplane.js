/*
    Titulo: Inclined Plane
    Autor:JOHAN ARCHILA
    Fecha: 28 de septiembre de 2025
*/

let parallelForce
let mass = 5
let gravity = 9.8
let angle
let angleinitial = 50 * Math.PI / 180
let finalAngle = 80 * Math.PI / 180; 
let Increment = 3 * Math.PI / 180;

//Process

function calculateParallelForce(mass, gravity, angle) {
    return mass * gravity * Math.sin(angle);

}

for (angle = angleinitial; angle <= finalAngle; angle += Increment) {
    parallelForce = calculateParallelForce(mass, gravity, angle);
    console.log("The parallel force is " + parallelForce.toFixed(2) + " N" +
                " for an angle of " + (angle * 180 / Math.PI).toFixed(0) + " °");
}