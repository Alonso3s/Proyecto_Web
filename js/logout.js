document.addEventListener("DOMContentLoaded", function () {
    const cerrarSesionBtn = document.getElementById("cerrarSesion");

    if (cerrarSesionBtn) {
        cerrarSesionBtn.addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.removeItem("usuarioActivo");
            alert("Sesión cerrada correctamente.");
            window.location.href = "Login.html";
        });
    }
});
