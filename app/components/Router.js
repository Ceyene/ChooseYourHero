import api from "../helpers/marvel_api.js";
import { getData } from "../helpers/getData.js";
import { HeroCard } from "./HeroCard.js";
import { Title } from "./Title.js";
import { HeroSearch } from "./HeroSearch.js";
import { Heroes } from "./Heroes.js";
import { Loader } from "./Loader.js";

export function Router() {
  const d = document;
  const w = window;
  let { hash } = location;
  const $mainContainer = d.getElementById("main");
  const $rootContainer = document.getElementById("root");
  $mainContainer.innerHTML = "";

  if (!hash || hash === "#/") {
    //adding sections components to main
    $mainContainer.appendChild(Title());
    $mainContainer.appendChild(HeroSearch());
    $mainContainer.appendChild(Heroes());
    $mainContainer.appendChild(Loader());
  } else if (hash.includes("#/favorites")) {
    $mainContainer.appendChild(Loader());
  } else {
    $mainContainer.appendChild(Loader());
  }

  //making data petitions
  //   getData({
  //     url: api.URL_ALL,
  //     cbSuccess: ({ data }) => {
  //       let heroesList = data.results;
  //       let html = "";
  //       d.querySelector(".loader").classList.add("hide");
  //       heroesList.forEach((hero) => {
  //         html += HeroCard(hero);
  //       });
  //       d.getElementById("heroes").innerHTML = html;
  //     },
  //   });
}
