import { getHeroes } from "./getHeroes.js";

export function Pagination() {
  let offset = 0;
  //next page
  document.addEventListener("click", (e) => {
    if (e.target.matches(".button__next")) {
      e.preventDefault();
      offset++;
      getHeroes(offset);
    }
  });

  //previous page
  document.addEventListener("click", (e) => {
    if (e.target.matches(".button__prev")) {
      e.preventDefault();
      offset--;
      getHeroes(offset);
    }
  });
}
