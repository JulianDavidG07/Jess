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



/***************** Script boton musica ********************** */
var track = document.getElementById("track");

var controlBtn = document.getElementById("play-pause");

function playPause() {
  if (track.paused) {
    track.play();
    //controlBtn.textContent = "Pause";
    controlBtn.className = "pause";
  } else {
    track.pause();
    //controlBtn.textContent = "Play";
    controlBtn.className = "play";
  }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function () {
  controlBtn.className = "play";
});


/********** countdown ************* */
function updateTimer() {
  // Establecer la fecha de referencia y la fecha actual
  var past = new Date("2023-12-07T00:00:00");
  var now = new Date();

  // Calcular la diferencia en milisegundos
  var diff = now - past;

  // Convertir la diferencia a años, meses, días, horas, minutos y segundos
  var years = now.getFullYear() - past.getFullYear();
  var months = now.getMonth() - past.getMonth();
  var days = now.getDate() - past.getDate();
  var hours = now.getHours() - past.getHours();
  var minutes = now.getMinutes() - past.getMinutes();
  var seconds = now.getSeconds() - past.getSeconds();

  // Ajustar los valores si es necesario (para garantizar que sean valores positivos)
  if (seconds < 0) { minutes--; seconds += 60; }
  if (minutes < 0) { hours--; minutes += 60; }
  if (hours < 0) { days--; hours += 24; }
  if (days < 0) {
    var daysInLastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    months--;
    days += daysInLastMonth;
  }
  if (months < 0) { years--; months += 12; }

  // Función para determinar singular o plural
  function pluralize(value, singular, plural) {
    return value === 1 ? singular : plural;
  }

  // Actualizar el elemento con el tiempo transcurrido y las palabras correctas en singular/plural
  document.getElementById("timer").innerHTML =
    '<div>' + years + '<span>' + pluralize(years, 'Año', 'Años') + '</span></div>' +
    '<div>' + months + '<span>' + pluralize(months, 'Mes', 'Meses') + '</span></div>' +
    '<div>' + days + '<span>' + pluralize(days, 'Día', 'Días') + '</span></div>' +
    '<div>' + hours + '<span>' + pluralize(hours, 'Hora', 'Horas') + '</span></div>' +
    '<div>' + minutes + '<span>' + pluralize(minutes, 'Minuto', 'Minutos') + '</span></div>' +
    '<div>' + seconds + '<span>' + pluralize(seconds, 'Segundo', 'Segundos') + '</span></div>' +
    '<div class="mini-text"><span>Bendecido<br>¡A tu lado!<span style="font-size:10px;">&#128522;</span></span></div>';
}

// Llamar a la función updateTimer cada segundo
setInterval(updateTimer, 1000);



/****** Animate-words_ ******* */
function displayWord() {
  var words = document.getElementsByClassName("toggle");
  var wordCounter = 0;
  
  // Array de colores
  var colors = ['#f047d0', '#00ca92', '#f67a49', '#FF33A5', '#674ea7'];
  var colorCounter = 0; // Índice del color
  
  setInterval(updateWord, 1500);
  
  function updateWord() {
    if (wordCounter >= words.length) wordCounter = 0;
    
    // Quitar la clase active de todas las palabras
    for (var i = 0; i < words.length; i++) {
      words[i].classList.remove('active');
      words[i].style.color = ''; // Restablecer el color
    }
    
    // Añadir la clase active a la palabra actual
    words[wordCounter].classList.add('active');
    
    // Cambiar el color de la palabra activa usando el índice
    words[wordCounter].style.color = colors[colorCounter];
    
    // Incrementar el contador de palabras y colores
    wordCounter++;
    colorCounter++;
    
    // Reiniciar el contador de colores si es necesario
    if (colorCounter >= colors.length) colorCounter = 0;
  }
}

displayWord();
