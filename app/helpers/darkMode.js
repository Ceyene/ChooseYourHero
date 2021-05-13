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
