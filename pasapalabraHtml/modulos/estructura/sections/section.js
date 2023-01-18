/* import { questions1, questions2, questions3 } from "../questions.js"; */
/* const questionsArr = [...questions2]; */
const questionsArr = [
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
const theme = "ComputNerds";
const themeDisplay = document.getElementById("theme");
themeDisplay.textContent = theme;
const questionElement = document.querySelector(".section__question-container");
const buttons = document.querySelectorAll(".buttons");
const start = document.getElementById("start-button");
const input = document.querySelector(".answer");
let indexActive = 0;

// ESTADO INICIAL A BORRAR /////

const startFx = (seconds) => {
  let time = seconds;
  const timer = setInterval(() => {
    document.getElementById("timer").innerHTML = time;
    time--;
    if (time < 0) clearInterval(timer);
  }, 1000);
};
// inicio del juego
start.addEventListener("click", function (e) {
  this.classList.toggle("hidden");
  startFx(160);
  questionElement.textContent = questionsArr[indexActive].question;
  input.value = "";
});
////////////// SCORE ///////////////

// variables
const chainedSuccessArr = [];
let totalScore = 0;
let wordPoints = chainedSuccessArr.length;
let accumScore = 0;

// Store Arr results
const answerArr = [];
// Store Arr for success strikes ... start with true

// display points
const nextPointsDisplay = document.getElementById("next-score");
const accumScoreDisplay = document.getElementById("accum-score");
const totalScoreDisplay = document.getElementById("total-score");

/* debugger */ /// actualiza el score en función de si has acertado o no
const updateScoreFx = (value) => {
  answerArr.push(value);
  const defaultValuesFx = () => {
    accumScore = 0;
    accumScoreDisplay.textContent = accumScore;
    chainedSuccessArr.splice(0, chainedSuccessArr.length);
    console.log(chainedSuccessArr);
    wordPoints = chainedSuccessArr.length + 1;
    nextPointsDisplay.textContent = wordPoints;
  };
  if (value === "pass") {
    totalScore += accumScore;
    totalScoreDisplay.textContent = totalScore;
    defaultValuesFx();
  } else if (value) {
    chainedSuccessArr.push(chainedSuccessArr.length + 1);
    accumScore = chainedSuccessArr.reduce((acc, curr) => acc + curr);
    accumScoreDisplay.textContent = accumScore;
    wordPoints++;
    nextPointsDisplay.textContent = wordPoints + 1;
  } else {
    defaultValuesFx();
  }
};

////////////// SHOW ANSWER /////////////////
// and check if rosco is finished
const showAnswer = (answer) => {
  document.querySelector(".word-revealed").textContent = `${answer}`;
  if (indexActive === 25) {
    indexActive = 0;
  } else {
    indexActive++;
  }
  return indexActive;
};
//////////////////////////////

// LOOP y localizador de índice activo para hacer la pregunta
const roscoFx = () => {
  if (questionsArr[indexActive].status === 1) {
    questionElement.textContent = questionsArr[indexActive].question;
  } else {
    indexActive++;
    roscoFx();
  }
};

//// AÑADIR PALABRAS RESUELTAS

const addElement = (letter, rightAnswer) => {
  // 1- create element
  const listElement = document.createElement("li");
  // 2- add classes
  listElement.classList.add(`word-revealed--${letter}`);
  if (rightAnswer === "pass") {
    listElement.textContent = `${letter.toUpperCase()}.- _________(pass)`;
  } else {
    listElement.textContent = `${letter.toUpperCase()}.- ${rightAnswer}`;
  }
  // 3- insert element
  const parentElement = document.getElementById("list-results");
  parentElement.appendChild(listElement);
};

// escucha del botón GUESS y del botón PASS y cotejo de la respuesta
buttons.forEach((element) => {
  /* debugger */
  element.addEventListener("click", (e) => {
    e.preventDefault();
    const btnClicked = e.target.textContent;
    answerArr.push(btnClicked);
    if (
      btnClicked === "guess" &&
      input.value === questionsArr[indexActive].answer
    ) {
      updateScoreFx(true);
      questionsArr[indexActive].status = 0;
      addElement(
        questionsArr[indexActive].letter.toUpperCase(),
        questionsArr[indexActive].answer
      );
    } else if (
      btnClicked === "guess" &&
      input.value !== questionsArr[indexActive].answer
    ) {
      updateScoreFx(false);
      questionsArr[indexActive].status = 0;
      addElement(
        questionsArr[indexActive].letter.toUpperCase(),
        questionsArr[indexActive].answer
      );
    } else if (btnClicked === "pass") {
      addElement(questionsArr[indexActive].letter.toUpperCase(), "pass");
      updateScoreFx("pass");
    }

    showAnswer(input.value);
    input.value = "";
    roscoFx();
  });
});

export { answerArr };
