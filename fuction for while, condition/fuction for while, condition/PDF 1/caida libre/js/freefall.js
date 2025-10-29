/*     
     Ejercicio: free fall
     Fecha: 22 de sept 2025
     Autor: JOHAN ARCHILA
*/

let massOne = 7.5;
let massTwo = 3.4;
let gravity = 9.1;

//proceso

function multiplication(massOne,massTwo,gravity){
     let forceOne = massOne*gravity;
     let forceTwo = massTwo*gravity;
     return { forceOne, forceTwo };
}

let {forceOne, forceTwo} = multiplication(massOne, massTwo, gravity);


if (forceOne > forceTwo) {
    console.log("bodyOne has more force: " + forceOne);
}

else if (forceOne < forceTwo) {
    console.log("bodyTwo has more force: " + forceTwo);
}

else {
    console.log("Both bodies have the same force.");
}
