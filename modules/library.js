import Book from "./book.js";

export class Library {
  constructor() {
    this.books = [
      {
        title: 'title1',
        author: 'autor1',
      },
      {
        title: 'title2',
        author: 'autor2',
      },
      {
        title: 'Dune',
        author: 'Frank Herbert',
      },
    ];
  }

  addBook = (bookTitle, bookAuthor) => {
    if (bookTitle !== '' && bookAuthor !== '') {
      const newBook = new Book(bookTitle, bookAuthor);
      this.books.push(newBook);

      newTitle.value = '';
      newAuthor.value = '';
      loadBooks(); // eslint-disable-line no-use-before-define
    }
  }

  removeBook = (index) => {
    this.books.splice(index, 1);

    loadBooks(); // eslint-disable-line no-use-before-define
  }
}