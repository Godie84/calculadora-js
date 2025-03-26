// Obtener todos los botones de tipo "button" en el formulario
const buttons = document.querySelectorAll('input[type="button"]'); 

// Obtener el formulario llamado "calculator"
const form = document.forms["calculator"]; 

// Obtener el botón de limpiar (clean) por su ID
const clean = document.getElementById("clean"); 

// Establecer el límite de caracteres en 10
const maxLength = 10;

// Habilitar el evento de clic en cada botón
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const value = this.value; // Obtener el valor del botón clickeado

        // Si el valor es un número o un operador y la longitud actual es menor que el máximo permitido
        if (form.screen.value.length < maxLength) {
            // Si se presiona el botón "=" realiza la operación de evaluación
            if (value === "=") {
                try {
                    // Evaluación segura de la expresión matemática usando new Function
                    form.screen.value = new Function('return ' + form.screen.value)();
                } catch (error) {
                    // Si hay un error (por ejemplo, sintaxis incorrecta), mostrar "Error"
                    form.screen.value = "Error";
                }
            } 
            // Si el valor es un punto (.) agrega el punto solo si no hay uno en la expresión
            else if (value === ".") {
                if (!form.screen.value.includes(".")) {
                    form.screen.value += value; // Agregar punto
                }
            } 
            // Si no es un botón especial, agregar el valor al final de la pantalla
            else {
                form.screen.value += value;
            }
        }
    });
});

// Evento de clic para el botón de limpiar (clean)
clean.addEventListener("click", function () {
    form.screen.value = ""; // Limpiar el contenido de la pantalla (input "screen")
});
