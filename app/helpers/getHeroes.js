import { getData } from "./getData.js";
import { HeroCard } from "../components/HeroCard.js";
import api from "./marvel_api.js";

export function getHeroes(offset) {
  const { ENDPOINT, ALL_HEROES, PUBLIC_KEY } = api;
  const URL_ALL = `${ENDPOINT}${ALL_HEROES}?offset=${offset}&apikey=${PUBLIC_KEY}`;

  //making data petitions
  getData({
    url: URL_ALL,
    cbSuccess: ({ data }) => {
      let { results, offset, total, count } = data;
      let html = "";
      let $prevlink;
      let $nextlink;
      document.querySelector(".loader").classList.add("hide");
      //pagination
      $prevlink =
        offset > 0
          ? `<button class="button__prev" id="button-prev">Previous</button>`
          : "";
      $nextlink =
        total > count
          ? `<button class="button__next" id="button-next">Next</button>`
          : "";
      const $paginationContainer = document.querySelector(".pagination");
      $paginationContainer.innerHTML = $prevlink + "" + $nextlink;
      //rendering results
      results.forEach((hero) => {
        html += HeroCard(hero);
      });
      document.getElementById("heroes").innerHTML = html;
    },
  });
}
