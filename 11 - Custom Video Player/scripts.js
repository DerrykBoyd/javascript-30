console.log('Video Player!')

const player = document.querySelector('.player');
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const togglePlayBtn = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skipBtns = player.querySelectorAll('.player__button');

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function updateBtn(e) {
  if (e.type === 'play') {
    togglePlayBtn.innerHTML = '❚❚';
  } else {
    togglePlayBtn.innerHTML = '▶';
  }
}

function skip(time) {
  let curTime = video.currentTime;
  curTime += time;
  video.currentTime = curTime;
}

function updateRange(e) {
  video[e.target.name] = e.target.value;
}

togglePlayBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);

skipBtns.forEach( btn => btn.addEventListener('click', (e) => {
  time = e.target.getAttribute('data-skip');
  skip(Number(time));
}))

ranges.forEach(range => range.addEventListener('change', updateRange))

video.addEventListener('timeupdate', e => {
  let percent = video.currentTime / video.duration * 100;
  progressBar.style['flex-basis'] = `${percent}%`
})