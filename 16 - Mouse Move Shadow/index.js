console.log('Text shadow mouse move')

let hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100;

hero.addEventListener('mousemove', (e) => {
  console.log('move!')
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y} = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2))
  const yWalk = Math.round((y / height * walk) - (walk / 2))

  console.log(xWalk, yWalk)

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px red,
    ${xWalk * -1}px ${yWalk}px blue,
    ${xWalk}px ${yWalk *-1}px green
    `

})