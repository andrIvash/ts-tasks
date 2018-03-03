/*
Task 07. Defining an Interface
1. Объявите интерфейс Book, который включает следующие поля:
a. id - число
b. title - строка
c. author - строка
d. available - булеан
e. category – категория
2. Внесите изменения в функцию getAllBooks(), укажите тип возвращаемого значения, 
используя объявленный выше интерфейс Book. Удалите временно id у книжки и увидите,
 что появится ошибка.
3. Внесите изменения в функцию getBookByID(), укажите тип возвращаемого значения, 
используя объявленный выше интерфейс. Возможно, понадобиться добавить объединение 
с типом undefined, поскольку метод find, если не найдет элемент, вернет undefined.
4. Создайте функцию PrintBook(), которая на вход принимает книгу и выводит в консоль
 фразу book.title + by + book.author. Для типа параметра используйте интерфейс Book.
5. Объявите переменную myBook и присвойте ей следующий объект
{
id: 5,
title: 'Colors, Backgrounds, and Gradients',
author: 'Eric A. Meyer',
available: true,
category: Category.CSS,
year: 2015,
copies: 3
}
6. Вызовите функцию PrintBook() и передайте ей myBook. Никаких ошибок при этом не
 должно появляться.
7. Добавьте в интерфейс Book свойство pages: number. Вы получите ошибку в функции
 getAllBooks(). Чтобы ошибка не возникала сделайте свойство не обязательным.
8. Укажите явно для переменной myBook тип Book. Вы снова получите ошибку. Удалите
 свойства year, copies. Добавьте свойство pages: 200.
9. Добавьте в интерфейс Book необязательное свойство markDamaged, которое является
 методом. Метод принимает на вход строчный параметр reason и ничего не возвращает.
  Добавьте этот метод в объект myBook. Метод должен выводить строчку 
  `Damaged: ${reason}`, используя стрелочную функцию. Вызовите этот метод и передайте
   строку ‘missing back cover’ 
*/

import {Category} from '../../common/sets';
import {Book} from '../../common/interfaces';

export default function () {  
  console.log('--------------------- task 7');

  function PrintBook(book :Book): void {
    console.log(`${book.title} by ${book.author}`);
  }

  const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string): void => {
      console.log(`Damaged: ${reason}`);
    }
  }

  PrintBook(myBook);
  myBook.markDamaged('missing back cover');
}