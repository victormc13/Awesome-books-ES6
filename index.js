import Library from './modules/library.js';
import { DateTime } from './modules/luxon.js';

const updateTime = () => {
  const now = DateTime.local();
  const formattedTime = now.toLocaleString(DateTime.DATETIME_MED);
  const dateTime = document.getElementById('datetime');
  dateTime.textContent = formattedTime;
  // Update the time every second
  setInterval(updateTime, 5000);
};
updateTime();

const superLibrary = new Library();

const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');

const loadBooks = () => {
  const booksAmount = superLibrary.books.length;
  const emptyHTML = '';

  document.querySelector('.booklist-container').innerHTML = emptyHTML;
  for (let i = 0; i < booksAmount; i += 1) { /* eslint-disable no-use-before-define */
    loadHTML(i);
  }

  localStorage.setItem('books', JSON.stringify(superLibrary.books));
};

const loadHTML = (index) => {
  const superHTML = `
  <li class="book">
    <div class="book-details">
    <h4 id="">"${superLibrary.books[index].title}"</h4>
    <p id="">by ${superLibrary.books[index].author}</p>
    </div>
    <button id="remove-button${index}">Remove</button>
  </li>
  `;

  document
    .querySelector('.booklist-container')
    .insertAdjacentHTML('beforeend', superHTML);
  document
    .getElementById(`remove-button${index}`)
    .addEventListener('click', () => superLibrary.removeBook(index, loadBooks));
};

const localbooks = localStorage.getItem('books');
if (localbooks) {
  superLibrary.books = JSON.parse(localbooks);
}

window.addEventListener('load', loadBooks);
const addButton = document.getElementById('add-button');

// Add an event listener for the Enter key or Add button
addButton.addEventListener('click', () => superLibrary.addBook(
  newTitle.value,
  newAuthor.value,
  newTitle,
  newAuthor,
  loadBooks,
));
document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    superLibrary.addBook(
      newTitle.value,
      newAuthor.value,
      newTitle,
      newAuthor,
      loadBooks,
    );
  }
});

const listLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');

const showSection = (sectionId) => {
  const section1 = document.getElementById('books');
  const section2 = document.getElementById('section2');
  const section3 = document.getElementById('section3');

  if (sectionId === 'section1') {
    section1.classList.remove('hidden');
    section2.classList.add('hidden');
    section3.classList.add('hidden');
  } else if (sectionId === 'section2') {
    section1.classList.add('hidden');
    section2.classList.remove('hidden');
    section3.classList.add('hidden');
  } else if (sectionId === 'section3') {
    section1.classList.add('hidden');
    section2.classList.add('hidden');
    section3.classList.remove('hidden');
  }
};

listLink.addEventListener('click', () => showSection('section1'));
addLink.addEventListener('click', () => showSection('section2'));
contactLink.addEventListener('click', () => showSection('section3'));
