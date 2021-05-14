/* ---------------- Hamburguer Menu -------------- */
const BURGER = document.getElementById("burger");
const BURGER_ICON = document.getElementById("burger_icon");
const MENU = document.getElementById("menu");

//When click on the burger button, it shows the menu
BURGER.addEventListener("click", () => {
  BURGER_ICON.classList.toggle("fa-bars");
  BURGER_ICON.classList.toggle("fa-times");
  MENU.classList.toggle("invisible");
  MENU.classList.toggle("visible");
});

/* ----------- End of Hamburguer Menu ------------ */

/* ---------- Logo Reloads Landing Page ---------- */
const LOGO = document.getElementById("logo");

// A click on the logo reloads the page
LOGO.addEventListener("click", () => {
  //reload page
  location.reload();
});

/* ------ End of Logo Reloads Landing page ------- */
