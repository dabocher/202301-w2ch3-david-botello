const bingoApp = function () {
  // VARIABLES

  let leaderboard = [
    { "Jugador / a": "Puntuación" },
    { "El niño de la peca": 63 },
    { "Jonnhy 5": 58 },
    { "Juan Tamarit": 55 },
    { "Iniesta de mi vida": 50 },
    { "Jacqueline Onassis": 42 },
    { "Papá Botello": 35 },
    { "Kurt Wallander": 29 },
    { "Jeff Tweedy": 28 },
    { "La chica del googleMaps": 27 },
    { "Hieronymus Boss": 27 },
    { Davo: 25 },
  ];
  const leaderKeys = Object.keys(leaderboard);
  const leaderValues = Object.values(leaderboard);

  const bomboArr = [];
  let ball;
  const arrNumbers = [];
  const card = new Map();
  const extractedArr = [];

  // A  BLOQUE INIT
  const initFx = function () {
    //
    // 1. fx de bienvenida y almacenar usuario

    let inputName;
    let userNameFixed;

    inputName = prompt("Introduce tu nombre");
    if (inputName === null || inputName === "" || !isNaN(inputName)) {
      alert("Error, solo letras, por favor!");
      return initFx();
    } else {
      //
      // 1a. NORMALIZE STRING
      //
      const normalizeFullNameFx = function (fullname) {
        const fullNameTLC = fullname.toLowerCase();
        const namesArr = fullNameTLC.split(" ");
        const namesUpper = []; // array dondo meteremos las variaciones de las palabras
        for (const elem of namesArr) {
          namesUpper.push(elem[0].toUpperCase() + elem.slice(1));
        }
        return namesUpper.join(" ");
      };
      userNameFixed = normalizeFullNameFx(inputName);
      alert("Bienvenido " + userNameFixed);

      for (let i = 0; i < leaderboard.length; i++) {
        if (!leaderboard[i].hasOwnProperty(userNameFixed)) {
          continue;
        }
        alert(
          "Qué gusto verte de nuevo. Tu mejor puntuación es de " +
            leaderboard[i][userNameFixed] +
            " puntos."
        );
        break;
      }
      alert(
        `Clasificación: \n ${Object.keys(leaderboard[0])} - ${Object.values(
          leaderboard[0]
        )} \n ${Object.keys(leaderboard[1])} - ${Object.values(
          leaderboard[1]
        )}\n ${Object.keys(leaderboard[2])} - ${Object.values(
          leaderboard[2]
        )}\n ${Object.keys(leaderboard[3])} - ${Object.values(leaderboard[3])}
        \n ${Object.keys(leaderboard[4])} - ${Object.values(
          leaderboard[4]
        )}\n ${Object.keys(leaderboard[5])} - ${Object.values(
          leaderboard[5]
        )}\n ${Object.keys(leaderboard[6])} - ${Object.values(
          leaderboard[6]
        )}\n ${Object.keys(leaderboard[7])} - ${Object.values(leaderboard[7])}
        \n ${Object.keys(leaderboard[8])} - ${Object.values(
          leaderboard[8]
        )}\n ${Object.keys(leaderboard[9])} - ${Object.values(
          leaderboard[9]
        )}\n ${Object.keys(leaderboard[10])} - ${Object.values(
          leaderboard[10]
        )}\n ${Object.keys(leaderboard[11])} - ${Object.values(
          leaderboard[11]
        )}`
      );
      alert(
        userNameFixed +
          ", empezarás con 100 puntos y en cada turno se restará un punto."
      );
      alert(
        "Te parece si empezamos a jugar? Ahora te entregaremos tu cartón. Venga suerte"
      );
    }
    console.log(userNameFixed);
    return userNameFixed;
  };
  const userName = initFx();

  ///////////////////

  // B. BLOQUE JUEGO
  const gameFx = function (userName) {
    //
    // b1 Generador del bombo
    //
    const bomboGeneratorFx = function () {
      const bomboArr = [];
      for (let i = 1; i < 91; i++) {
        bomboArr.push(i);
      }
      return bomboArr;
    };
    const bombo = bomboGeneratorFx();

    //
    // b2 Generador del cartón
    //
    const cardGeneratorFx = () => {
      const arrNumbers = [];
      for (let i = 0; i < 15; i++) {
        const newNumber = Math.trunc(Math.random() * 90 + 1);
        arrNumbers.includes(newNumber) ? i-- : arrNumbers.push(newNumber);
      }
      const confirmCard = confirm(
        `Te ha tocado el siguiente cartón: ${arrNumbers}. ¿Quieres quedarte con él o prefieres sortear otro?`
      );
      if (confirmCard) {
        alert("Sabia decisión. Empieza la partida!");
        return arrNumbers;
      } else {
        alert(
          "Mira que eres pejigueras. Lo que sea para hacerme trabajar. Venga, generamos un nuevo cartón"
        );
        return cardGeneratorFx();
      }
    };
    const cardNumbers = cardGeneratorFx();
    console.log("Esta es la array del cartón: " + cardNumbers);
    //
    // b3 generador de lineas
    //
    const cardMap = function (arr) {
      const card = new Map([
        [1, arr.slice(0, 5)],
        [2, arr.slice(5, 10)],
        [3, arr.slice(10)],
      ]);
      console.log("Estas son las lineas del cartón: ");
      for (const [keys, values] of card)
        console.log(`Línea número ${keys}: ${values}`);
      return card;
    };
    const cardLines = cardMap(cardNumbers);
    //////////////////
    //////////////////
    //////////////////
    // B  BLOQUE PLAY (extract/compare/check condiciones de victoria or continue)
    // B.0  BLOQUE EXIT
    const exitFx = function () {
      return alert("Hasta pronto, " + userName);
    };

    // B.1 CUERPO DEL JUEGO
    let completedLines = 0;
    const cicloFx = function () {
      const confirmacion = confirm(
        "Inicio del turno " + (extractedArr.length + 1) + ". ¿Deseas continuar?"
      );
      if (!confirmacion) {
        return exitFx(userName);
      }
      console.log("Extracción de bola en curso...");
      //
      //c1 extracción bola bombo
      //
      const ballExtractorFx = function () {
        const indexAllBalls = parseFloat(
          Math.trunc(Math.random() * bombo.length)
        );
        ball = bombo[indexAllBalls];
        extractedArr.push(...bombo.splice(indexAllBalls, 1));
        console.log("La bola extraída es la bola numero " + ball);
        return ball, extractedArr;
      };
      ballExtractorFx();
      //
      //c2 comprobación bola en el cartón
      //
      const checkerCardFx = function () {
        let keepPlaying = true;
        let ballInYourCard = false;
        const checkLineFx = function (value) {
          const checkLine = value.reduce((acc, curr) => acc + curr);
          if (checkLine === 0) {
            completedLines++;
            console.log("check de completedLines " + completedLines);
            switch (completedLines) {
              case 1:
                alert("LINEA!!! Han cantado LINEA!!!");
                break;
              case 3:
                alert("BINGO!!! Han cantado BINGO!!!");
                alert("Has ganado en el turno " + extractedArr.length);
                const puntuacion = 100 - extractedArr.length;
                alert("Tu puntuación es de: " + puntuacion + " puntos");
                const playAgain = confirm("¿Quieres jugar de nuevo?");
                if (playAgain) {
                  bingoApp();
                } else {
                  keepPlaying = false;
                  return exitFx();
                }
                break;
              default:
                alert("Enhorabuena, siga jugando");
            }
          }
          return value;
        };
        let lineNumber = 0;
        for (const [key, value] of cardLines) {
          const ballIndex = value.findIndex((elem) => elem === ball);

          if (ballIndex >= 0) {
            ballInYourCard = true;
            lineNumber = key;
            //alert(`OLEEEE!!! La bola ${ball} está en la línea ${key}`);
            value.splice(ballIndex, 1, 0);

            checkLineFx(value);
          }
          console.log("LINEA num." + key + ": " + value);
        }
        if (!ballInYourCard) {
          alert(
            `La bola ${ball} no está en tu cartón\n \n TU CARTON:\n Linea 1: ${cardLines.get(
              1
            )}\n Linea 2: ${cardLines.get(2)}\n Linea 3: ${cardLines.get(3)}`
          );
          return cicloFx();
        } else if (ballInYourCard && keepPlaying) {
          alert(
            `OLEEEE!!! La bola ${ball} está en la línea ${lineNumber}\n \n TU CARTON:\n Linea 1: ${cardLines.get(
              1
            )}\n Linea 2: ${cardLines.get(2)}\n Linea 3: ${cardLines.get(3)}`
          );
          return cicloFx();
        }

        /// hasta aqui el checker de carton
      };
      checkerCardFx();
    };
    cicloFx();
    ////////////
  };
  gameFx(userName);
};
bingoApp();
