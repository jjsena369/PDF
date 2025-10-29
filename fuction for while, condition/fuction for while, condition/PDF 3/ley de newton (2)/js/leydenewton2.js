/*     
     Ejercicio: ley newton 2
     Fecha: 23 de sept 2025
     Autor: JOHAN ARCHILA
*/

let reactionForce =2;
let appliedForce =3 ;
let totalForce =0;
let counter =0;


function calculateForce(reactionForce, appliedForce) {
     return reactionForce + appliedForce;
}

while(appliedForce>0){
     reactionForce = -appliedForce;
     totalForce = totalForce+appliedForce;
     counter = counter +1;
     appliedForce = appliedForce -1;
}

console.log("the totalforce is the :" +totalForce);
console.log("the counter is the :" +counter);
console.log("the reactionForce is the :" +reactionForce);
console.log("the appliedForce is the :" +appliedForce);






