console.log('Adding with reduce')

const timeNodes = Array.from(document.querySelectorAll('[data-time]'))

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat)
    return (mins * 60) + secs;
  })

console.log(seconds)

let totalSecs = seconds.reduce((acc, cur) => acc + cur)

console.log(totalSecs)

const hours = Math.floor(totalSecs/3600);
totalSecs = totalSecs % 3600;
const mins = Math.floor(totalSecs/60);
totalSecs = totalSecs % 60;

console.log(hours, mins, totalSecs)