document.addEventListener('DOMContentLoaded', function () {
    // Cuando se hace clic en el elemento con clase 'title'
    document.querySelector('.title').addEventListener('click', function () {
      // Añadir la clase 'open' al elemento con clase 'container'
      document.querySelector('.container_').classList.add('open');
    });
  
    // Cuando se hace clic en el elemento con clase 'close'
    document.querySelector('.close').addEventListener('click', function () {
      // Eliminar la clase 'open' del elemento con clase 'container'
      document.querySelector('.container_').classList.remove('open');
    });
  });