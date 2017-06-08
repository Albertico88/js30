const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 15; // 15px


function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;

  if (this !== e.target) {
    mouseX = mouseX + e.target.offsetLeft;
    mouseY = mouseY + e.target.offsetTop;
  }

  const xWalk = Math.round((mouseX / width * walk) - (walk / 2));
  const yWalk = Math.round((mouseY / height * walk) - (walk / 2));

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(0, 0, 0, 0.47)
  `;
}


hero.addEventListener('mousemove', shadow);
