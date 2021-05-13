/* ---------------- Hamburguer Menu -------------- */
//Variables
const burger = document.getElementById("burger");
const burger_icon = document.getElementById("burger_icon");
const menu = document.getElementById("menu");

//When click on the burger button, it shows the menu
burger.addEventListener("click", () => {
  burger_icon.classList.toggle("fa-bars");
  burger_icon.classList.toggle("fa-times");
  menu.classList.toggle("invisible");
  menu.classList.toggle("visible");
});

/* ----------- End of Hamburguer Menu ------------ */

/* ---------- Logo Reloads Landing Page ---------- */

// When click logo, reload page
logo.addEventListener("click", () => {
  //reload page
  location.reload();
});

/* ------ End of Logo Reloads Landing page ------- */
