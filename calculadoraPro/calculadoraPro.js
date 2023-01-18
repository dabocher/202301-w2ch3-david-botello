"use strict";

let inputArr = [];
let suma = [];
let resta = [];
let multi = [];
let divis = [];

//función principal que nos pide que introduzcamos el valor
const pideDato = function () {
  //función que realiza todas las operaciones e imprime cuando ya hemos acabado de introducir datos
  const opera = function () {
    //operamos con el método reduce
    suma = inputArr.reduce((accum, element) => accum + element, 0);
    console.log("El resultado de la suma es: " + suma);
    resta = inputArr.reduce(
      (accum, element) => accum - element,
      inputArr[0] * 2
    );
    console.log("El resultado de la resta es: " + resta);
    multi = inputArr.reduce((accum, element) => accum * element, 1);
    console.log("El resultado de la multi es: " + multi);
    divis = inputArr.reduce(
      (accum, element) => accum / element,
      inputArr[0] * inputArr[0]
    );
    console.log("El resultado de la divis es: " + divis);
  };
  // función que nos pregunta si queremos introducir más datos
  const seguirOperando = function () {
    const seguir = confirm("¿Quieres seguir introduciendo valores?");
    if (seguir) {
      pideDato();
    } else {
      alert("El resultado de tu operación debería salir por consola.");
      if (inputArr.length === 1 && inputArr[0] >= 0) {
        console.log(
          "La raíz cuadrada del número introducido es: " +
            Math.sqrt(inputArr[0])
        );
      } else if (inputArr.length === 1 && inputArr[0] < 0) {
        console.log(
          "No es posible hacer la raiz cuadrada de un número negativo"
        );
      } else {
        // invocamos a la función para que realice las operaciones y las imprima por consola
        opera();
      }
      //función que utilizamos al acabar la operación para preguntar si queremos hacer más operaciones
      const masOpera = confirm("¿Deseas realizar otra operación?");
      if (masOpera) {
        inputArr = [];
        suma = [];
        resta = [];
        multi = [];
        divis = [];

        pideDato();
      } else {
        return alert("Hasta pronto!");
      }
    }
  };
  //Introducción del valor y cotejo del tipo de dato
  const input = parseFloat(prompt("Introduce un número"));
  if (Number.isNaN(input)) {
    alert("El valor introducido no és un número");
    pideDato();
  } else {
    inputArr.push(input);
    seguirOperando();
  }
};
pideDato();
