
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
// Carica i task dal Local Storage quando la pagina si carica
window.onload = function() {
    loadTasks();
};

// Aggiunge un nuovo task alla lista e al Local Storage
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var task = taskInput.value;

    if (task.trim() !== "") {
        // Crea un nuovo elemento di lista
        var listItem = document.createElement("li");
        listItem.textContent = task;

        // Aggiungi il task alla lista visiva
        taskList.appendChild(listItem);

        // Salva il task nel Local Storage
        saveTask(task);

        // Resetta il campo di input
        taskInput.value = "";
    }
}

// Salva un task nel Local Storage
function saveTask(task) {
    // Recupera i task esistenti dal Local Storage
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Aggiungi il nuovo task alla lista
    tasks.push(task);

    // Salva la lista aggiornata nel Local Storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Carica i task dal Local Storage
function loadTasks() {
    var taskList = document.getElementById("taskList");
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Aggiungi i task salvati alla lista visiva
    tasks.forEach(function(task) {
        var listItem = document.createElement("li");
        listItem.textContent = task;
        taskList.appendChild(listItem);
    });
}
