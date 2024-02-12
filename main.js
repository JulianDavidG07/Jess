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

  // Agregar evento al botón primario
  primaryButton.addEventListener('mouseover', function() {
    primaryButton.classList.add('active');
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
  