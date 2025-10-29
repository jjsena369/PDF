/*     
     Ejercicio: weight of planet
     Fecha: 25 de sept 2025
     Autor: JOHAN ARCHILA
*/

let massObject = 12;
let graEarth =9.8;
let graMars = 3.7;
let graJupiter = 24.8;
let graMoon = 1.6;
let planet = 3;
let weight = 0; 


//procesos

function weightOfPlanet(massObject, gravity){
    return massObject * gravity;
}
    
for (let i=0; i<1; i++){
    if(planet==0){
    weight= weightOfPlanet(massObject, graEarth);
    console.log("the weight earth :" +weight);
}
    else if(planet==2){
      weight= weightOfPlanet(massObject, graMars);
      console.log("the weight mars :" +weight);   
}
    else if(planet==3){
    weight= weightOfPlanet(massObject, graJupiter);
    console.log("the weight jupiter :" +weight);
}
    else if (planet==4){
    weight= weightOfPlanet(massObject, graMoon);
    console.log("the weight moon :" +weight);
}
}
