import api from "./app/helpers/marvel_api.js";
import { getData } from "./app/helpers/getData.js";

export function App() {
  document.getElementById(
    "root"
  ).innerHTML = `<h1>Bienvenidos a mi primer SPA con Vainilla JS</h1>`;
}

getData({
  url: api.URL_ALL,
  cbSuccess: ({ data }) => {
    console.log(data.results);
  },
});
