document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (!email || !password) {
            alert("Por favor ingresa tu email y contraseña.");
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuarioEncontrado = usuarios.find(
            (u) => u.email === email && u.password === password
        );

        if (usuarioEncontrado) {
            localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
            window.location.href = "indexgolfo.html";
        } else {
            alert("Correo o contraseña incorrectos.");
        }
    });
});
