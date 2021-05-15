export function Header() {
  const $header = document.createElement("header");
  $header.classList.add("navbar");
  $header.setAttribute("id", "navbar");
  $header.innerHTML = `
        <a href="#/">
            <img src="app/assets/images/Avengers.png" alt="logo" id="logo" class="logo" />
        </a>
    `;
  return $header;
}
