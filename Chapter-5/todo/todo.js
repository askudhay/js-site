function createTask() {
  // Get the Task Textbox value
  let taskInputObj = document.getElementById("taskInput");
  let task = taskInputObj.value;

  // Check if the value has empty string after trimming?
  // If so alert the user and return from this function
  if (task.trim() == "") {
    alert("Please enter Task before you try to add!");
    return;
  }

  // Create a textNode with Task value
  let taskTextNode = document.createTextNode(task);
  // Create a Paragraph HTML DOM Node
  let taskPNode = document.createElement("p");
  // Identify the TasksDiv HTML Node using the Id "tasksDiv"
  let divNode = document.getElementById("tasksDiv");

  // Append the textNode to Paragraph Node
  taskPNode.appendChild(taskTextNode);
  taskPNode.addEventListener("click", function () {
    this.style.textDecoration = "line-through red";
  });

  // Append the Paragraph node to TasksDiv
  divNode.appendChild(taskPNode);

  // Reset the text box value
  taskInputObj.value = "";
}
