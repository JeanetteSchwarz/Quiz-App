//Button switch dark/lightmode //

const bodyElement = document.querySelector('[data-js="body"]');

const togglebutton = document.querySelector('[data-js="toggle-button"]');

togglebutton.addEventListener("click", () => {
  bodyElement.classList.toggle("switchdark");
});
