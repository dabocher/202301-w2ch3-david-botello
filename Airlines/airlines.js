<script src="https://gist.github.com/dabocher/f84ee84c9cec64ff1661fde1a7aecb12.js"></script>;
AirlinesPro;
AirlinesPro.js;
// AEROLINEAS PRO

const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];
let myName = "";

const exitFx = () =>
  alert(`Gracias por su visita, ${myName}. Que tengas un feliz día.`);

const aeroFlores = function () {
  const createFx = function () {
    if (flights.length >= 15) {
      alert(
        "Lo sentimos, tu perfil de administrador no te permite crear más vuelos. Por favor, contacta con un superior"
      );
      menuAdminFx();
    }
    const verifyStringFx = function (input, fn1) {
      if (input === null || input === "") {
        alert("Error");
        return fn1();
      } else {
        return input;
      }
    };

    const verifyNumberFx = function (input, fn1) {
      if (input === "" || Number.isNaN(+input) || input === null) {
        alert("Introduce valores numéricos.");
        return fn1();
      } else {
        return input;
      }
    };
    const inputCostFlightsFx = function () {
      const input = prompt("Introduce el precio del vuelo");
      const inputVerified = verifyNumberFx(input, inputCostFlightsFx);
      return inputVerified;
    };

    const inputFlightsFromFx = function () {
      const input = prompt("Introduce la ciudad de origen");
      const inputVerified = verifyStringFx(input, inputFlightsFromFx);
      return inputVerified;
    };

    const inputFlightsToFx = function () {
      const input = prompt("Introduce la ciudad de destino");
      const inputVerified = verifyStringFx(input, inputFlightsToFx);
      return inputVerified;
    };
    const flightsTo = inputFlightsToFx();
    const flightsFrom = inputFlightsFromFx();
    const costSearch = inputCostFlightsFx();
    const flightsScale = confirm("¿El vuelo hace escalas?", "si/no");
    const newFlight = {
      id: flights.length,
      to: flightsTo[0].toUpperCase() + flightsTo.slice(1).toLowerCase(),
      from: flightsFrom[0].toUpperCase() + flightsFrom.slice(1).toLowerCase(),
      cost: +costSearch,
      scale: flightsScale,
    };
    flights.push(newFlight);
    console.log(flights);

    const moreFlights = confirm("¿Quieres crear más vuelos?");
    moreFlights ? inputFlightsToFx() : menuAdminFx();
  };

  const deleteFx = function () {
    const deleteFlights = parseFloat(
      prompt("Introduce el número de id del vuelo a eliminar", "00")
    );

    const indexToDelete = flights.findIndex(
      (element) => element.id == deleteFlights
    );
    if (flights.length === 0) {
      console.log("No existen más vuelos para eliminar");
      exitFx();
    }
    if (indexToDelete >= 0) {
      const confirmDelete = confirm(`El vuelo con origen: ${
        flights[indexToDelete].to
      }, y destino: ${flights[indexToDelete].from} que tiene un coste de ${
        flights[indexToDelete].cost
      }€ y que ${
        flights[indexToDelete].scale ? "realiza escalas" : "no realiza escalas"
      } va a ser eliminado de la lista de vuelos. ¿Quieres continuar?
    `);
      confirmDelete ? flights.splice(indexToDelete, 1) : deleteFx();
      console.log(flights);
      const deleteMore = confirm("¿Deseas eliminar más vuelos?");
      deleteMore ? deleteFx() : exitFx();
    } else {
      alert("El vuelo que buscas no existe");
      const deleteMore = confirm("¿Deseas eliminar más vuelos?");
      deleteMore ? deleteFx() : exitFx();
    }
  };

  const menuAdminFx = function () {
    const selection = parseFloat(
      prompt(
        "Seleciona una opción. 1.Crear vuelos 2.Eliminar vuelos 3.Volver al menú"
      )
    );
    switch (selection) {
      case 1:
        createFx();
        break;
      case 2:
        deleteFx();
        break;
      case 3:
        loginFx();
        break;
      default:
        menuAdminFx();
    }
  };

  const costSearchFx = function () {
    const costSearch = prompt("Buscador de vuelos por precio", "325");
    if (costSearch === "" || Number.isNaN(+costSearch) || costSearch === null) {
      alert("Introduce valores numéricos.");
      costSearchFx();
    }
    let counterFlights = 0;
    for (const elem of flights) {
      if (costSearch >= elem.cost) {
        counterFlights++;
        console.log(
          `El vuelo de ${elem.from} con destino a ${
            elem.to
          } tiene un precio de ${elem.cost} y ${
            elem.scale ? "realiza escalas" : "no realiza escalas"
          } `
        );
      }
    }

    const moreSearch = confirm(
      `${
        counterFlights
          ? "Hemos encontrado " + counterFlights
          : "No hemos encontrado"
      } vuelos que estén por debajo de ${costSearch}€.¿Quieres realizar otra búsqueda?`
    );
    moreSearch ? costSearchFx() : exitFx();
  };

  const loginFx = function () {
    const input = parseFloat(
      prompt("Selecciona una opción: 1.Admin 2.User 3.Exit", "0")
    );
    switch (input) {
      case 1:
        const admin = prompt(
          "Has seleccionado ADMIN. Introduce la contraseña de administrador"
        );
        admin === "admin" || admin === "01234" ? menuAdminFx() : loginFx();
        break;
      case 2:
        costSearchFx();
        break;
      case 3:
        exitFx();
        break;
      default:
        alert("Selección incorrecta");
        loginFx();
    }
  };

  const lastFx = function () {
    console.log("Los destinos de los 5 últimos vuelos del día son:");
    const copyFlights = [...flights];
    const last5 = copyFlights.splice(-5);
    for (const elem of last5) {
      console.log(elem.from);
    }
    loginFx();
  };

  const scalesFx = function (arr) {
    let scaleNum = 0;
    for (const elem of arr) {
      if (elem.scale) scaleNum++;
    }
    console.log("El número de vuelos con escala es " + scaleNum);
    lastFx();
  };

  const costArr = [];
  const averageCostFx = function (arr) {
    let averageCost = 0;
    for (const elem2 of arr) {
      costArr.push(elem2.cost);
      averageCost = costArr.reduce((acc, cost) => acc + cost) / costArr.length;
    }
    alert(`El coste promedio de los vuelos es de ${averageCost} euros.`);
    scalesFx(flights);
  };

  const printFlightsFx = function (arr) {
    for (const elem of arr) {
      console.log(
        `El vuelo con origen: ${elem.to}, y destino: ${
          elem.from
        } tiene un coste de ${elem.cost}€ y ${
          elem.scale ? "realiza escalas" : "no realiza escalas"
        }.`
      );
    }
    averageCostFx(flights);
  };

  const bienvenidaFx = function () {
    const input = prompt("Introduce tu nombre de usuario");
    if (!input) {
      alert("El usuario introducido no es correcto");
      bienvenidaFx();
    } else {
      myName = input[0].toUpperCase() + input.slice(1).toLowerCase();
      alert("Bienvenida/o a AeroFlores, " + myName);
      printFlightsFx(flights);
    }
  };

  bienvenidaFx();
};
aeroFlores();
