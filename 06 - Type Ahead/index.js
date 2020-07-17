const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

cities = [];

fetch(endpoint)
  .then(res => res.json())
  .then(data => {
    data.forEach(city => cities.push(city))
  })

function filterCities(input, cities) {
  let filtered = cities.filter((city, ind) => {
    return city.city.toLowerCase().includes(input.toLowerCase()) ||
      city.state.toLowerCase().includes(input.toLowerCase())
  })
  return filtered;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  list.innerHTML='';
  const matches = filterCities(this.value, cities)
  const regex = new RegExp(this.value, 'gi');
  matches.forEach(match => {
    const cityName = match.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const stateName = match.state.replace(regex, `<span class="hl">${this.value}</span>`)
    let item = document.createElement('li')
    item.innerHTML = `
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(match.population)}</span>
    `
    list.appendChild(item)
  })
}

const input = document.querySelector('.search');
const list = document.querySelector('.suggestions');

input.addEventListener('keyup', displayMatches);