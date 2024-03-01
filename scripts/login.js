const form = document.getElementById("btn-login");

form.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Hardcoded username and password
    const validUsername = "AdminSEF123";
    const validPassword = "SeF@ctORy$$456";

    if (username !== validUsername) {
        alert("Invalid username.");
        return;
    }

    if (password !== validPassword) {
        alert("Invalid password.");
        return;
    }

    window.location.href = "active.html";
});
