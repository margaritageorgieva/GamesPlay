import { create } from "../api/data.js";
import { html, page, render } from "../lib.js";

const template = () => html` <section id="create-page" class="auth">
  <form @submit=${onSubmit} id="create">
    <div class="container">
      <h1>Create Game</h1>
      <label for="leg-title">Legendary title:</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Enter game title..."
      />

      <label for="category">Category:</label>

      <input
        type="text"
        id="category"
        name="category"
        placeholder="Enter game category..."
      />

      <label for="game-img">Image:</label>
      <input
        type="text"
        id="imageUrl"
        name="imageUrl"
        placeholder="Upload a photo..."
      />

      <label for="summary">Summary:</label>
      <textarea name="summary" id="summary"></textarea>
      <input class="btn submit" type="submit" value="Create Game" />
    </div>
  </form>
</section>`;

const root = document.querySelector("#main-content");

async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const entries = Array.from(formData.entries());
  const data = entries.reduce(
    (acc, [k, v]) => Object.assign(acc, { [k]: v.trim() }),
    {}
  );
  // Check for empty fields :
  let empty = entries.filter(([name, value]) => value.trim() == "");
  if (empty.length > 0) {
    return alert("All fields are required!");
  }

  const res = await create(data);
  page.redirect("/");
}

export function createPage() {
  render(template(), root);
}
