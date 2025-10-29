/*     
        Ejercicio: are the three cuadres
        Fecha: 10 de octu 2025
        Autor:JOHAN ARCHILA
*/
let sideOne =12;
let sideTwo = 10;
let sideThree = 5;


//proceso

function compareSquares(sideOne, sideTwo, sideThree) {
    let squareOne = sideOne * sideOne;
    let squareTwo = sideTwo * sideTwo;
    let squareThree = sideThree * sideThree;

        console.log("squareOne is: " + squareOne);
        console.log("squareTwo is: " + squareTwo);
        console.log("squareThree is: " + squareThree);


if (squareOne === squareTwo && squareTwo === squareThree) {
        console.log("Los tres cuadrados son iguales.");
    } else {
        console.log("Los tres cuadrados NO son iguales.");
    }

}
compareSquares(sideOne, sideTwo, sideThree);
