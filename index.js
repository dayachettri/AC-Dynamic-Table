const nameInputEl = document.querySelector('.name');
const numberInputEl = document.querySelector('.number');
const emailInputEl = document.querySelector('.email');
const submitInputEl = document.querySelector('.submit');
const tBodyEl = document.querySelector('tbody');
const bodyEl = document.querySelector('body');
const messageEl = document.querySelector('.message');
const form = document.querySelector('form');

const table = function () {
  // Create tr with td
  const trEl = document.createElement('tr');
  const tdNameEl = document.createElement('td');
  const tdEmailEl = document.createElement('td');
  const tdNumberEl = document.createElement('td');
  const btnDelete = document.createElement('button');

  // Setting textContent of td
  tdNameEl.textContent = nameInputEl.value;
  tdEmailEl.textContent = emailInputEl.value;
  tdNumberEl.textContent = numberInputEl.value;
  btnDelete.textContent = 'Delete';

  setTimeout(() => {
    messageEl.style.color = '#fff';
  }, 2000);

  // Appending to DOM
  if (
    tdEmailEl.textContent.includes('@') &&
    tdEmailEl.textContent.includes('.') &&
    tdNameEl.textContent.length >= 4 &&
    tdNumberEl.textContent.length >= 10
  ) {
    tBodyEl.append(trEl);
    trEl.append(tdNameEl, tdEmailEl, tdNumberEl, btnDelete);
    messageEl.style.color = '#222';
    messageEl.textContent = `ADDED INFORMATION`;
  } else {
    messageEl.style.color = '#222';
    messageEl.textContent = 'INVALID INPUT';
  }

  // Delete
  btnDelete.addEventListener('click', function (e) {
    setTimeout(() => {
      messageEl.style.color = '#fff';
    }, 2000);
    let target = e.target;
    target.parentNode.remove();
    messageEl.style.color = '#222';
    messageEl.textContent = `DELETED INFORMATION`;
  });
  form.reset();
};

submitInputEl.addEventListener('click', table);
