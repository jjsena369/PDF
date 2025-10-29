/*     
   Ejercicio: salary
   Fecha: 22 de sept 2025
   Autor:JOHAN ARCHILA
*/

let daysWorked = 25;
let valueDay = 25000;
let transport = 114000;
let SM = 14000000;
let twoSM = 2800000;
let fourSM = 5600000;

//proceso

let salary, health, pension, arl, retention;

function calculateSalaryDetails() {
    salary = daysWorked * valueDay;
    health = salary * 0.12;
    pension = salary * 0.16;
    arl = salary * 0.012;
    retention = salary * 0.04;

}

calculateSalaryDetails();


if(salary <= twoSM) {
   console.log("contains transportation subsidy the $140.000");
}

else if(salary > twoSM) {
   console.log("does not contains transportation subsidy");
}


if (salary >= fourSM) {
console.log("retention is the :" +retention);
}

else if (salary <fourSM){
console.log("does not retention");
}


let deductibleTotal= (arl+pension+health+retention);
let payTotal= (salary + transport ) - deductibleTotal;

console.log( "the payTotal is :" +payTotal);



