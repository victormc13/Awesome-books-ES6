import Book from './book.js';

class Library {
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

export default Library;
