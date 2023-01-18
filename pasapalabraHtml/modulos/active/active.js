import { questions1, questions2 } from "../questions.js";
console.log(questions2);
let activeLetter = 0;
let newActiveLetter;
const elementCreatorFx = () => {};

const button = document.querySelector(".btn-orange");

const makeQuestionFx = (letter) => {
  const questionActive = questions2[letter].question;
  const question = document.querySelector(".container-question");
  question.children[1].textContent = questionActive;
};
const roscoFx = () => {
  for (activeLetter = 0; activeLetter < 26; activeLetter++) {
    const box = document.querySelector(`.box--${activeLetter}`);
    if (questions2[activeLetter].status === 0) {
      continue;
    } else {
      makeQuestionFx(activeLetter);
      button.addEventListener("click", (event) => {
        const buttonClicked = event.target.textContent;
        console.log(buttonClicked);
      });
    }
    console.log(activeLetter + "final");
  }
};

const appFx = () => {
  // wellcomeFx();
  roscoFx();
};
roscoFx();
