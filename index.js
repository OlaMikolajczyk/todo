const incompleteTasks = document.getElementById("incomplete-tasks");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", () => {
  const newTaskName = document.getElementById("new-task").value;
  createNewTask(newTaskName);
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
