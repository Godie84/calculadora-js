document.getElementById("name").addEventListener("keypress", function (e) {
    // Obtener el valor actual del campo 'name'
    const currentValue = e.target.value;

    // Si el número de caracteres es 45 o más, prevenir la acción (no dejar escribir más)
    if (currentValue.length >= 45) {
        e.preventDefault(); // Prevenir que el carácter sea ingresado si ya se han escrito 45 caracteres
        return;
    }

    // Obtener la tecla presionada
    const key = e.key;

    // Validar que la tecla presionada sea una letra o un espacio
    if (!/[A-Za-zÁáÉéÍíÓóÚúÑñ\s]/.test(key)) {
        e.preventDefault(); // Prevenir que el carácter sea ingresado si no es una letra ni un espacio
    }
});

function validateForm() {
    // Obtener los valores de los campos
    const name = document.myForm.name.value;
    const email = document.myForm.email.value;
    const password = document.myForm.password.value;
    const confirmPassword = document.myForm.confirmPassword.value;
    const age = document.myForm.age.value;
    const date = document.myForm.date.value;

    // Variable para validar si el formulario pasa todas las validaciones
    let isValid = true;

    // Validar que el campo de nombre no esté vacío
    if (name === "") {
        document.getElementById("name").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("name").classList.remove("is-invalid");
    }

    // Validar que el correo electrónico tenga el formato correcto
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("email").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("email").classList.remove("is-invalid");
    }

    // Validar que la contraseña tenga al menos 6 caracteres
    if (password.length < 6) {
        document.getElementById("password").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("password").classList.remove("is-invalid");
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        document.getElementById("confirmPassword").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("confirmPassword").classList.remove("is-invalid");
    }

    // Validar que la edad sea un número y mayor a 18
    if (age < 18 || isNaN(age)) {
        document.getElementById("age").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("age").classList.remove("is-invalid");
    }

    // Validar que la fecha de nacimiento no esté vacía
    if (date === "") {
        document.getElementById("date").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("date").classList.remove("is-invalid");
    }

    // Si todo es válido, permitir el envío del formulario
    if (isValid) {
        return true;
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Debe diligenciar todos los campos",
            footer: '<a href="#"></a>'
        });
        return false;
    }
}