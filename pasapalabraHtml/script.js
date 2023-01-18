import { questions1, questions2 } from "./questions.js";
//import { questions2 } from "./questions.js";

const questions = [...questions1];
// indice para recorrer la array y establecer el elemento activo
let activeIndex = 0;
const carrusel = document.querySelector(".container-carrusel");
const button = document.querySelector(".btn");

const gameFx = function () {
  const box = document.querySelector(`.box--${activeIndex}`);
  const active = document.querySelector(".active");
  const activeLetter = active.textContent;
  const input = document.querySelector(".inputWord");

  for (const element of questions) {
  }
  const filterQuestion = questions.filter((element) => {
    element.letter === activeLetter.toLowerCase();
    const activeQuestion = [filterQuestion];
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const inputWord = input.value;
      const guessWord = inputWord.toLowerCase();
      const answer = activeQuestion.answer.toLowerCase();
      if (guessWord === answer) {
        console.log("BRAVO");
        activeQuestion.status = 0;
      } else {
        console.log("you failed");
      }
      input.value = "";
      box.classList.toggle("active");
      activeIndex++;
      box = document.querySelector(`.box--${activeIndex}`);
      console.log(box.textContent);
      carrusel.style.transform = "rotateY(-13.85deg)";
    });
  });
};
