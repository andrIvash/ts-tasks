/*
Task 05. Optional, Default and Rest Parameters
1. Создайте функцию createCustomer(), которая принимает три параметра:
a. name: string – обязательный
b. age: number – необязательный
c. city: string – необязательный
Функция должна выводить имя клиента в лог используя template string, а также, если задан
возраст, то она должна дополнительно выводить возраст в консоль. Ели задан город, то
дополнительно должна выводить город в консоль. Вызовите эту функцию с одним, двумя и
тремя параметрами.
2. Внесите изменения в функцию getBookTitlesByCategory() – добавьте для параметра значение
по умолчанию Category.JavaScript. Вызовите эту функцию без параметра.
3. Внесите изменения в функцию logFirstAvailable() – добавьте для параметра значение по
умолчанию – вызов функции getAllBooks(). Вызовите эту функцию без параметра.
4. Создайте функцию сheckoutBooks(), которая принимает два параметра:
a. customer: string
b. bookIDs: number[] – переменное значение идентификаторов книжек
Функция должна проверить доступность каждой книжки, заданной идентификатором и
вернуть массив наименований (title) книжек, которые доступны. (book.available - true).
Используйте функцию getBookById(). Также функция должна выводить в лог имя заданного
клиента.
5. Объявите переменную myBooks и сохраните в нее результат вызова функции
сheckoutBooks(‘Ann’, 1, 2, 4). Используя forEach выведите названия книг в консоль.
*/

import {
  getAllBooks,
  getBookById
} from '../../common/methods';
import {Category} from '../../common/enums';


export default function () {  
  console.log('--------------------- task 5');

  function createCustomer(name: string, age?: number, city?: string, ): void {
    if (name && age && city) {
      console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
    } else if (name && age) {
      console.log(`Name: ${name}, Age: ${age}`);
    } else if (name) {
      console.log(`Name: ${name}`)
    }
  }

  createCustomer('Ann');
  createCustomer('Ann', 30);
  createCustomer('Ann', 30, 'Kiev');

  function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const allBooks = getAllBooks();
    const titles: Array<string> = [];
     
    for (let currentBook of allBooks) {
      if (currentBook.category === category) {
        titles.push(currentBook.title); 
      }
    }
    return titles; 
  }

  console.log(getBookTitlesByCategory());

  function logFirstAvailable(books: any[] = getAllBooks()): void {
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

  logFirstAvailable();

  function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    const availableBooks: string[] = bookIDs.map((id: number) => {
      const book: any = getBookById(id);
      if (book && book.available) return book.title;
    }).filter((item: string) => item );
    console.log(`Customer: ${customer}`);
    return availableBooks;
  }

  const myBooks: string[] = сheckoutBooks('Ann', 1, 2, 4);
  myBooks.forEach((item: string) => console.log(item));
}