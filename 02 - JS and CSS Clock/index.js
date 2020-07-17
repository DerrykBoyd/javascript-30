function setDate() {
  const now = new Date();
  console.log(now.toLocaleTimeString())
  const seconds = now.getSeconds();
  const secDeg = (seconds / 60) * 360;
  const minutes = now.getMinutes();
  const minDeg = (minutes / 60) * 360;
  const hours = now.getHours();
  const hourDeg = (hours / 12) * 360;
  console.log(secDeg, minDeg, hourDeg);

  document.getElementById('sec-hand').style.transform = `rotate(${secDeg+90}deg)`
  document.getElementById('min-hand').style.transform = `rotate(${minDeg+90}deg)`
  document.getElementById('hour-hand').style.transform = `rotate(${hourDeg+90}deg)`

}

setInterval(() => {
  setDate();
}, 1000);