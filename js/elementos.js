//Generar variables
let title = document.getElementById("title");
let mainDiv = document.querySelector(".main-div");
let listItems = document.querySelectorAll("ul#itemsList > li");
let imagen = document.querySelector("img");
let oldDiv = document.querySelector(".old-div");
let button = document.querySelector("button");
// Variables lista dinamica
let input = document.getElementById("itemInput");
let addButton = document.getElementById("addButton");
let list = document.getElementById("dynamicList");
// Filtrado de elementos del DOM
const filterInput = document.getElementById("filterInput");
// Obtiene el campo de entrada para filtrar elementos con id "filterInput"
const itemsList = document.getElementById("itemsList");
// Obtiene la lista con id "itemsList"

//Modificando elementos
title.innerText = "Se cambia el titulo";
title.innerHTML = "Se <em>cambia</em> el titulo";
imagen.setAttribute("src", "./img/vite.svg");

mainDiv.style.backgroundColor = "#ffcc00";
document.body.removeChild(oldDiv);

button.addEventListener("click", function () {
    alert("¡Botón presionado!");
    // Muestra una alerta cuando se hace clic en el botón
});


// Evento con parámetros
function showMessage(message) {
    alert(message);
    // Función que muestra un mensaje en una alerta
}

button.addEventListener("click", function () {
    showMessage("¡Mensaje personalizado!");
    // Muestra un mensaje personalizado cuando se hace clic en el botón
});

addButton.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        // Verifica que el campo de entrada no esté vacío
        let newItem = document.createElement("li");
        // Crea un nuevo elemento <li>
        newItem.innerText = input.value;
        // Asigna el texto del nuevo <li> al valor que tiene el input
        // Convierte el valor ingresado a mayúsculas si se requiere
        newItem.innerText = input.value.toUpperCase();
        list.appendChild(newItem);
        // Añade el nuevo <li> al final de la lista
        input.value = ""; // Limpiar el campo de entrada después de agregar el ítem
    }
});

filterInput.addEventListener("keyup", function () {
    const term = filterInput.value.toLowerCase();
    // Obtiene el término de búsqueda en minúsculas desde el input de filtro
    const items = itemsList.getElementsByTagName("li");
    // Obtiene todos los elementos <li> dentro de la lista



    Array.from(items).forEach(function (item) {
        if (item.textContent.toLowerCase().indexOf(term) !== -1) {
            item.style.display = "block";
            // Muestra el elemento si el texto coincide con el término de búsqueda
            if (item.textContent.toUpperCase().indexOf(term) !== -1) {
                item.style.display = "block";
                // Muestra el elemento si el texto coincide con el término de búsqueda
            }

        } else {
            item.style.display = "none";
            // Oculta el elemento si no coincide con el término de búsqueda
        }
    });
});









