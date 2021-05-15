export function Hero(props) {
  const { name, description, thumbnail, urls } = props;
  const url = urls[0].url;
  const img = `${thumbnail.path}.${thumbnail.extension}`;
  const heroDescription =
    description === "" ? "Description not available." : description;
  return `
        <article class="hero__page">
            <img class="hero__page--img" src=${img} alt=${name}/>
            <div>
                <h2 class="section__title" >${name}</h2>
                <p class="text" >${heroDescription}</p>
                <a class="see_more_title" href=${url} >See more at the official web</a>
            </div>
        </article>
    `;
}
