const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true; // build size up

function draw(event) {
  if(!isDrawing) return; // stop fn when not moused down

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  hue++; // increment hue
  // reset hue
  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 75 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  lastX = event.offsetX;
  lastY = event.offsetY;
}


canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  lastX = event.offsetX;
  lastY = event.offsetY; // Update last position
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
