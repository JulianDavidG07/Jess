var d = document,
    w = window,
    wWidth = w.innerWidth,
    wHeight = w.innerHeight,
    credit = document.querySelector('.credit > a'),
    particles = document.querySelector('.particles'),
    particleCount = 0,
    sizes = [15, 20, 25, 35, 45],
    colors = [
      '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
      '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
      '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
      '#FF5722', '#795548', '#9E9E9E', '#607D8B', '#777777'
    ],
    mouseX = w.innerWidth / 2, mouseY = w.innerHeight / 2;

function updateParticleCount() {
  document.querySelector('.particle-count > .number').textContent = particleCount;
}

w.addEventListener('resize', function() {
  wWidth = w.innerWidth;
  wHeight = w.innerHeight;
});

d.addEventListener('mousemove', function(event) {
  event.preventDefault();
  event.stopPropagation();
  mouseX = event.clientX;
  mouseY = event.clientY;
});

d.addEventListener('touchmove', function(event) {
  event.preventDefault();
  event.stopPropagation();
  if (event.touches && event.touches.length > 0) {
    mouseX = event.touches[0].clientX;
    mouseY = event.touches[0].clientY;
  }
});

d.addEventListener('mousedown', function(event) {
  if (event.target === credit) {
    return;
  }
  var timer = setInterval(function() {
    d.addEventListener('mouseup', function() {
      clearInterval(timer);
    });
    d.addEventListener('mouseleave', function() {
      clearInterval(timer);
    });
    createParticle(event);
  }, 1000 / 60);
});

d.addEventListener('touchstart', function(event) {
  if (event.target === credit) {
    return;
  }
  var timer = setInterval(function() {
    d.addEventListener('touchend', function() {
      clearInterval(timer);
    });
    d.addEventListener('touchcancel', function() {
      clearInterval(timer);
    });
    createParticle(event);
  }, 1000 / 60);
});

function createParticle(event) {
  var particle = document.createElement('div');
  particle.className = 'particle';

  var size = sizes[Math.floor(Math.random() * sizes.length)],
      color = colors[Math.floor(Math.random() * colors.length)],
      negative = size / 2,
      speedHorz = Math.random() * 10,
      speedUp = Math.random() * 25,
      spinVal = 360 * Math.random(),
      spinSpeed = ((36 * Math.random())) * (Math.random() <= 0.5 ? -1 : 1),
      otime,
      time = otime = (1 + (0.5 * Math.random())) * 1000,
      top = mouseY - negative,
      left = mouseX - negative,
      direction = Math.random() <= 0.5 ? -1 : 1,
      life = 10;

  particle.style.height = size + 'px';
  particle.style.width = size + 'px';
  particle.style.top = top + 'px';
  particle.style.left = left + 'px';
  particle.style.background = color;
  particle.style.transform = 'rotate(' + spinVal + 'deg)';

  particles.appendChild(particle);
  particleCount++;
  updateParticleCount();

  var particleTimer = setInterval(function() {
    time -= life;
    left -= speedHorz * direction;
    top -= speedUp;
    speedUp = Math.min(size, speedUp - 1);
    spinVal += spinSpeed;

    particle.style.top = top + 'px';
    particle.style.left = left + 'px';
    particle.style.opacity = ((time / otime) / 2) + 0.25;
    particle.style.transform = 'rotate(' + spinVal + 'deg)';

    if (time <= 0 || left <= -size || left >= wWidth + size || top >= wHeight + size) {
      particles.removeChild(particle);
      particleCount--;
      updateParticleCount();
      clearInterval(particleTimer);
    }
  }, 1000 / 60);
}
