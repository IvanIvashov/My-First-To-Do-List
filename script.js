const todoInput = document.querySelector(".todo__input");
const btn = document.querySelector(".btn");
const todoTask = document.querySelector(".todo__task");
const delTask = document.querySelector(".delete-btn");
const emptyDesc = document.querySelector(".empty__desc");

// Добавление задачи
btn.addEventListener("click", addTask);

function addTask(e) {
  if (todoInput.value === "") {
    alert("Пустая строка!");
  } else {
    const taskHTML = ` <li class="todo__task-item">
              <input class="task-checkbox" type="checkbox" >
              <span class="task-text">${todoInput.value}</span>
    <button class="delete-btn" data-action="delete">
                <img class="delete-icon" src="/img/delete-trash.svg" alt="">
              </button>
            </li>`;

    todoTask.insertAdjacentHTML("beforeend", taskHTML);
  }
  //Очистка поля ввода
  todoInput.value = "";
  // Фокус на поле ввода
  todoInput.focus();
  // Проверка, если в списке задач более 0 элемента,скрываем его.
  if (todoTask.children.length > 0) {
    emptyDesc.classList.add("none");
  }
}

// Удаление задачи
todoTask.addEventListener("click", deleteTask);

function deleteTask(e) {
  if (e.target.dataset.action === "delete") {
    const parentNode = e.target.closest(".todo__task-item");
    parentNode.remove();
  }
  // Проверка, если в списке задач более нет элемента,открываем его.
  if (todoTask.children.length === 0) {
    emptyDesc.classList.remove("none");
  }
}
