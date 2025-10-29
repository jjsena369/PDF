/*     
     Ejercicio: law newton
     Fecha: 25 de sept 2025
     Autor: JOHAN ARCHILA
*/

let netoForce =3;
let numberForce = 2;

//proceso

function calculateNetoForce(netoForce, numberForce){
       for(let objects=1; objects <= numberForce; objects++){
              netoForce = netoForce - 1;
       }
       return netoForce;
}
netoForce = calculateNetoForce(netoForce, numberForce);
for(let objects=1; objects <= numberForce; objects++){
       

       if(netoForce==0){
        console.log("the objects is at rest");
}
       else if(netoForce>0){
       console.log("the objects is in motion");
}
}
