// random.js
function mostrarMensajeAleatorio(mensajes) {
  var mensajeBox = document.getElementById("mensaje");
  var messageBox = document.getElementById("messageBox");

  var mensajeRandom = mensajes[Math.floor(Math.random() * mensajes.length)];
  mensajeBox.textContent = mensajeRandom;

  var btn = lastHoveredButton === "btn-primary"
    ? document.querySelector(".btn-primary")
    : document.querySelector(".btn-secondary");

  var rect = btn.getBoundingClientRect();

  messageBox.style.top = rect.bottom + "px";
  messageBox.style.left = rect.left + "px";

  messageBox.style.display = "block";
}

function mostrarRandom() {
  if (lastHoveredButton === "btn-primary") {
    mostrarMensajeAleatorio(mensajesHappy);
  } else {
    mensajeBox.textContent = "No se detectó el último botón.";
    messageBox.style.display = "block";
  }
}
