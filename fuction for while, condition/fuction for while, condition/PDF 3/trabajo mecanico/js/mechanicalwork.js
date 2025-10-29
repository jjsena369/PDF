/*     
     Ejercicio: mechanical work
     Fecha: 23 de sept 2025
     Autor: JOHAN ARCHILA
*/
let force = 10;
let distance = 4;
let totalwork = 0;
let counter = 0;

function mechanicalWork(force, distance) {
  return force * distance;
}

while (distance > 0) {
  let work = mechanicalWork(force, distance);
  totalwork += work;
  counter++;
  distance--;
}

console.log("Work in last iteration: " + mechanicalWork(force, distance));
console.log("Counter: " + counter);
console.log("Total work: " + totalwork);