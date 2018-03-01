/*
Task 02. Enum

1. Объявите enum Category для хранения следующих категорий книг:
a. JavaScript
b. CSS
c. HTML,
d. TypeScript
e. Angular2
2. Добавьте категорию к объектам в функции getAllBooks()
3. Реализуйте функцию getBookTitlesByCategory(), которая на вход будет получать категорию и
возвращать массив наименований книг, которые принадлежат указанной категории.
Используйте тип Array<string> и объявленный enum.
4. Реализуйте функцию logBookTitles(), которая принимает массив строк и выводит его в
консоль. Используйте типы: string[] и void.
*/

export default function () {  
  console.log('--------------------- task 2');

  enum Category {'JavaScript', 'CSS', 'HTML', 'TypeScript', 'Angular2'};

  function getAllBooks(): Array<any> {
    let books: Array<any> = [
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

  function logFirstAvailable(books: any[]): void {
    const numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for(let currentBook of books) {
      if (currentBook.available) {
        firstAvailable = currentBook.title;
        break;
      }
    }

    console.log(`Total number of books: ${numberOfBooks}`);
    console.log(`first Available Book: ${firstAvailable}`);
  }

  function getBookTitlesByCategory(category: Category): Array<string> {
    const allBooks = getAllBooks();
    const titles: Array<string> = [];
     
    for (let currentBook of allBooks) {
      if (currentBook.category === category) {
        titles.push(currentBook.title); 
      }
    }
    return titles; 
  }

  function logBookTitles(titles: Array<string>): void {
    for (let title of titles) {
      console.log(title);
    }
  }

  logBookTitles(getBookTitlesByCategory(Category.JavaScript));

};