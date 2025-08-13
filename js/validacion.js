function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
const regBtn = document.getElementById('regBtn');

regBtn.addEventListener('click', function() {
    const password1 = document.getElementById('password1').value;

    if (password1.length < 6) {
       
        showAlertError();
    } else {
       
        showAlertSuccess();
    }
});