export async function getData(props) {
  let { url, cbSuccess } = props;

  try {
    const response = await fetch(url);
    const data = await response.json();
    cbSuccess(data);
  } catch (err) {
    let message = err.statusText || "Ups, something went wrong...";
    document.querySelector(".loader").classList.add("hide");
    document.getElementById("heroes").innerHTML = `
            <div class="error">
                <p>Error ${err.status}: ${message}</p>
            </div>
        `;
  }
}
