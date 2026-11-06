const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");
const loginInfo = document.getElementById("login-info");
const todo = document.querySelector(".todo");
const todo_aside = document.querySelector(".todo_aside");

const CLASSNAME_HIDDEN = "hidden";
const USERNAME = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(CLASSNAME_HIDDEN);
  loginInfo.classList.add(CLASSNAME_HIDDEN);

  localStorage.setItem(USERNAME, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.classList.remove(CLASSNAME_HIDDEN);
  greeting.innerText = `Hello ${username}!`;
  todo.classList.remove(CLASSNAME_HIDDEN);
  todo_aside.classList.remove(CLASSNAME_HIDDEN);
}

const SAVEDUSERNAME = localStorage.getItem(USERNAME);

if (SAVEDUSERNAME === null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginInfo.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(SAVEDUSERNAME);
}
