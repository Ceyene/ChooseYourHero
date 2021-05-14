export function HeroCard(props) {
  const { name, id, thumbnail } = props;
  const img = `${thumbnail.path}.${thumbnail.extension}`;
  return `
        <article class="hero">
            <img class="hero__img" src=${img} alt=${name} />
            <div class="hero__info">
                <img class="hero__info--button" src="/app/assets/images/favorites.svg" alt="Add to my favorites team"/>
                <h3 class="hero__info--name">${name}</h3>
            </div>
        </article>
    `;
}
