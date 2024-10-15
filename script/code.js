document.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.getElementById("add-task-button");
  const taskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") {
          alert("Please enter a task.");
          return;
      }

      const listItem = document.createElement("li");
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;
      listItem.appendChild(taskSpan);

      // Add delete button to the task
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
          taskList.removeChild(listItem);
      });
      listItem.appendChild(deleteButton);

      // Add task to the list
      taskList.appendChild(listItem);
      taskInput.value = "";
  }

  // Event listener for adding a task
  addTaskButton.addEventListener("click", addTask);

  // Add task with Enter key
  taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
          addTask();
      }
  });
});
