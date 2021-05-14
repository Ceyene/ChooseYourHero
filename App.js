import api from "./app/helpers/marvel_api.js";
import { getData } from "./app/helpers/getData.js";
import { Header } from "./app/components/Header.js";
import { Title } from "./app/components/Title.js";
import { HeroSearch } from "./app/components/HeroSearch.js";
import { Loader } from "./app/components/Loader.js";
import { Heroes } from "./app/components/Heroes.js";
import { HeroCard } from "./app/components/HeroCard.js";
import { Footer } from "./app/components/Footer.js";

export function App() {
  const d = document;
  const $root = d.getElementById("root");
  //adding header component
  $root.appendChild(Header());
  //creating main section
  const $main = d.createElement("main");
  $main.classList.add("main");
  $root.appendChild($main);
  //adding sections components to main
  $main.appendChild(Title());
  $main.appendChild(HeroSearch());
  $main.appendChild(Heroes());
  $main.appendChild(Loader());
  //adding footer component
  const $footer = d.createElement("footer");
  $footer.appendChild(Footer());
  $root.appendChild($footer);

  //making data petition
  getData({
    url: api.URL_ALL,
    cbSuccess: ({ data }) => {
      let heroesList = data.results;
      let html = "";
      d.querySelector(".loader").classList.add("hide");
      heroesList.forEach((hero) => {
        html += HeroCard(hero);
      });
      d.getElementById("heroes").innerHTML = html;
    },
  });
}
