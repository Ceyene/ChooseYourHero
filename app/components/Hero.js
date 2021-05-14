export function Hero(props) {
  const { name, description, thumbnail } = props;
  const img = `${thumbnail.path}.${thumbnail.extension}`;
  return `
        <article class="hero__page">
            <img class="hero__page--img" src=${img} alt=${name}/>
            <div>
                <h2 class="section__title" >${name}</h2>
                <p class="text" >${description}</p>
            </div>
        </article>
    `;
}
