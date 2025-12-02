const todoInput = document.querySelector(".todo__input");
const btn = document.querySelector(".btn");
const todoTask = document.querySelector(".todo__task");
const emptyDesc = document.querySelector(".empty__desc");
const createdCounter = document.querySelector(".created .counter");
const doneCounter = document.querySelector(".done .counter");

// Добавление задачи
btn.addEventListener("click", addTask);

function addTask(e) {
  e.preventDefault();

  if (todoInput.value.trim() === "") {
    alert("Пустая строка!");
    return;
  }

  const taskHTML = `
    <li class="todo__task-item">
      <input type="checkbox" class="task-checkbox">
      <span class="task-text">${todoInput.value}</span>
      <button class="delete-btn" data-action="delete" aria-label="Удалить задачу">
        <img class="delete-icon" src="/img/delete-trash.svg" alt="">
      </button>
    </li>
  `;

  todoTask.insertAdjacentHTML("beforeend", taskHTML);
  todoInput.value = "";
  todoInput.focus();

  updateCounters();

  if (todoTask.children.length > 0) {
    emptyDesc.classList.add("none");
  }
}

// Удаление задачи
todoTask.addEventListener("click", function (e) {
  if (e.target.closest('[data-action="delete"]')) {
    e.target.closest(".todo__task-item").remove();
    updateCounters();

    if (todoTask.children.length === 0) {
      emptyDesc.classList.remove("none");
    }
  }
});

// Отметка задачи как выполненной
todoTask.addEventListener("change", function (e) {
  if (e.target.classList.contains("task-checkbox")) {
    updateCounters();
  }
});

// Функция обновления счетчиков
function updateCounters() {
  const totalTasks = todoTask.children.length;
  const completedTasks = document.querySelectorAll(
    ".task-checkbox:checked"
  ).length;

  createdCounter.textContent = totalTasks;
  doneCounter.textContent = `${completedTasks} из ${totalTasks}`;
}
