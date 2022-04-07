import { clearUserData, getUserData, setUserData } from "../utils.js";

const host = "http://localhost:3030";

// Universal function for requests
async function request(url, options) {
  try {
    const response = await fetch(host + url, options);

    if (!response.ok) {
      if (response.status == 403) {
        clearUserData();
        //sessionStorage.removeItem("userData");
      }
      const err = await response.json();
      throw new Error(err.message);
    }

    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

function getOptions(method = "get", body) {
  const options = {
    method,
    headers: {},
  };

  if (body !== undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  const userData = getUserData();

  if (userData != null) {
    options.headers["X-Authorization"] = userData.accessToken;
  }

  return options;
}

export async function get(url) {
  return await request(url, getOptions());
}

export async function post(url, data) {
  return await request(url, getOptions("post", data));
}

export async function put(url, data) {
  return await request(url, getOptions("put", data));
}

export async function del(url) {
  return await request(url, getOptions("delete"));
}

export async function register(email, password, username) {
  const result = await post("/users/register", { email, password, username });
  setUserData(result);
}

export async function login(email, password) {
  const result = await post("/users/login", { email, password });
  setUserData(result);
}

export async function logout() {
  await get("/users/logout");
  clearUserData();
}
