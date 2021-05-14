export function HeroCard(props) {
  const { name, id, thumbnail } = props;
  const img = `${thumbnail.path}.${thumbnail.extension}`;

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".hero__img" || ".hero__info--name")) {
      return false;
    }
    const HERO_ID = e.target.getAttribute("id");
    localStorage.setItem("HeroId", HERO_ID);
  });

  return `
        <article class="hero">
            <a href="#/${id}">
                <img class="hero__img" src=${img} alt=${name} id=${id} />
            </a>
            <img class="hero__info--button" src="/app/assets/images/favorites.svg" alt="Add to my favorites team"/>
            <a href="#/${id}">
                <h3 class="hero__info--name">${name}</h3>
            </a>
        </article>
    `;
}
