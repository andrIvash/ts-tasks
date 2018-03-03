/*
Task 06. Function Overloading
1. Создайте функцию getTitles(), которая принимает разные типы параметров 
и возвращает массив наименований книг. Функция может возвращать массив книг 
по автору или по доступности. Для реализации функции создайте две сигнатуры 
с разными типами параметров и реализацию с параметром типа any. Функция должна
 анализировать тип параметра с помощью оператора typeof и формировать 
 результирующий массив из массива, полученного с помощью функции getAllBooks(),
  анализируя или свойство book.author или book.available.
2. Объявите переменную checkedOutBooks и вызовите функцию getTitles(false).
 Выведите результат в консоль используя forEach и стрелочную функцию.
*/
import { getAllBooks } from '../../common/methods';

export default function () {  
  console.log('--------------------- task 6');
  
  function getTitles(param: string): any[];
  function getTitles(param: boolean): any[];
  function getTitles(param: any): any[] {
    const books: any[] = getAllBooks();
    switch (typeof param) {
      case 'string' : {
        return books.filter((book => book.author === param))
      }
      case 'boolean' : {
        return books.filter(book => book.available == param)
      }
      default: {
        return getAllBooks()
      }
    } 
  }

  const checkedOutBooks = getTitles(false);
  checkedOutBooks.forEach(book => console.log(book));     
}