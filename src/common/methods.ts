import {Category} from './sets';
import {Book} from './interfaces';

export function getAllBooks(): Array<Book> {
  let books: Array<Book> = [
    { id: 0, title: 'Refactoring JavaScript', author: 'Evan Burchard', category: Category.JavaScript, available: true},
    { id: 1, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', category: Category.JavaScript, available: false },
    { id: 2, title: 'CSS Secrets', author: 'Lea Verou', category: Category.CSS, available: true },
    { id: 3, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', category: Category.JavaScript, available: true },
    { id: 4, title: 'Pro AngularJS', author: 'Adam Freeman', category: Category.Angular2, available: true },
    { id: 5, title: 'Learning Angular 2', author: 'Pablo Deeleman', category: Category.Angular2, available: true },
    { id: 6, title: 'Learning TypeScript', author: 'Remo H. Jansen', category: Category.TypeScript, available: false },
    { id: 7, title: 'TypeScript Design Patterns', author: 'Vilic Vane', category: Category.TypeScript, available: true }
  ];
  return books;
}

export function getBookTitlesByCategory(category: Category): Array<string> {
  const allBooks = getAllBooks();
  const titles: Array<string> = [];
   
  for (let currentBook of allBooks) {
    if (currentBook.category === category) {
      titles.push(currentBook.title); 
    }
  }
  return titles; 
}

export function getBookById(id: number): Book|undefined {
  const allBooks:Array<Book> = getAllBooks();
  return allBooks.find(book => book.id === id)
}