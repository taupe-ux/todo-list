const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todo";

function savedTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteBtn(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  savedTodo();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteBtn);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const todoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(todoObj);
  paintTodo(todoObj);
  savedTodo();
}

todoForm.addEventListener("submit", handleTodo);

const SAVEDTODO = localStorage.getItem(TODOS_KEY);

if (SAVEDTODO !== null) {
  const parseSavedTodo = JSON.parse(SAVEDTODO);
  toDos = parseSavedTodo;
  parseSavedTodo.forEach(paintTodo);
}
