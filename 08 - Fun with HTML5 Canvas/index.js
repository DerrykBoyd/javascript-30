console.log('Fun with HTML5 Canvas')

const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = 'red';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 20;

let isDrawing = false;
let lastX = 0;
let lasyY = 0;
let hue = 50;

document.addEventListener('mousedown', (e) => {
  isDrawing = true
  lasyY = e.offsetY;
  lastX = e.offsetX;
});
document.addEventListener('mouseup', () => isDrawing = false);
document.addEventListener('mouseout', () => isDrawing = false);


function draw(e) {
  if (!isDrawing) return
  console.log(e)
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`
  context.beginPath();
  context.moveTo(lastX, lasyY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  lasyY = e.offsetY;
  lastX = e.offsetX;
  hue ++;
}

document.addEventListener('mousemove', draw)