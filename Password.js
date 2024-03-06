function checkPassword() {
    var password = document.getElementById("password").value;
    // Imposta la password desiderata qui
    var correctPassword = "password123";

    if (password === correctPassword) {
        // Password corretta, reindirizza alla pagina principale
        window.location.href = "index.html"; // Modifica "index.html" con il nome della tua pagina principale
    } else {
        alert("Password incorrect. Please try again.");
    }
}
