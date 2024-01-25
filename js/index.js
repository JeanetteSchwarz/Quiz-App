//Bookmark-Button///

const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("buttonActive");
});

/*------------------------------------------*/

//Answer-Button///

const answerButton = document.querySelector('[data-js="answerOne"]');
const answerElement = document.querySelector('[data-js="answerText"]');

console.log(answerButton);
console.log(answerElement);

answerButton.addEventListener("click", () => {
  answerElement.classList.toggle("hidden");
  changeButtonText();
});

//Text auf Answer-Button ändern//

const buttonText = document.querySelector('[data-js="answerOne"]');

/* console.log(answerElement.classList.contains("hidden")); */
/* console.log(answerElement.classList.contains("hidden")); */

/* function changeButtonText() {
  if (answerElement.classList.contains("hidden")) {
    console.log("Yeahhhhh");
  } else {
    console.log("Noooooooo");
  }
} */

function changeButtonText() {
  if (answerElement.classList.contains("hidden")) {
    buttonText.innerHTML = "Show Answer";
  } else {
    buttonText.innerHTML = "Hide Answer";
  }
}
