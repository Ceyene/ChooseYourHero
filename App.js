import api from "./app/helpers/marvel_api.js";
import { getData } from "./app/helpers/getData.js";
import { Header } from "./app/components/Header.js";
import { Title } from "./app/components/Title.js";
import { Loader } from "./app/components/Loader.js";

export function App() {
  const d = document;
  const $root = d.getElementById("root");
  $root.appendChild(Header());
  const $main = d.createElement("main");
  $main.classList.add("main");
  $root.appendChild($main);
  $main.appendChild(Title());
  $main.appendChild(Loader());
}

getData({
  url: api.URL_ALL,
  cbSuccess: ({ data }) => {
    console.log(data.results);
  },
});
