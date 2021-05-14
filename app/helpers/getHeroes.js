import { getData } from "./getData.js";
import { HeroCard } from "../components/HeroCard.js";
import api from "./marvel_api.js";

export function getHeroes(offset) {
  const { ENDPOINT, ALL_HEROES, PUBLIC_KEY } = api;
  const URL_ALL = `${ENDPOINT}${ALL_HEROES}?offset=${offset}&apikey=${PUBLIC_KEY}`;
  console.log(URL_ALL);

  //making data petitions
  getData({
    url: URL_ALL,
    cbSuccess: ({ data }) => {
      let heroesList = data.results;
      let html = "";
      document.querySelector(".loader").classList.add("hide");
      heroesList.forEach((hero) => {
        html += HeroCard(hero);
      });
      document.getElementById("heroes").innerHTML = html;
    },
  });
}
