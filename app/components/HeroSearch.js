export function HeroSearch() {
  const $search = document.createElement("section");
  $search.classList.add("search");
  $search.setAttribute("id", "search");
  $search.innerHTML = `
    <form class="search__container">
        <input class="search__input" id="search_input" autocomplete="off" type="search" name="search" placeholder="Write the name of your hero and click Enter...">
        <button type="submit" class="right__btn hide" id="search_btn">
            <i id="glass" class="fas fa-search"></i>
        </button>
    </form>
    `;

  document.addEventListener("submit", (e) => {
    if (!e.target.matches(".search__container")) return false;
    e.preventDefault();
    localStorage.setItem("HeroValue", e.target.search.value);
    location.hash = `#/search?search=${e.target.search.value}`;
  });
  return $search;
}
