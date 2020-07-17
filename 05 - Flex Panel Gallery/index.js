const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click', e => e.currentTarget.classList.toggle('open'));
  panel.addEventListener('transitionend', e => {
    if (e.propertyName === 'font-size') {
      e.target.classList.toggle('open-active')
    }
  })
})
