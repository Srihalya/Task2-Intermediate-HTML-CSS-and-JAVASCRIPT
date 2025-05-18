document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const formStatus = document.getElementById("formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();          
    clearErrors();              

    let isValid = true;
    if (!nameInput.value.trim()) {
      showError(nameInput, "Name is required.");
      isValid = false;
    }
    const emailPattern =
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!emailInput.value.trim()) {
      showError(emailInput, "Email is required.");
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email.");
      isValid = false;
    }
    if (isValid) {
      formStatus.textContent =
        "Thanks for reaching out – we'll respond soon!";
      form.reset();
      setTimeout(() => (formStatus.textContent = ""), 4000);
    }
  });
  function showError(inputEl, message) {
    const small = inputEl.parentElement.querySelector("small.error");
    small.textContent = message;
    small.style.visibility = "visible";
  }

  function clearErrors() {
    document
      .querySelectorAll("small.error")
      .forEach((el) => {
        el.textContent = "";
        el.style.visibility = "hidden";
      });
  }
  const todoInput = document.getElementById("todoInput");
  const addBtn = document.getElementById("addTodoBtn");
  const todoList = document.getElementById("todoList");

  addBtn.addEventListener("click", addTodo);
  todoInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") addTodo();
  });

  function addTodo() {
    const task = todoInput.value.trim();
    if (task === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>
      <button aria-label="Delete task">&times;</button>
    `;
    todoList.appendChild(li);
    todoInput.value = "";
    todoInput.focus();
  }
 todoList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.closest("li").remove();
    }
  });
});