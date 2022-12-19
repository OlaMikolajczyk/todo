const incompleteTasks = document.getElementById("incomplete-tasks");
const completedTasks = document.getElementById("completed-tasks");
const addButton = document.getElementById("add-button");
const editButton = document.createElement("button");
editButton.classList.add("edit");
editButton.innerText = "Edit";

const todoItems = [
  {
    id: 1,
    name: "Learn React",
    isCompleted: false,
  },
];

localStorage.setItem("todoItems", JSON.stringify(todoItems));

addButton.addEventListener("click", () => {
  const newTaskName = document.getElementById("new-task").value;
  createNewTask(newTaskName);
});

const allEditButtons = [...document.getElementsByClassName("edit")];
allEditButtons.forEach((editButton) => {
  editButton.addEventListener("click", () => {
    const parent = editButton.parentNode;
    const label = parent.querySelector("label");
    const input = parent.querySelector("input[type=text]");
    const isEditing = parent.classList.contains("editMode");

    if (isEditing) {
      label.innerText = input.value;
    } else {
      input.value = label.innerText;
    }

    parent.classList.toggle("editMode");
  });
});

const allDeleteButtons = [...document.getElementsByClassName("delete")];
allDeleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener("click", () => {
    const parent = deleteButton.parentNode;
    parent.remove();
  });
});

const allCheckBoxes = [...document.querySelectorAll("input[type=checkbox]")];
allCheckBoxes.forEach((checkBox) => {
  checkBox.addEventListener("click", () => {
    const list = checkBox.parentNode.parentNode;
    const listItem = checkBox.parentNode;
    const isInCompleted = list.id === "completed-tasks";
    if (isInCompleted) {
      listItem.appendChild(editButton);
      incompleteTasks.appendChild(listItem);
    } else {
      listItem.querySelector(".edit").remove();
      completedTasks.appendChild(listItem);
    }
  });
});

const createNewTask = (newTaskName) => {
  const newElement = document.createElement("li");
  const newElementBody = `<input type="checkbox" />
    <label>${newTaskName}</label>
    <input type="text" />
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;
  newElement.innerHTML = newElementBody;

  incompleteTasks.appendChild(newElement);
};
