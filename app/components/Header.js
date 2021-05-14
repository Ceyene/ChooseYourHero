export function Header() {
  const $header = document.createElement("header");
  $header.classList.add("navbar");
  $header.setAttribute("id", "navbar");
  $header.innerHTML = `
        <a href="#/">
            <img src="app/assets/images/Avengers.png" alt="logo" id="logo" class="logo" />
        </a>
        <nav>
            <ul class="menu" id="menu">
                <li class="menu__item" id="fav_link"><a href="#/favorites">My Team</a></li>
            </ul>
        </nav>
    `;
  return $header;
}
