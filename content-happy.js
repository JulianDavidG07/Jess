// happy.js
var lastHoveredButton = "btn-primary"; // Agrega esta línea

var mensajesHappy = [
  "¡Hola! Este es un mensaje aleatorio. .)",
  "¿Sabías que los mensajes cambian cada vez?",
  "¡Espero que tengas un gran día!",
  "Juan es crazy",
  "Este es otro mensaje interesante.",
  "¡Diviértete explorando!",
  "Puedes agregar más mensajes al array según tus necesidades.",
];

function mostrarHappy() {
  lastHoveredButton = "btn-primary"; // Agrega esta línea
  var mensajeRandom = mensajesHappy[Math.floor(Math.random() * mensajesHappy.length)];
  var mensajeBoxHappy = document.getElementById("mensaje");
  mensajeBoxHappy.textContent = mensajeRandom;

  var messageBoxHappy = document.getElementById("messageBox");
  var btn = document.querySelector(".btn-primary");
  var rect = btn.getBoundingClientRect();

  messageBoxHappy.style.top = rect.bottom + "px";
  messageBoxHappy.style.left = rect.left + "px";

  messageBoxHappy.style.display = "block";
}
