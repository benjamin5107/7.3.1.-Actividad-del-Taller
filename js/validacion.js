function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
document.getElementById("regBtn").addEventListener("click", function () {
    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass1 = document.getElementById("password1").value;
    const pass2 = document.getElementById("password2").value;
    const terminos = document.getElementById("terminos").checked;

    if (!nombre || !apellido || !email || !pass1 || !pass2) {
        showAlertError();
        return;
    }

    if (pass1.length < 6) {
        showAlertError();
        return;
    }

    if (pass1 !== pass2) {
        showAlertError();
        return;
    }

    if (!terminos) {
        showAlertError();
        return;
    }
    showAlertSuccess();
});