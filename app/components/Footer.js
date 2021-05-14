export function Footer() {
  const $footer = document.createElement("header");
  $footer.classList.add("footer");
  $footer.innerHTML = `
        <div class="small__text">
            <a href="https://marvel.com">Data provided by Marvel. © 2021 MARVEL</a> — Choose Your Hero is coded with ♥ by <a href="https://github.com/Ceyene">Cyn Romero</a>
        </div>
    `;
  return $footer;
}
