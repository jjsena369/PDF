/*
    Titulo: Tension in a rope
    Autor: JOHAN ARCHILA
    Fecha: 28 de septiembre de 2025
*/


let mass = 5
let gravity = 9.8
let object = 1
let numberObjects = 4

//Process
function    calculateTension(mass, gravity, object) {
    return (mass * gravity * object)
}
tension = calculateTension(mass, gravity, numberObjects)
//Output

    console.log("The total number of objects is "+numberObjects)
    console.log("The mass of each object is "+mass)
    console.log("The gravity is "+gravity)



