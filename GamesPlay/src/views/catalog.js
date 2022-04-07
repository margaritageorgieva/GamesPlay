import { getAllForCatalog } from "../api/data.js";
import { html, render } from "../lib.js";

const template = (allItems, onLike) => html` <section id="catalog-page">
  <h1>All Games</h1>
  ${allItems.length == 0
    ? html` <h3 class="no-articles">No articles yet</h3> `
    : allItems.map(
        (item) => html`<div class="allGames">
          <div class="allGames-info">
            <img src=${item.imageUrl} />
            <h6>${item.category}</h6>
            <h2>${item.title}</h2>
            <a href="/details/${item._id}" class="details-button">Details</a>
            <button id="like" @click=${onLike}>
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>`
      )}
</section>`;

const root = document.querySelector("#main-content");

export async function catalogPage() {
  let allItems = await getAllForCatalog();

  function onLike(e) {
    let likeBtn = e.target;

    if (likeBtn.style.color !== "rgb(255, 0, 35)") {
      likeBtn.style.color = "rgb(255, 0, 35)";
    } else {
      likeBtn.style.color = "rgb(135, 134, 148)";
    }
  }

  render(template(allItems, onLike), root);
}
