// Funzione di logout
function logout() {
    // Reindirizza alla pagina di login
    window.location.href = "login.html";
}

// Funzione per caricare i task salvati nel local storage
function loadTasks() {
    var savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        var taskList = document.getElementById("taskList");
        taskList.innerHTML = savedTasks;
    }
}

// Funzione per salvare i task nel local storage
function saveTasks() {
    var taskList = document.getElementById("taskList").innerHTML;
    localStorage.setItem("tasks", taskList);
}

// Funzione per aggiungere un task
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

        // Aggiungi un pulsante di cancellazione
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteTaskBtn";
        deleteButton.onclick = function() {
            deleteTask(listItem);
        };
        listItem.appendChild(deleteButton);

        // Resetta il campo di input
        taskInput.value = "";

        // Salva i task nel local storage
        saveTasks();
    }
}

// Funzione per eliminare un task
function deleteTask(taskItem) {
    var taskList = document.getElementById("taskList");
    taskList.removeChild(taskItem);

    // Salva i task nel local storage
    saveTasks();
}

// Carica i task salvati al caricamento della pagina
window.onload = function() {
    loadTasks();
};


// Funzione per eliminare un task
function deleteTask(taskItem) {
    var taskList = document.getElementById("taskList");
    taskList.removeChild(taskItem);
}
