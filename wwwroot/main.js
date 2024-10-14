import * as todoAPI from "./todo-api.js";

console.log("Todo List Loaded");

const todos = await todoAPI.getAllTodos();

console.log(todos);

/* const inputField = document.getElementById('input')
const labelContainer = document.labelContainer('label')



const node.addEventListener("keyup"), ({key}) => {
    if (key === "Enter") { Event createElement
        }
}
        */
