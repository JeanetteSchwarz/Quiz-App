// Button switch dark/lightmode //

const bodyElement = document.querySelector('[data-js="body"]');

const togglebutton = document.querySelector('[data-js="toggle-button"]');

togglebutton.addEventListener("click", () => {
  bodyElement.classList.toggle("switchdark");
});

//Bookmark-Button///

const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.add("buttonActive svg");
});

// Button show/hide Answer //
const answerElement = document.querySelector('[data-js="answerOne"]');

const toggleAnswer = document.querySelector('[data-js="answerButton"]');

toggleAnswer.addEventListener("click", () => {
  answerElement.classList.toggle("showAnswer");
});

/* Vorher abfragen welche Umgebung voreingestellt ist.
Bei darkmode direkt im darkmode laden, default lightmode*/

// Für Bookmark:
// Button --> aktivieren
// js: Button.addEventListener("click", () => {
// bookmarkElement.classList.add("bookmarked")
//})

// if Button is bookmarked show on Bookmark page
