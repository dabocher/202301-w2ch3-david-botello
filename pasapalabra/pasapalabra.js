/ PASABALABRA APP
// VARIABLES and FUNCTIONS
const questions1 = [
  {
    letter: "a",
    answer: "Array",
    status: 1,
    question: "CON LA A. Objeto para mantener a raya a un coder troglodita",
  },
  {
    letter: "b",
    answer: "Boolean",
    status: 1,
    question:
      "CON LA B. Dr.Jeckill/Mr.Hyde. Me quiere, no me quiere. Verdadero o ...",
  },
  {
    letter: "c",
    answer: "Callback Hell",
    status: 1,
    question: "CON LA C. Un infierno de llamadas perdidas (dos palabras)",
  },
  {
    letter: "d",
    answer: "Deprecated",
    status: 1,
    question: "CON LA D. Función depre y obsoleta",
  },
  {
    letter: "e",
    answer: "Express",
    status: 1,
    question:
      "CON LA E. El framework de node que es la envidia de los muy cafeteros",
  },
  {
    letter: "f",
    answer: "Fallback",
    status: 1,
    question: "CON LA F. Por si acaso hay errores durante la llegada del otoño",
  },
  {
    letter: "g",
    answer: "Global",
    status: 1,
    question: "CON LA G. Variable internacional que puedo destruir tu código",
  },
  {
    letter: "h",
    answer: "Hoisting",
    status: 1,
    question: "CON LA H. Si eres constante no lo tendrás",
  },
  {
    letter: "i",
    answer: "Iterables",
    status: 1,
    question:
      "CON LA I. Los objetos no lo son y tienes que buscarte la vida para buscar en sus entrañas",
  },
  {
    letter: "j",
    answer: "Javascript",
    status: 1,
    question:
      "CON LA J. Lo estabas esperando. Viaje a la isla de Indonesia codificada",
  },
  {
    letter: "k",
    answer: "Keys",
    status: 1,
    question: "CON LA K. Propiedades de un objeto que no abren ninguna puerta.",
  },
  {
    letter: "l",
    answer: "Loop",
    status: 1,
    question: "CON LA L. Donde los informáticos corren la Nascar",
  },
  {
    letter: "m",
    answer: "Map",
    status: 1,
    question: "CON LA M. Método de Google",
  },
  {
    letter: "n",
    answer: "Nan",
    status: 1,
    question: "CON LA N. Enano catalán que no entiende de números",
  },
  {
    letter: "o",
    answer: "Object",
    status: 1,
    question: "CON LA O. Es inaudito pero un tipo como null lo es",
  },
  {
    letter: "p",
    answer: "Promises",
    status: 1,
    question: "CON LA P. La clienta le hace una al casarse con un servidor",
  },
  {
    letter: "q",
    answer: "Query",
    status: 1,
    question: "CON LA Q. Qué búsqueda más obsoleta",
  },
  {
    letter: "r",
    answer: "Reduce",
    status: 1,
    question: "CON LA R. Método reducido a la mínima expresión",
  },
  {
    letter: "s",
    answer: "Scope",
    status: 1,
    question: "CON LA S. La Sradio",
  },
  {
    letter: "t",
    answer: "This",
    status: 1,
    question: "CON LA T. Objeto haciéndose un selfie",
  },
  {
    letter: "u",
    answer: "Update",
    status: 1,
    question: "CON LA U. Dale al F5 para ello",
  },
  {
    letter: "v",
    answer: "Var",
    status: 1,
    question: "CON LA V. No deberías tomar una birra en su local",
  },
  {
    letter: "w",
    answer: "Window",
    status: 1,
    question: "CONTIENE LA W. La del navegador no tiene cristales",
  },
  {
    letter: "x",
    answer: "Lexical",
    status: 1,
    question: "CONTIENE LA X. This trolero en la función flecha",
  },
  {
    letter: "y",
    answer: "Yield",
    status: 1,
    question: "CON LA Y. Le birla el control de la ejecución a la función",
  },
  {
    letter: "z",
    answer: "The Dead Zone",
    status: 1,
    question:
      "CONTIENE LA Z. Let y const deambulan por ella como zombies (tres palabras)",
  },
];

const questions2 = [
  {
    letter: "a",
    answer: "Agata",
    status: 1,
    question: "CON LA A. Piedra preciosa ideal para una gata presumida.",
  },
  {
    letter: "b",
    answer: "Bocata",
    status: 1,
    question: "CON LA B. Bocadillo para gatos barriobajeros.",
  },
  {
    letter: "c",
    answer: "Cegato",
    status: 1,
    question: "CON LA C. Gato que no ve un pijo.",
  },
  {
    letter: "d",
    answer: "Drogata",
    status: 1,
    question: "CON LA D. Gata que se chuta heroina.",
  },
  {
    letter: "e",
    answer: "Engatusar",
    status: 1,
    question:
      "CON LA E. Ganar la voluntad de alguien con halagos para conseguir algo de él.",
  },
  {
    letter: "f",
    answer: "Fragata",
    status: 1,
    question: "CON LA F. Barco de guerra.",
  },
  {
    letter: "g",
    answer: "Gattaca",
    status: 1,
    question: "CON LA G. Película felina de ciencia ficción.",
  },
  {
    letter: "h",
    answer: "Hecatombe",
    status: 1,
    question:
      "CON LA H. Suceso trágico en el que se produce una gran destrucción y muchas desgracias felinas y materiales.",
  },
  {
    letter: "i",
    answer: "Inuncat",
    status: 1,
    question:
      "CON LA I. Plan que se activa para avisar a los gatos de las rieras del Maresme cuando hay previsión de fuertes lluvias.",
  },
  {
    letter: "j",
    answer: "Judicatura",
    status: 1,
    question:
      "CON LA J. Conjunto de jueces y magistrados de un sistema judicial.",
  },
  {
    letter: "k",
    answer: "Kato",
    status: 1,
    question:
      "CON LA K. De nombre Daijiro, apellido del malogrado piloto japonés de MotoGp.",
  },
  {
    letter: "l",
    answer: "Lacatus",
    status: 1,
    question:
      "CON LA L. Jugador del Steaua de Bucarest que aguó la fiesta a los culés en la champions del 86.",
  },
  {
    letter: "m",
    answer: "Mojigato",
    status: 1,
    question:
      "CON LA M. Que muestra exagerados escrúpulos morales o religiosos.",
  },
  {
    letter: "n",
    answer: "Negativo",
    status: 1,
    question: "CON LA N. Gato pesimista que lo ve todo negro.",
  },
  {
    letter: "o",
    answer: "Ocata",
    status: 1,
    question: "CON LA O. Municipio del Maresme.",
  },
  {
    letter: "p",
    answer: "Pelagatos",
    status: 1,
    question:
      "CON LA P. Persona insignificante o mediocre, sin posición social o económica.",
  },
  {
    letter: "q",
    answer: "Qgat",
    status: 1,
    question: "CON LA Q. Acrónimo felino de San Cucufate.",
  },
  {
    letter: "r",
    answer: "Regata",
    status: 1,
    question: "CON LA R. Carrera de embarcaciones felinas.",
  },
  {
    letter: "s",
    answer: "scattergories",
    status: 1,
    question:
      "CON LA S. Conocido juego de mesa que tiene categorias escatológicas.",
  },
  {
    letter: "t",
    answer: "Tocata",
    status: 1,
    question: "CON LA T. Tocadiscos felino.",
  },
  {
    letter: "u",
    answer: "Ural",
    status: 1,
    question: "CON LA U. Gato que proviene de esa cordillera rusa.",
  },
  {
    letter: "v",
    answer: "Vengativo",
    status: 1,
    question:
      "CON LA V. Gato determinado a tomar venganza de cualquier agravio.",
  },
  {
    letter: "x",
    answer: "Juntsxcat",
    status: 1,
    question:
      "CONTINE LA X. Partido político que ahora mismo no andan muy unidos.",
  },
  {
    letter: "y",
    answer: "Yucateco",
    status: 1,
    question: "CON LA Y. Felino natural del Yucatán.",
  },
  {
    letter: "z",
    answer: "Zaragata",
    status: 1,
    question: "CON LA Z. Gresca, alboroto de gatas en Zaragoza.",
  },
];

let userName;
let leaderboard = [
  { Jugador: "Jacqueline Onassis", Puntuacion: 18 },
  { Jugador: "Hieronymus Boss", Puntuacion: 25 },
  { Jugador: "Jeff Tweedy", Puntuacion: 22 },
  { Jugador: "Iniesta de mi vida", Puntuacion: 20 },
  { Jugador: "Juan Tamarit", Puntuacion: 26 },
  { Jugador: "Gabriella Argentina", Puntuacion: 6 },
  { Jugador: "Kurt Wallander", Puntuacion: 17 },
  { Jugador: "La chica del googleMaps", Puntuacion: 16 },
  { Jugador: "El niño de la peca", Puntuacion: 15 },
  { Jugador: "Davo", Puntuacion: 13 },
  { Jugador: "Jonnhy 5", Puntuacion: 25 },
  { Jugador: "Papá Botello", Puntuacion: 18 },
];

const updateLeaderboard = (scoreState) => {
  const index = leaderboard.findIndex(
    (element) => element.Jugador === userName
  );
  if (index >= 0 && leaderboard[index].Puntuacion < scoreState[0]) {
    alert(
      "Enhorabuena, " +
        userName +
        "! Has conseguido superar tu anterior puntuación de " +
        leaderboard[index].Puntuacion +
        " puntos. \n \n Tu nueva puntuación es de " +
        scoreState[0] +
        " puntos."
    );
    leaderboard[index].Puntuacion = scoreState[0];
  } else if (index >= 0 && leaderboard[index].Puntuacion >= scoreState[0]) {
    alert(
      "Lo sentimos, " +
        userName +
        ". No has conseguido superar tu anterior puntuación de " +
        leaderboard[index].Puntuacion +
        " puntos.\n \n Tu puntuación ha sido: " +
        scoreState[0] +
        " puntos."
    );
  } else {
    userName +
      ", has conseguido una puntuación de " +
      scoreState[0] +
      " puntos.";
    leaderboard.push({ Jugador: userName, Puntuacion: scoreState[0] });
  }
  sorted = leaderboard.sort((a, b) => b.Puntuacion - a.Puntuacion);
  const sortedArr = ["Jugador - Puntuación"];
  for (const element of sorted) {
    sortedArr.push(`${element.Jugador} : ${element.Puntuacion} puntos.`);
  }
  alert(sortedArr.join(" \n"));
  return leaderboard;
};

const normalizeInputsFx = function (input) {
  const inputToLowerCase = input.toLowerCase();
  const inputArr = inputToLowerCase.split(" ");
  const inputToUpperCase = [];
  for (const elem of inputArr) {
    inputToUpperCase.push(elem[0].toUpperCase() + elem.slice(1));
  }
  const inputNormalized = inputToUpperCase.join(" ");
  return inputNormalized;
};

let inputFx = function (request, userName, scoreState) {
  const input = prompt(request);
  if (input === null || input === "") {
    const inputNormalized = "";
    return inputNormalized;
  } else {
    const inputNormalized = normalizeInputsFx(input);
    return inputNormalized;
  }
};
////////////////////////////////////////////////////

//1-WELCOME & LOGIN & OPTIONS
const wellcomeFx = () => {
  alert("Bienvenida/o al juego del Pasapalabra.");
  const userName = inputFx("Por favor, introduce tu nombre.");
  alert("Hola, " + userName + ". Empezamos a jugar?");
  return userName;
};

const chooseThemeFx = () => {
  const option = parseFloat(
    prompt(
      "Elige una de las dos opciones de preguntas: \n 1.Informáticos Nerds \n 2.Adoradores del mundo Felino"
    )
  );
  let questions = [];
  if (option === 1) {
    questions = [...questions1];
  } else if (option === 2) {
    questions = [...questions2];
  } else {
    alert("Por favor, 1 o 2.");
    return chooseThemeFx();
  }

  return questions;
};

//2-END GAME AND EXIT

const endGameFx = function (questions, userName, scoreState, outOfTime) {
  if (outOfTime === true) {
    alert(
      "Ohhh, tiempo agotado. \n Gracias por participar, " +
        userName +
        ". \n \n Preguntas falladas: " +
        (questions.length - scoreState[1] - scoreState[0]) +
        " \n \n Tu puntuación final es de " +
        scoreState[0] +
        " puntos."
    );
    updateLeaderboard(scoreState);
    scoreState[1] = 0;
    finalFx();
  } else {
    alert(
      "Gracias por participar, " +
        userName +
        ". \n \n Preguntas falladas: " +
        (questions.length - scoreState[1] - scoreState[0]) +
        " \n \n Tu puntuación final es de " +
        scoreState[0] +
        " puntos."
    );
    updateLeaderboard(scoreState);
    scoreState[1] = 0;
    finalFx();
  }
  return;
};
//3-PLAY
const playFx = function (questions, userName, inputFunction) {
  alert(
    "Bienvenido " +
      userName +
      "!\n \n Tienes 3 minutos para adivinar todas las palabras.\n \n La pregunta se hará en castellano, pero la respuesta puede que no esté en el idioma de Cervantes.\n  Si no sabes una palabra puedes pasar palabra con \n mn...adivina...'pasapalabra', y se te volverá a preguntar en la siguiente ronda."
  );

  let timeA = new Date().getTime() / 1000;
  let timeB = timeA + 18;

  let i = 0;
  let state = questions.length;
  let score = 0;
  let scoreState = [score, state];

  const checkAnswerFx = function (answerUser, timeLeft, scoreState) {
    if (answerUser === questions[i].answer) {
      questions[i].status = 0;
      scoreState[0]++;
      scoreState[1]--;

      alert(
        "Tu respuesta " +
          answerUser +
          " es correcta ✅\n \n ⏳ Tiempo restante: " +
          timeLeft +
          " segundos. \n \n Puntuación: " +
          scoreState[0] +
          " puntos."
      );
    } else if (answerUser === "End") {
      alert("Has elegido acabar con el juego.");
      timeLeft = 0;
      scoreState[1] = 0;
      endGameFx(questions, userName, scoreState);
      return;
    } else if (answerUser === "Pasapalabra") {
      alert(
        "OK, has pasado la palabra. \n \n En la siguiente ronda la podrás contestar...\n \n ⏳ Tiempo restante: " +
          timeLeft +
          " segundos. \n \n Puntuación: " +
          scoreState[0] +
          " puntos."
      );
      questions[i].status = 1;
      scoreState[1];
    } else {
      alert(
        answerUser +
          ", tu respuesta es incorrecta ❌. \n \n La respuesta correcta es " +
          questions[i].answer[0].toUpperCase() +
          questions[i].answer.slice(1) +
          "\n \n ⏳ Tiempo restante: " +
          timeLeft +
          " segundos. \n \n Puntuación: " +
          scoreState[0] +
          " puntos."
      );
      questions[i].status = 0;
      scoreState[1]--;
    }
    return scoreState;
  };

  const roscoFx = function (timeB, scoreState) {
    let outOfTime = false;
    let timeLeft;
    let answerUser;

    for (i = 0; i < questions.length; i++) {
      timeLeft = Math.floor(timeB - new Date().getTime() / 1000);
      if (timeLeft <= 0) {
        timeLeft = 0;
        outOfTime = true;
        return endGameFx(questions, userName, scoreState, outOfTime);
      } else if (scoreState[1] === 0) {
        return endGameFx(questions, userName, scoreState);
      } else if (questions[i].status === 0) {
        continue;
      } else {
        answerUser = inputFunction(questions[i].question, userName, scoreState);
        scoreState = checkAnswerFx(answerUser, timeLeft, scoreState);
        if (answerUser === "End") {
          break;
        }
      }
    }

    if (timeLeft <= 0) {
      outOfTime = true;
      endGameFx(questions, userName, scoreState, outOfTime);
      return;
    } else if (state === 0) {
      endGameFx(questions, userName, scoreState);
      return;
    } else if (answerUser === "End") {
      return;
    } else {
      roscoFx(timeB, scoreState);
    }
  };
  roscoFx(timeB, scoreState);
};
function finalFx() {
  const playAgain = confirm("¿Quieres volver a jugar?");
  if (playAgain) {
    return pasapalabraApp();
  } else {
    alert("Hasta pronto!");
  }
}

//PASAPALABRA APP

const pasapalabraApp = () => {
  userName = wellcomeFx();
  const questions = chooseThemeFx();
  playFx(questions, userName, inputFx);
};
pasapalabraApp();
