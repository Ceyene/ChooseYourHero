import { Header } from "./app/components/Header.js";
import { Title } from "./app/components/Title.js";
import { HeroSearch } from "./app/components/HeroSearch.js";
import { Loader } from "./app/components/Loader.js";
import { Heroes } from "./app/components/Heroes.js";
import { Router } from "./app/components/Router.js";
import { Footer } from "./app/components/Footer.js";

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
  Router();
}
