import { answerArr } from "../sections/section";

// PINTAR LAS LETRAS ///

answerArr.forEach((element, index) => {
  const elementDisplay = document.querySelector(`.box--${index}`);
  if (element === "pass") {
    elementDisplay.classList.add("blue");
  } else if (element) {
    elementDisplay.classList.replace("blue", "green");
  } else {
    elementDisplay.classList.replace("blue", "red");
  }
});
