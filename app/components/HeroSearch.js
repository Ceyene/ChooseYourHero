export function HeroSearch() {
  const $search = document.createElement("section");
  $search.classList.add("search");
  $search.setAttribute("id", "search");
  $search.innerHTML = `
    <div class="search__container">
        <button type="submit" class="search__btn hide" id="search_btn">
            <i id="glass" class="fas fa-search"></i>
        </button>
        <input class="search__input" id="search_input" autocomplete="off" type="text" placeholder="Search here...">
        <button class="right__btn" id="right_btn">
            <i id="right_icon" class="fas fa-search"></i>
        </button>
    </div>
    `;
  return $search;
}
