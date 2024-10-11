import * as todoAPI from "./todo-api.js";

console.log("Todo List Loaded");

const todoes = await todoAPI.getAllTodoes();

console.log(todoes);
