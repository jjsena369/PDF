/*     
     Ejercicio: ley newton movement
     Fecha: 23 de sept 2025
     Autor: JOHAN ARCHILA
*/

let force = 5;
let mass =3;
let speed =0;
let time = 1;
let secounds = 0;
let initialSpeed = 7;
let totalDistance = 0;
let acceleration = 0;

function calculateAceleration(force, mass) {
     return force / mass;
}


while(force>=0){
 acceleration = calculateAceleration(force, mass);
 speed = initialSpeed + acceleration*time;
 totalDistance = speed*time;
 secounds = secounds +1;
 force = force-1;

}

console.log("the totaldistance is :" +totalDistance);
console.log("the secounds is :" +secounds);
console.log("the speed is :" +speed);
console.log("the acceleration is :" +acceleration);
console.log("the force is :" +force);
console.log("the mass is :" +mass);



