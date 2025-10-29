/*     
     Ejercicio: Gravitational potential energy
     Fecha: 23 de sept 2025
     Autor: JOHAN ARCHILA
*/


let mass = 15;
let gravitionalPotencialEnergy;
let gravity = 9.81;
let high =12;
let totalGravitionalPotencialEnergy = 0;
let counter = 0;


//proceso

function calculateGravitationalPotentialEnergy(mass, gravity, high) {
   return mass * gravity * high;
}

while( high > 0){
   gravitionalPotencialEnergy = calculateGravitationalPotentialEnergy(mass, gravity, high);
   totalGravitionalPotencialEnergy =totalGravitionalPotencialEnergy + gravitionalPotencialEnergy;
   counter= counter +1; 
   high=high-1;

}
//imprimer

console.log("the total  :" +totalGravitionalPotencialEnergy);
console.log("the counter is the :" +counter);
console.log("the gravitational potencial energy is :" +gravitionalPotencialEnergy);


