const titulo = document.getElementById("titulo");
titulo.textContent = "Titulo de mi pagina web";
const parrafo = document.querySelector("#parrafo");
parrafo.innerHTML = "<strong>Aprendiendo JavaScrip en alianza Francesa</strong>"

//Agregar elemento li
const nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Elemento 3";
document.getElementById("lista").appendChild(nuevoElemento);

const items = document.getElementsByClassName("item");
Array.from(items).forEach(item => {
    item.style.color = "red";
});

const etiquetasLi = document.getElementsByTagName("li");
console.log("Número de etiquetas li:", etiquetasLi.length);

const valorInput = document.getElementById("nombre").getAttribute("value");
console.log("Valor del input:", valorInput);
document.getElementById("nombre").setAttribute("value", "Nuevo valor");

document.getElementById("botonFormulario").addEventListener("click", function() {
    alert("Formulario enviado");
});

const elementosLista = document.querySelectorAll("#lista li");
elementosLista.forEach(elemento => {
    elemento.style.fontWeight = "bold";
});

//const container = document.getElementById("contenedor");
document.getElementById("contenedor").style.backgroundColor = "lightblue";

document.getElementById("contenedor").classList.add("mi-clase");

document.getElementById("contenedor").classList.remove("mi-clase");

document.getElementById("contenedor").classList.toggle("otra-clase");

const lista = document.getElementById("lista");
lista.removeChild(lista.lastChild);

const textoNuevo = document.createTextNode(" Texto añadido");
document.getElementById("contenedor").appendChild(textoNuevo);