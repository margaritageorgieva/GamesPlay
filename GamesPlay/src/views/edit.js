import { editItem, getById } from "../api/data.js";
import { html, render, page } from "../lib.js";

const template = (item, onEdit) => html` <section id="edit-page" class="auth">
  <form @submit=${onEdit} id="edit">
    <div class="container">
      <h1>Edit Game</h1>
      <label for="leg-title">Legendary title:</label>
      <input type="text" id="title" name="title" .value=${item.title} />

      <label for="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        .value=${item.category}
      />

      <label for="game-img">Image:</label>
      <input
        type="text"
        id="imageUrl"
        name="imageUrl"
        .value=${item.imageUrl}
      />

      <label for="summary">Summary:</label>
      <textarea name="summary" id="summary"> ${item.summary}</textarea>
      <input class="btn submit" type="submit" value="Edit Game" />
    </div>
  </form>
</section>`;

const root = document.querySelector("#main-content");

export async function editPage(ctx) {
  const id = ctx.params.id;
  let item = await getById(id);

  async function onEdit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const entries = Array.from(formData.entries());
    const data = entries.reduce((acc, [k, v]) => Object.assign(acc, { [k]: v.trim() }),{});

    let values = Object.values(data);

    let empty = values.filter((v) => v.trim() == "");
    if (empty.length > 0) {
      return alert("All fields are required!");
    }

    await editItem(id, data);
    page.redirect(`/details/${id}`);
  }

  render(template(item, onEdit), root);
}
