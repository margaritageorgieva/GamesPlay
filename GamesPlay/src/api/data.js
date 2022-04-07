import * as api from "./api.js";

export const registerUser = api.register;
export const loginUser = api.login;
export const logoutUser = api.logout;

const endpoints = {
  all: "/data/games",
  byId: "/data/games/",
  catalog: "/data/games?sort=category:asc",
  home: "/data/games?sortBy=_createdOn%20desc",
  comments: (id) => `/data/comments?where=gameId%3D%22${id}%22`,
  byCategory: (c) => `/data/games?where=category%20LIKE%20%22${c}%22`,
};

export function getAll() {
  return api.get(endpoints.home);
}

export function getAllForCatalog() {
  return api.get(endpoints.catalog);
}

export function getById(id) {
  return api.get(endpoints.byId + id);
}

export function create(data) {
  return api.post(endpoints.all, data);
}

export function editItem(id, data) {
  return api.put(endpoints.byId + id, data);
}

export function deleteItem(id) {
  return api.del(endpoints.byId + id);
}

export function getComments(id) {
  return api.get(endpoints.comments(id));
}

export function createComments(gameId, comment, username) {
  return api.post("/data/comments", { gameId, comment, username });
}

export function getByCategory(c) {
  return api.get(endpoints.byCategory(c));
}
