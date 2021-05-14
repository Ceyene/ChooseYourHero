export function getData(props) {
  let { url, cbSuccess } = props;

  fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message = err.statusText || "Ups, something went wrong...";
      document.getElementById("root").innerHTML = `
            <div class="error">
                <p>Error ${err.status}: ${message}</p>
            </div>
        `;
    });
}
