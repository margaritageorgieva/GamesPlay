import { createComments, deleteItem, getById, getComments } from "../api/data.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../utils.js";

const template = ( item, onDelete, onComment, comments, userData) => html` <section id="game-details">
  <h1>Game Details</h1>
  <div class="info-section">
    <div class="game-header">
      <img class="game-img" src=${item.imageUrl} />
      <h1>${item.title}</h1>
      <p class="type">Category:<small> ${item.category}</small></p>
    </div>

    <p class="text">${item.summary}</p>

    <!-- ( for Guests and Users ) -->
    <div class="details-comments">
      <h2>Comments:</h2>
      <ul> 
      ${comments.length > 0
          ? comments.map((c) => html`<li class="comment"><p>${c.username} : <small id="comment-content">${c.comment}</small></p></li>`)
          : html`<p class="no-comment">No comments</p>`}
      </ul>
    </div>

    <!-- Edit/Delete buttons - Only for creator of this game -->
    ${item.isOwner == true
      ? html` <div class="buttons">
          <a href=${`/edit/${item._id}`} class="button">Edit</a>
          <a href="javascript:void(0)" @click=${onDelete} class="button">Delete</a>
        </div>`
      : null}
  </div>


  ${userData
    ? html`<article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${onComment} class="form">
          <textarea id="commentInput" name="comment" placeholder="Comment.."></textarea>
          <input id="commentBtn" class="btn submit" type="submit" value="Add Comment"/>
        </form>
      </article>`
    : null}
  <
</section>`;

const root = document.querySelector("#main-content");

export async function detailsPage(ctx) {
  const gameId = ctx.params.id;
  const item = await getById(gameId);
  const userData = getUserData();
  const comments = await getComments(gameId);

  if (userData && userData._id == item._ownerId) {
    item.isOwner = true;
  }
  render(template(item, onDelete, onComment, comments, userData), root);

  async function onDelete(){
    const choice = confirm("Are you sure you want to delete this Game ?");

    if(choice == true){
      await deleteItem(gameId)
      page.redirect('/');
    }
    
  }

  async function onComment(e) {
    e.preventDefault();
    let comment = document.getElementById("commentInput").value;
    await createComments(gameId, comment, userData.username);

    let comments = await getComments(gameId);
    render(template(item, onDelete, onComment, comments, userData), root);
  }
}
