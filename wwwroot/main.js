import * as todoAPI from "./todo-api.js";

console.log("Todo List Loaded");

const todos = await todoAPI.getAllTodos();

console.log(todos);
