export function PaginationButtons() {
  const $pagination = document.createElement("div");
  $pagination.classList.add("pagination");
  $pagination.innerHTML = `
    <button class="button__prev invisible" id="button-prev">Previous</button>
    <button class="button__next" id="button-next">Next</button>
  `;
  return $pagination;
}
