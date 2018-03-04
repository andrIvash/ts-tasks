/*
Functions
Task 03. Arrow Functions
1. Добавьте свойство id для коллекции книг в функции getAllBooks.
2. Выведите title книг из категории JavaScript, используя forEach и стрелочную функцию
3. Создайте функцию getBookByID(), которая принимает id книжки и возвращает книжку.
Используйте функцию getAllBooks(), метод массива find и стрелочную функцию.
*/

import { 
  getAllBooks, 
  getBookTitlesByCategory
} from '../../common/methods';

import {Category} from '../../common/enums';

export default function () {  
  console.log('--------------------- task 3');


  function getBookById(id: number): object {
    const allBooks:Array<any> = getAllBooks();
    return allBooks.find(book => book.id === id)
  }

  const jsBooks: Array<string> = getBookTitlesByCategory(Category.JavaScript);
  jsBooks.forEach(title => console.log(title));

  console.log(getBookById(3));

};