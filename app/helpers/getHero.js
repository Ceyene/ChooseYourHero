import { getData } from "./getData.js";
import { Hero } from "../components/Hero.js";
import api from "./marvel_api.js";

export function getHero(id) {
  const { ENDPOINT, ALL_HEROES, PUBLIC_KEY } = api;
  const URL_BY_CHARACTER = `${ENDPOINT}${ALL_HEROES}/${id}?apikey=${PUBLIC_KEY}`;
  //making data petitions
  getData({
    url: URL_BY_CHARACTER,
    cbSuccess: ({ data }) => {
      const hero = data.results[0];
      let html = "";
      document.querySelector(".loader").classList.add("hide");
      html += Hero(hero);
      document.getElementById("heroes").innerHTML = html;
    },
  });
}
