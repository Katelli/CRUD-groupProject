console.log("Todo API Module Loaded");

const url = "/";

async function fetchWrapper(adress) {
  try {
    const response = await fetch(adress);

    if (!response.ok) {
      return false;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
}

//      API Wrappers
// Create
export async function createTodo(todo) {
  return fetchWrapper(url + "todos/", {
    method: "Post",
    headers: {
      "Content-Type": "/application.json",
    },
    body: JSON.stringify(todo),
  });
}

// Update
export async function updateTodo(id, todo) {
  return fetchWrapper(url + "todos/" + id, {
    method: "Put",
    headers: {
      "Content-Type": "/application.json",
    },
    body: JSON.stringify(todo),
  });
}

// Delete
export async function deleteTodo(id) {
  return fetchWrapper(url + "todos/" + id, {
    method: "Delete",
  });
}

// Read
export async function getAllTodos() {
  return fetchWrapper(url + "todos/");
}

export async function getTodo(id) {
  return fetchWrapper(url + "todos/" + id);
}
