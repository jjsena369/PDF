/*     
     Ejercicio: Force object
     Fecha: 22 de sept 2025
     Autor: JOHAN ARCHILA
*/

let force;
let mass = 25;
let aceleration = 10;

//proceso 

function calculaForce(mass, aceleration){
    return mass*aceleration;
}

force = calculaForce(mass, aceleration);

if( force >=100){
console.log("the force is high");
} 

else if( force <100){
console.log("the force is low")
}




