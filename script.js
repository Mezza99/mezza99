
function checkPassword() {
    var password = document.getElementById("password").value;
    // Imposta la password desiderata qui
    var correctPassword = "ellenmezza20";

    if (password === correctPassword) {
        // Password corretta, reindirizza alla pagina principale
        window.location.href = "index.html"; // Modifica "index.html" con il nome della tua pagina principale
    } else {
        alert("Password incorrect. Please try again.");
    }
}
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;
    
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
