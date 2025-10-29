/*     
     Ejercicio: ley de newton
     Fecha: 23 de sept 2025
     Autor: JOHAN ARCHILA
*/

let mass = 5;
let aceleration = 12;
let force;
let totalForce  =0 ;
let counter = 1;

//proceso

function calculateForce(mass, aceleration) {
     return mass * aceleration;
}

while( mass >0 && aceleration >0 ){
       force= calculateForce(mass, aceleration);
       totalForce = totalForce + force;
       counter = counter + 1;
       mass = mass - 1;
}



//imprimer
console.log("the total of the sum is :" +totalForce);
console.log("the number is the :" +counter);






