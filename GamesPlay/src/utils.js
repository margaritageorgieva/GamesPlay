export function getUserData() {
  return JSON.parse(sessionStorage.getItem("userData"));
}

export function setUserData(userData) {
  sessionStorage.setItem("userData", JSON.stringify(userData));
}

export function clearUserData() {
  sessionStorage.removeItem("userData");
}

// Update user nav
let userNav = document.querySelector("#user");
let guestNav = document.querySelector("#guest");

export function updateNavigation() {
  const userData = getUserData();

  if (userData) {
    userNav.style.display = "inline-block";
    guestNav.style.display = "none";
  } else {
    userNav.style.display = "none";
    guestNav.style.display = "inline-block";
  }
}
