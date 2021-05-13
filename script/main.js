/* -------------------- Main JS ------------------ */

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

/* ------------------ Dark Mode -------------------- */
//Variables
const theme_btn = document.getElementById("theme_btn");
const body = document.getElementById("body");
const logo = document.getElementById("logo");
const theme_link = document.getElementById("theme_link");

// When click on "DARK MODE" link, apply dark mode
theme_btn.addEventListener("click", (e) => {
  e.preventDefault();
  //First, we validate if dark mode is not already applied
  if (body.classList == "") {
    //Apply dark mode
    body.classList.add("dark");
    //Change in link to "LIGHT MODE" text
    theme_link.textContent = "Light Mode";
  } else {
    //If dark mode is applied, when click on the link, we remove it
    body.classList.remove("dark");
    //Change in link to "DARK MODE" text
    theme_link.textContent = "Dark Mode";
  }
});
/* -------------- End of Dark Mode ----------------- */

/* ------------- Reload Landing Page --------------- */

// When click logo, reload page
logo.addEventListener("click", () => {
  //reload page
  location.reload();
});

/* ---------- End of Reload Landing page ----------- */
