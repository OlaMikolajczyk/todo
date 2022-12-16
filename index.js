const incompleteTasks = document.getElementById("incomplete-tasks");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", () => {
  const newTaskName = document.getElementById("new-task").value;
  createNewTask(newTaskName);
});

const createNewTask = (newTaskName) => {
  const newElement = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  const label = document.createElement("label");
  label.innerText = newTaskName;

  newElement.appendChild(checkbox);
  newElement.appendChild(label);

  incompleteTasks.appendChild(newElement);
};

const editButtons = [...document.getElementsByClassName("edit")];

editButtons.forEach((element) => {
  console.log(element);
  element.addEventListener("click", (element) => {
    console.log(element);

    if (element.hasAttribute("editMode")) element.classList.remove("editMode");
  });
});
