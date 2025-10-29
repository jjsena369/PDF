/*     
    Ejercicio: age
    Fecha: 22 de sept 2025
    Autor: JOHAN ARCHILA
*/

let ageOne = 17;
let ageTwo = 29;
let ageThree = 15;
let average;


//proceso


function calculateAverage(ageOne, ageTwo, ageThree) {
    return (ageOne + ageTwo + ageThree) / 3;
}


average = calculateAverage(ageOne, ageTwo, ageThree);

if (average >= 18){
console.log("average is greater");
}

else if (average <18){
console.log("average is minor");
}


if (ageOne >= 18) {
    console.log("ageOne is greater");
}

else if( ageOne <18) {
    console.log("ageOne is minor");
}

if (ageTwo >= 18) {
    console.log("ageTwo is greater");
}

else if( ageTwo <18) {
    console.log("ageTwo is minor");
}

if (ageThree >= 18) {
    console.log("ageThree is greater");
}

else if( ageThree <18) {
    console.log("ageThree is minor");
}


