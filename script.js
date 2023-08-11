const textId = document.getElementById('apar');

function esVisible (el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkVisibility() {
  if (esVisible(textId)) {
    textId.classList.add('visible');
    window.removeEventListener('scroll', checkVisibility);
  }
}

window.addEventListener('scroll', checkVisibility);



const lis = document.querySelectorAll('.leng li');

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function applyRandomJump(li) {
  const jumpDelay = getRandom(0, 1); // Retraso aleatorio
  const jumpDistance = getRandom(1, 30); // Desplazamiento vertical aleatorio

  li.style.animationDelay = `-${jumpDelay}s`;
  li.style.transform = `translateY(-${jumpDistance}px)`;
}

lis.forEach(applyRandomJump);