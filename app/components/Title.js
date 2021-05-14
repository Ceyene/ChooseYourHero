export function Title() {
  const $section = document.createElement("section");
  $section.classList.add("welcome");
  $section.innerHTML = `
        <h1 class="main__title">Choose your heroes</h1>
        <p class="main__text">and go save the world!</p>
    `;
  return $section;
}
