// sad.js
var lastHoveredButton = "btn-secondary"; // Agrega esta línea

var mensajesSad = [
  "1 ¡Hola! Este es un mensaje aleatorio.",
  "1 ¿Sabías que los mensajes cambian cada vez?",
  "2 ¡Espero que tengas un gran día!",
  "3 Juan es crazy",
  "4 Este es otro mensaje interesante.",
  "5 ¡Diviértete explorando!",
  "6 Puedes agregar más mensajes al array según tus necesidades.",
];

function mostrarSad() {
  lastHoveredButton = "btn-secondary"; // Agrega esta línea
  var mensajeRandom = mensajesSad[Math.floor(Math.random() * mensajesSad.length)];
  var mensajeBoxSad = document.getElementById("mensaje");
  mensajeBoxSad.textContent = mensajeRandom;

  var messageBoxSad = document.getElementById("messageBox");
  var btn = document.querySelector(".btn-secondary");
  var rect = btn.getBoundingClientRect();

  messageBoxSad.style.top = rect.bottom + "px";
  messageBoxSad.style.left = rect.left + "px";

  messageBoxSad.style.display = "block";
}
