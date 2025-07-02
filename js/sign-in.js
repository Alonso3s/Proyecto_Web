document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registroForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const usuario = document.getElementById("usuario").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmar = document.getElementById("confirmar").value;

        if (!usuario || !email || !password || !confirmar) {
            alert("Por favor completa todos los campos.");
            return;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        if (password !== confirmar) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const existe = usuarios.some(u => u.usuario === usuario || u.email === email);
        if (existe) {
            alert("El usuario o correo ya está registrado.");
            return;
        }

        usuarios.push({ usuario, email, password });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        window.location.href = "Login.html";
        form.reset();
    });
});
