console.log('Local Storage')
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

addItems.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const newItem = {
    text: text,
    done: false
  }
  items.push(newItem);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function toggleDone(e) {

}

function populateList(items = [], itemsList) {
  itemsList.innerHTML = items.map((item, ind) => {
    return `
      <li>
        <input type='checkbox' data-index=${ind} id="item${ind}"
          ${item.done ? 'checked' : ''} />
        <label for='item${ind}'>${item.text}</label>
      </li>
    `
  }).join('');
}

populateList(items, itemsList);

itemsList.addEventListener('click', e => {
  if (e.target.matches('input')) console.log(e.target);
  let thisItem = items[e.target.dataset.index];
  thisItem.done = !thisItem.done;
  localStorage.setItem('items', JSON.stringify(items))
})