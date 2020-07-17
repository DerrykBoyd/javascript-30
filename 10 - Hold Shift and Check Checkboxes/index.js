console.log('Hold Shift!')

const boxes = document.querySelectorAll('input');
let lastChecked = null;
let isShift = false;

boxes.forEach((box, ind) => {
  box.addEventListener('click', () => {
    if (isShift) {
      // top to bottom
      if (lastChecked < ind) {
        for (let i = lastChecked; i <= ind; i++) {
          boxes[i].checked = true;
        }
      }
      // bottom to top
      if (lastChecked > ind) {
        for (let i = ind; i <= lastChecked; i++) {
          boxes[i].checked = true;
        }
      }
      
    }
    if (box.checked) lastChecked = ind;
  })
})

document.addEventListener('keydown', e => {
  if (e.key === 'Shift') isShift = true;
})

document.addEventListener('keyup', e => {
  if (e.key === 'Shift') isShift = false;
})

