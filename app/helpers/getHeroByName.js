import { getData } from "./getData.js";
import { HeroCard } from "../components/HeroCard.js";
import api from "./marvel_api.js";

export function getHeroByName(query) {
  const { ENDPOINT, BY_NAME, PUBLIC_KEY } = api;
  const URL_BY_NAME = `${ENDPOINT}${BY_NAME}${query}&apikey=${PUBLIC_KEY}`;
  //making data petitions
  getData({
    url: URL_BY_NAME,
    cbSuccess: ({ data }) => {
      let heroes = data.results;
      let html = "";
      document.querySelector(".loader").classList.add("hide");
      heroes.forEach((hero) => {
        html += HeroCard(hero);
      });
      document.getElementById("heroes").innerHTML = html;
    },
  });
}
