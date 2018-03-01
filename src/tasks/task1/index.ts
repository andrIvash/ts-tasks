/*
Task 01. Basic Types

Реализуйте функцию getAllBooks(), которая возвращает коллекцию книжек. Объявите эту
коллекцию внутри функции, используя let.

[
{ title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
{ title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
{ title: 'CSS Secrets', author: 'Lea Verou', available: true },
{ title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli',
available: true }
]

Реализуйте функцию logFirstAvailable(), которая принимает массив книг в качестве
параметра и выводит в консоль:
a. количество книг в массиве
b. название первой доступной книги
Используйте
c. следующие типы данных number, string, void.
d. for-of для обхода коллекции
e. бектикс (`) для вывода строчных значений

Запустите функцию logFirstAvailable()
*/

export default function () {  
  console.log('--------------------- task 1');

  function getAllBooks(): Array<any> {
    let books: Array<any> = [
      { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
      { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
      { title: 'CSS Secrets', author: 'Lea Verou', available: true },
      { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli',
      available: true }
    ]
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

  logFirstAvailable(getAllBooks());

};
