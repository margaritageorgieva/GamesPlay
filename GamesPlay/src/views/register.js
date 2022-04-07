import { registerUser } from "../api/data.js";
import { html, render, page } from "../lib.js";
import { updateNavigation } from "../utils.js";

const template = () => html` <section id="register-page" class="content auth">
  <form @submit=${onSubmit} id="register">
    <div class="container">
      <div class="brand-logo"></div>
      <h1>Register</h1>

      <label for="username">Username:</label>
      <input type="nickname" id="username" name="username" />

      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="maria@email.com"
      />

      <label for="pass">Password:</label>
      <input type="password" name="password" id="register-password" />

      <label for="con-pass">Confirm Password:</label>
      <input type="password" name="confirm-password" id="confirm-password" />

      <input class="btn submit" type="submit" value="Register" />

      <p class="field">
        <span>If you already have profile click<a href="/login">here</a></span>
      </p>
    </div>
  </form>
</section>`;

const root = document.querySelector("#main-content");

async function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  const username = formData.get("username").trim();
  const email = formData.get("email").trim();
  const password = formData.get("password").trim();
  const repass = formData.get("confirm-password").trim();

  if (email === "" || password == "" || username == "") {
    return alert("All fields are required! Please fill them out!");
  }
  if (password !== repass) {
    return alert("Passwords don't match! Enter the correct passwords!");
  }

  await registerUser(email, password, username);

  updateNavigation();
  page.redirect("/");
}

export function registerPage() {
  render(template(), root);
}
