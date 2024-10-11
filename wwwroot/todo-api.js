console.log("Todo API Module Loaded");

const apiVersion = "/api/v1";
const url = apiVersion;

async function fetchWrapper(adress, init) {
  try {
    const response = await fetch(adress, init);

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
  return fetchWrapper(url + "/todoes/", {
    method: "Post",
    headers: {
      "Content-Type": "/application.json",
    },
    body: JSON.stringify(todo),
  });
}

// Update
export async function updateTodo(id, todo) {
  return fetchWrapper(url + "/todoes/" + id, {
    method: "Put",
    headers: {
      "Content-Type": "/application.json",
    },
    body: JSON.stringify(todo),
  });
}

// Delete
export async function deleteTodo(id) {
  return fetchWrapper(url + "/todoes/" + id, {
    method: "Delete",
  });
}

// Read
export async function getAllTodoes() {
  return fetchWrapper(url + "/todoes/");
}

export async function getTodo(id) {
  return fetchWrapper(url + "/todoes/" + id);
}
