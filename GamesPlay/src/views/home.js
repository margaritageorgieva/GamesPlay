import { getAll } from "../api/data.js";
import { html, render } from "../lib.js";

const template = (items) => html`
  <section id="welcome-world">
    <div class="welcome-message">
      <h2>ALL new games are</h2>
      <h3>Only in GamesPlay</h3>
    </div>
    <img src="./images/four_slider_img01.png" alt="hero" />

    <div id="home-page">
      <h1>Latest Games</h1>
      <div id="all-games">
        ${items.length == 0
          ? html` <p class="no-articles">No games yet</p>`
          : items.map(
              (item) => html` <div class="game">
                <div class="image-wrap">
                  <img src=${item.imageUrl} />
                </div>
                <h3>${item.title}</h3>
                <div class="rating">
                  <span>☆</span><span>☆</span><span>☆</span><span>☆</span
                  ><span>☆</span>
                </div>
                <div class="data-buttons">
                  <a href="/details/${item._id}" class="btn details-btn"
                    >Details</a
                  >
                </div>
              </div>`
            )}
      </div>
    </div>
  </section>
`;

const root = document.querySelector("#main-content");

export async function homePage() {
  let items = await getAll();
  items = items.splice(0, 3);

  render(template(items), root);
}
