// Funzione di login
function login() {
    var password = document.getElementById("password").value;

    // Controlla se la password è corretta
    if (password === "ellenmezza20") {
        // Reindirizza all'app To-Do List
        window.location.href = "todo.html";
    } else {
        alert("Password incorrect. Please try again.");
    }
}

// Funzione di logout
function logout() {
    // Reindirizza alla pagina di login
    window.location.href = "index.html";
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
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.className = "delete";
        deleteButton.onclick = function() {
            deleteTask(listItem);
        };
        listItem.appendChild(deleteButton);

        // Resetta il campo di input
        taskInput.value = "";
    }
}

// Funzione per eliminare un task
function deleteTask(taskItem) {
    var taskList = document.getElementById("taskList");
    taskList.removeChild(taskItem);
}
