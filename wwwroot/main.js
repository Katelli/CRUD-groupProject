let toDoes = [];
let inputField = document.querySelector("input");
const addButton = document.querySelector("#add");

const container = document.querySelector("#container");
const deleteButton = document.querySelector("delete");

function createTodo(title) {
  const newTodo = {
    title: title,
    isComplete: false,
  };

  const newList = document.createElement("li");
  const label = document.createElement("label");
  const progress = document.createElement("p");
  const completeBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  label.textContent = title;

  newList.appendChild(label);
  newList.appendChild(progress);
  newList.appendChild(completeBtn);
  newList.appendChild(deleteBtn);
  deleteBtn.id = "delete";

  toDoes.push(newTodo);
  return newList;
}

function handleAddTodo() {
  inputValue = inputField.value;

  const newList = createTodo(inputValue);

  container.appendChild(newList);
}

addButton.addEventListener("click", handleAddTodo);
