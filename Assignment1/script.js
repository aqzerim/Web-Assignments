//Timer

function startTimer() {
    // Get the input and timer elements from the DOM
    const durationInput = document.getElementById('duration');
    const timerElement = document.getElementById('timer');

    // Parse the user-entered duration as an integer
    const duration = parseInt(durationInput.value);

    // Check if the entered duration is valid
    if (isNaN(duration) || duration <= 0) {
        // Display an alert if the duration is not valid
        alert('Please enter a valid duration greater than 0 seconds.');
        return;
    }

    // Initialize the time remaining with the entered duration
    let timeRemaining = duration;

    // Set up an interval to update the timer every second
    const timerInterval = setInterval(() => {
        // Update the timer element with the remaining time
        timerElement.textContent = timeRemaining;
        // Decrement the time remaining
        timeRemaining--;

        // Check if the countdown has reached zero
        if (timeRemaining < 0) {
            // Stop the interval and display a message when time is up
            clearInterval(timerInterval);
            timerElement.textContent = 'Time\'s up!';
        }
    }, 1000);

    //Add animation
    timerElement.classList.add('animated');
}


// To-do list 


    let taskList = [];
  
// Function to add a new task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskListElement = document.getElementById("taskList");

  // Create a new list item
  var listItem = document.createElement("li");
  listItem.className = "list-group-item";
  listItem.id = "task" + (taskList.length + 1);

  // Create a span for the task text
  var taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.appendChild(document.createTextNode(taskInput.value));

  // Create a 'Done' button
  var doneButton = document.createElement("button");
  doneButton.className = "done-button";
  doneButton.appendChild(document.createTextNode("Done"));
  doneButton.onclick = function () {
    markDone(listItem.id);
  };

  // Create a 'Delete' button
  var deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.onclick = function () {
    deleteTask(listItem.id);
  };

  // Append elements to the list item
  listItem.appendChild(taskText);
  listItem.appendChild(doneButton);
  listItem.appendChild(deleteButton);

  // Add the new task to the task list
  taskList.push({ id: listItem.id, text: taskInput.value, completed: false });
  taskListElement.appendChild(listItem);

  // Clear the input field
  taskInput.value = "";
}

// Function to mark a task as done
function markDone(taskId) {
  var task = document.getElementById(taskId);
  if (task) {
    // Toggle the 'done' class to visually mark the task as done
    task.classList.toggle("done");
    var taskIndex = taskList.findIndex((t) => t.id === taskId);
    if (taskIndex !== -1) {
      // Update the completed status in the task list
      taskList[taskIndex].completed = !taskList[taskIndex].completed;
      // Show a success alert
      showAlert('Task marked as done!');
    }
  }
}

// Function to display a success alert
function showAlert(message) {
  var alertElement = document.createElement("div");
  alertElement.className = "alert alert-success mx-auto";
  alertElement.role = "alert";
  alertElement.appendChild(document.createTextNode(message));

  var todoElement = document.querySelector(".todo");
  todoElement.appendChild(alertElement);

  // Remove the alert after 3 seconds
  setTimeout(function () {
    alertElement.remove();
  }, 3000);
}

// Function to delete a task
function deleteTask(taskId) {
  var task = document.getElementById(taskId);
  if (task) {
    // Remove the task from the DOM
    task.remove();
    // Filter the task out of the task list
    taskList = taskList.filter((t) => t.id !== taskId);
  }
}

// Function to display tasks in the task list
function displayTasks() {
  const taskListElement = document.getElementById('taskList');
  taskListElement.innerHTML = ' ';

  taskList.forEach(task => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${task.text}</span>
      <button class="action-button" onclick="markDone('${task.id}')">Complete</button>
      <button class="action-button" onclick="deleteTask('${task.id}')">Delete</button>
    `;

    if (task.completed) {
      listItem.classList.add('completed');
    }

    taskListElement.appendChild(listItem);
  });
}

// Display tasks when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  displayTasks();
});

  
  
  
// Form Validation

// Function to validate the form
function validateForm() {
    // Get values from form inputs
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var completeSelection = document.getElementById("completeSelection").checked;
    var advice = document.getElementById("advice").checked;
    var dermatologistService = document.getElementById("dermatologistService").checked;

    // Get error message elements
    var nameError = document.getElementById("nameError");
    var lastnameError = document.getElementById("lastnameError");
    var emailError = document.getElementById("emailError");
    var serviceError = document.getElementById("serviceError");

    // Clear previous error messages
    nameError.textContent = "";
    lastnameError.textContent = "";
    emailError.textContent = "";
    serviceError.textContent = "";

    // Validate name
    if (name === "") {
        nameError.textContent = "Name is required";
    }

    // Validate lastname
    if (lastname === "") {
        lastnameError.textContent = "Lastname is required";
    }

    // Validate email
    if (email === "") {
        emailError.textContent = "Email is required";
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email format";
    }

    // Validate selected services
    if (!completeSelection && !advice && !dermatologistService) {
        serviceError.textContent = "Please choose a service";
    }

    // Display alert if there are validation errors
    if (
        nameError.textContent !== "" ||
        lastnameError.textContent !== "" ||
        emailError.textContent !== "" ||
        serviceError.textContent !== ""
    ) {
        alert("Please fill in all required fields");
    } else {
        // Display success message if there are no errors
        document.getElementById("successMessage").style.display = "block";
    }
}

// Function to check if the email format is valid
function isValidEmail(email) {
    // In this example, always return true, you may want to implement a more
    // robust email validation logic based on your requirements
    return true; 
}


//Interactive elements

// Function to show a specific tab based on its ID
function showTab(tabId) {
    // Hide all tabs
    const tabs = document.getElementsByClassName('tab-content');
    for (const tab of tabs) {
        tab.style.display = 'none';
    }

    // Show the selected tab
    const selectedTab = document.getElementById(tabId);

    // Check if the selected tab exists
    if (selectedTab) {
        // Display the selected tab
        selectedTab.style.display = 'block';
    }
}


//Meet our founder accordion

// Function to toggle the visibility of an accordion item based on its collapse ID
function toggleAccordion(collapseId) {
    // Get the collapse element by ID
    const collapseElement = document.getElementById(collapseId);

    // Check if the collapse element has the 'show' class
    if (collapseElement.classList.contains('show')) {
        // If 'show' class is present, remove it to hide the accordion item
        collapseElement.classList.remove('show');
    } else {
        // If 'show' class is not present, add it to display the accordion item
        collapseElement.classList.add('show');
    }
}
