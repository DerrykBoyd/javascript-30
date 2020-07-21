console.log('Sorting Band Names')

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let bandList = document.querySelector('#bands');

const prefixes = ['the', 'a', 'an']

bands.sort((a, b) => {

  function removePrefix(str) {
    let prefix = str.split(' ')[0];
    if (prefixes.includes(prefix.toLowerCase())) {
      return str.slice(prefix.length + 1, str.length);
    } else return str;
  }

  let sortableA = removePrefix(a);
  let sortableB = removePrefix(b);

  if (sortableA < sortableB) return -1
  else if (sortableA > sortableB) return 1
  else return 0
})

for (let band of bands) {
  let listItem = document.createElement('li');
  listItem.appendChild(document.createTextNode(band));
  bandList.appendChild(listItem)
}