export function Heroes(props) {
  const $heroes = document.createElement("section");
  $heroes.classList.add("heroes");
  $heroes.setAttribute("id", "heroes");
  return $heroes;
}
