"use strict";

let inputArr = [];
let suma = [];
let resta = [];
let multi = [];
let divis = [];

const pideDato = function () {
  const opera = function () {
    // Operamos con el método reduce
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

  const seguirOperando = function () {
    // eslint-disable-next-line no-alert
    const seguir = confirm("¿Quieres seguir introduciendo valores?");
    if (seguir) {
      pideDato();
    } else {
      // eslint-disable-next-line no-alert
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
        // Invocamos a la función para que realice las operaciones y las imprima por consola
        opera();
      }

      // Función que utilizamos al acabar la operación para preguntar si queremos hacer más operaciones
      // eslint-disable-next-line no-alert
      const masOpera = confirm("¿Deseas realizar otra operación?");
      if (masOpera) {
        inputArr = [];
        suma = [];
        resta = [];
        multi = [];
        divis = [];

        pideDato();
      } else {
        // eslint-disable-next-line no-alert
        return alert("Hasta pronto!");
      }
    }
  };

  // eslint-disable-next-line no-alert
  const input = parseFloat(prompt("Introduce un número"));
  if (Number.isNaN(input)) {
    // eslint-disable-next-line no-alert
    alert("El valor introducido no és un número");
    pideDato();
  } else {
    inputArr.push(input);
    seguirOperando();
  }
};

pideDato();
