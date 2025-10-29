/*     
     Ejercicio: friction
     Fecha: 22 de sept 2025
     Autor: JOHAN ARCHILA
*/


let mass = 14;
let friction = 25;
let normalForce;
let frictionForce;

//proceso

function calculateForce( mass, friction){
   normalForce = mass*9.1
   friction = normalForce*(friction/100);
}

calculateForce(mass,friction);

console.log("normalForce:" +normalForce);
console.log("frictionForce:" +frictionForce);


if(frictionForce >50){
console.log("the friction is high");
}

else {
console.log("the friction is low");
}

