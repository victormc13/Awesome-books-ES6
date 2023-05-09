import Book from './book.js';

export default class Library {
  constructor() {
    this.books = [];
  }

  addBook = (bookTitle, bookAuthor, newTitle, newAuthor, loadBooks) => {
    if (bookTitle !== '' && bookAuthor !== '') {
      const newBook = new Book(bookTitle, bookAuthor);
      this.books.push(newBook);

      newTitle.value = '';
      newAuthor.value = '';
      loadBooks();
    }
  }

  removeBook = (index, loadBooks) => {
    this.books.splice(index, 1);

    loadBooks();
  }
}
