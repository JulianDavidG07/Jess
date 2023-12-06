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