import { Header } from "./app/components/Header.js";
import { Router } from "./app/components/Router.js";
import { Footer } from "./app/components/Footer.js";
import { Pagination } from "./app/helpers/pagination.js";

export function App() {
  const $root = document.getElementById("root");
  $root.innerHTML = "";
  //adding header component
  $root.appendChild(Header());
  //creating main section
  const $main = document.createElement("main");
  $main.id = "main";
  $main.classList.add("main");
  $root.appendChild($main);
  //adding footer component
  const $footer = document.createElement("footer");
  $footer.appendChild(Footer());
  $root.appendChild($footer);
  Pagination();
  Router();
}
