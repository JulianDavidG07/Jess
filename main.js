document.addEventListener("DOMContentLoaded", function () {
    var bodyElement = document.getElementById("body");
    var saludoElement = document.getElementById("saludo-dinamico");

    function obtenerSaludo() {
      var horaActual = new Date().getHours();

      if (horaActual >= 5 && horaActual < 12) {
        bodyElement.classList.add("buenos-dias");
        return "Buenos días 🌤️";
      } else if (horaActual >= 12 && horaActual < 18) {
        bodyElement.classList.add("buenas-tardes");
        return "Buenas tardes 🌞";
      } else if (horaActual >= 18 && horaActual < 24) {
        bodyElement.classList.add("buenas-noches");
        return "Buenas noches 🌜";
      } else {
        bodyElement.classList.add("buenas-madrugadas");
        return "Buenas por la madrugada 🌑";
      }
    }

    saludoElement.textContent = obtenerSaludo();
  });


  //HOVER
  // Obtener los botones
  var primaryButton = document.querySelector('.btn-primary');
  var secondaryButton = document.querySelector('.btn-secondary');

  // Agregar evento al botón primario
  primaryButton.addEventListener('mouseover', function() {
    secondaryButton.classList.remove('active');
    primaryButton.classList.add('active');
  });

  // Agregar evento al botón secundario
  secondaryButton.addEventListener('mouseover', function() {
    primaryButton.classList.remove('active');
    secondaryButton.classList.add('active');
  });


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
  