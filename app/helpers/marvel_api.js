/* -------------------- Api Data ------------------ */

const PUBLIC_KEY = "22a1d52e2fa189d160b90406a5b38847";
const ENDPOINT = "http://gateway.marvel.com/";
const ALL_HEROES = "v1/public/characters";
const BY_NAME = "v1/public/characters?nameStartsWith=";
const URL_BY_NAME = `${ENDPOINT}${BY_NAME}-----&apikey=${PUBLIC_KEY}`;

export default {
  PUBLIC_KEY,
  ENDPOINT,
  ALL_HEROES,
  BY_NAME,
};

/* ---------------- End of Api Data -------------- */
