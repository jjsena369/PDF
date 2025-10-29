/*     
   Ejercicio: resulting force
   Fecha: 25 de sept 2025
   Autor: JOHAN ARCHILA
*/


let mass = 12;
let aceleration =2;
let calculation =0;
let number = 3;

//proceso

function calculationForce(mass,aceleration){
   return mass* aceleration
}

let force= 0;

for( let calculation =1; calculation <= number; calculation ++){
force=calculationForce(mass,aceleration)
}

   console.log("the force is :" +force)
   console.log("the calculation is :" +calculation);
