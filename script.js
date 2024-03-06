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
    window.location.href = "login.html";
}
