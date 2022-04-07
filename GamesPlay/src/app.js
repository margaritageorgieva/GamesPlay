import { logoutUser } from "./api/data.js";
import { page } from "./lib.js";
import { updateNavigation } from "./utils.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { searchPage } from "./views/search.js";
import { registerPage } from "./views/register.js";

page("/", homePage);
page("/catalog", catalogPage);
page("/login", loginPage);
page("/register", registerPage);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page("/search", searchPage);

page.start();

// Logout
document.querySelector("#logoutButton").addEventListener("click", onLogout);
async function onLogout() {
  await logoutUser();

  updateNavigation();
  page.redirect("/");
}
updateNavigation();
