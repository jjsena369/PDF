/*     
     Ejercicio: calcule grades
     Fecha: 22 de sept 2025
     Autor: JOHAN ARCHILA
*/


let gradeOne = 4.5;
let gradeTwo = 5.0;
let gradeThree = 3.0;
let adition;

//proceso

function add(gradeOne,gradeTwo,gradeThree){
let percentageOne = gradeOne*0.20;
let percentageTwo = gradeTwo*0.35;
let percentageThree = gradeThree*0.45;
return { percentageOne, percentageTwo, percentageThree };

}
let { percentageOne, percentageTwo, percentageThree} = add(gradeOne,gradeTwo,gradeThree);


adition =percentageOne+percentageTwo+percentageThree;
console.log("the adition and is : " +adition.toFixed(2));

if (adition >= 4.5) {
console.log("Top grade");

} else if (adition >= 3.5) {
console.log("Good grade");

} else if (adition >= 3.0) {
console.log("Average grade");

} else {
console.log("Bad grade");
}