import { getHeroes } from "../helpers/getHeroes.js";
import { getHeroByName } from "../helpers/getHeroByName.js";
import { Title } from "./Title.js";
import { HeroSearch } from "./HeroSearch.js";
import { Heroes } from "./Heroes.js";
import { Loader } from "./Loader.js";
import { PaginationButtons } from "./PaginationButtons.js";
import { getHero } from "../helpers/getHero.js";
import { Pagination } from "../helpers/pagination.js";

export function Router() {
  const d = document;
  const w = window;
  let { hash } = location;
  const $mainContainer = d.getElementById("main");
  $mainContainer.innerHTML = "";

  if (!hash || hash === "#/") {
    //adding sections components to main
    getHeroes();
    $mainContainer.appendChild(Title());
    $mainContainer.appendChild(HeroSearch());
    $mainContainer.appendChild(Heroes());
    $mainContainer.appendChild(Loader());
    $mainContainer.appendChild(PaginationButtons());
  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("HeroValue");
    $mainContainer.appendChild(HeroSearch());
    $mainContainer.appendChild(Heroes());
    $mainContainer.appendChild(Loader());
    if (!query) {
      return false;
    }
    getHeroByName(query, 0);
  } else {
    $mainContainer.appendChild(Heroes());
    const id = localStorage.getItem("HeroId");
    const heroId = id.substring(0, id.length);
    getHero(heroId);
    $mainContainer.appendChild(Loader());
  }
}
