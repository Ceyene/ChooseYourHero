import api from "./app/helpers/marvel_api.js";
import { getData } from "./app/helpers/getData.js";
import { Title } from "./app/components/Title.js";

export function App() {
  const d = document;
  const $root = d.getElementById("root");
  $root.appendChild(Title());
}

getData({
  url: api.URL_ALL,
  cbSuccess: ({ data }) => {
    console.log(data.results);
  },
});
