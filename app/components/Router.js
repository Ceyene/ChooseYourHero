import { getHeroes } from "../helpers/getHeroes.js";
import { Title } from "./Title.js";
import { HeroSearch } from "./HeroSearch.js";
import { Heroes } from "./Heroes.js";
import { Loader } from "./Loader.js";
import { PaginationButtons } from "./PaginationButtons.js";

export function Router() {
  const d = document;
  const w = window;
  let { hash } = location;
  const $mainContainer = d.getElementById("main");
  $mainContainer.innerHTML = "";

  if (!hash || hash === "#/") {
    //adding sections components to main
    getHeroes(0);
    $mainContainer.appendChild(Title());
    $mainContainer.appendChild(HeroSearch());
    $mainContainer.appendChild(Heroes());
    $mainContainer.appendChild(Loader());
    $mainContainer.appendChild(PaginationButtons());
  } else if (hash.includes("#/favorites")) {
    $mainContainer.appendChild(Loader());
  } else {
    $mainContainer.appendChild(Loader());
  }
}
