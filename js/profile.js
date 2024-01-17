const bodyElement = document.querySelector('[data-js="body"]');

const togglebutton = document.querySelector('[data-js="toggle-button"]');

togglebutton.addEventListener("click", () => {
  bodyElement.classList.toggle("switchdark");
});

/* Einzelner Button für Darkmode, hier müsste noch ein zweiter Button für lightmode ergänzt werden.

const darkbutton = document.querySelector('[data-js="darkmode"]');

darkbutton.addEventListener("click", () => {
  bodyElement.classList.add("switchdark");
});*/

/* Vorher abfragen welche Umgebung voreingestellt ist.
Bei darkmode direkt im darkmode laden, default lightmode*/

// Für Bookmark:
// Button --> aktivieren
// js: Button.addEventListener("click", () => {
// bookmarkElement.classList.add("bookmarked")
//})

// if Button is bookmarked show on Bookmark page
