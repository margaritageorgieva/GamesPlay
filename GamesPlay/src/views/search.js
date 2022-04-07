import { getByCategory } from "../api/data.js";
import { html, render } from "../lib.js";

const template = (onSearch, games) => html`<section id="search-page">
  <h1>Search Game by Category</h1>
  <div class="container">
    <input
      id="search-input"
      type="text"
      name="search"
      placeholder="Enter desired category"
    />
    <button @click=${onSearch} class="search-btn">Search</button>

    ${games
      ? games.length == 0
        ? html`
            <h3 class="no-articles">There are no games in this category</h3>
          `
        : games.map(
            (game) => html`<div class="allGames">
              <div class="allGames-info search">
                <img src=${game.imageUrl} />
                <h6>${game.title}</h6>
                <h2>Category: <small>${game.category}</small></h2>

                <a href="/details/${game._id}" class="details-button"
                  >Details</a
                >
              </div>
            </div>`
          )
      : null}
  </div>
</section>`;

const root = document.querySelector("#main-content");

export async function searchPage() {
  render(template(onSearch), root);
  async function onSearch() {
    let input = document.querySelector("#search-input");

    try {
      if (input.value.trim() == "") {
        return alert("Please, enter a game category!");
      }
      const games = await getByCategory(input.value);
      render(template(onSearch, games), root);
    } catch (err) {
      return err.message;
    }
    input.value = "";
  }
}
