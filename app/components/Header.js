export function Header() {
  const $header = document.createElement("header");
  $header.classList.add("navbar");
  $header.setAttribute("id", "navbar");
  $header.innerHTML = `
        <a href="index.html">
            <img src="app/assets/images/Avengers.png" alt="logo" id="logo" class="logo" />
        </a>
        <nav>
            <button id="burger" class="burger"><i id="burger_icon" class="fas fa-bars"></i></button>
            <ul class="menu invisible" id="menu">
                <li class="menu__item" id="theme_btn"><a href="#" id="theme_link">Dark Mode</a></li>
                <li class="menu__line"></li>
                <li class="menu__item" id="fav_link"><a href="">My Team</a></li>
                <li class="menu__line"></li>
            </ul>
        </nav>
    `;
  return $header;
}
