console.log('Key Sequence Detection!')

const secretCode = 'hunter123'

let pressed = [];

window.addEventListener('keyup', e => {
  pressed.push(e.key);
  console.log(pressed)
  pressed.splice(-secretCode.length, pressed.length - secretCode.length);
  console.log(pressed)
  if (pressed.join('') === secretCode) cornify_add();
})