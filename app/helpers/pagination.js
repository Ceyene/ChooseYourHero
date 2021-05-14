import { getHeroes } from "./getHeroes.js";

export function pagination() {
  const $nextButton = document.getElementById("button-next");
  const $prevButton = document.getElementById("button-prev");
  let offset = 0;
  if (offset > 0) {
    $prevButton.classList.remove("invisible");
    $prevButton.addEventListener("click", () => {
      offset--;
      getHeroes(offset);
    });
  }

  $nextButton.addEventListener("click", () => {
    offset++;
    getHeroes(offset);
    console.log(offset);
  });
}
