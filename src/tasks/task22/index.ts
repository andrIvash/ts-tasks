import { Category } from '../../common/enums';
import { getBookTitlesByCategory } from '../../common/methods';
import { LibMgrCallback } from '../../common/interfaces';

export default function () {  
  console.log('--------------------- task 22');

  function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    let books: string[];

    setTimeout(() =>{
      try {
        books = getBookTitlesByCategory(category);
        if (books) {
          callback(null, books);
        } else {
          throw new Error('No books found.')
        }
      }
      catch (err) {
        callback(err, null);
      }
    }, 2000);
  }

  console.log('start');
  getBooksByCategory(Category.JavaScript, (err, titles) => {
    console.log(err, titles);
  })
  console.log('finish');

}

/*
Task 22. Callback Functions
1. Перенесите функции из app.ts в lib/utility-functions.ts. Добавьте ключевое слово export. Добавьте необходимые импорты (Category, Book)
2. В файле lib/utility-functions.ts создайте интерфейс для функции обратного вызова LibMgrCallback, которая принимает два параметра:
a. err: Error,
b. titles: string[]
и ничего не возвращает
3. В файле lib/utility-functions.ts создайте функцию getBooksByCategory(), которая принимает два параметра:
a. category - категории
b. callback – тип, ранее созданный интерфейс
4. Функция должна использовать setTimeout и через 2с выполнить следующий код:
a. В секции try: Использовать функцию getBookTitlesByCategory для получения заголовков книг по категории
b. Если нашли книги, то вызвать функцию обратного вызова и передать два параметра: null и найденные книги
c. Если не нашли книг, то бросить исключение throw new Error('No books found.');
d. В секции catch: вызвать функцию обратного вызова и передать два параметра error и null.
5. Функция ничего не возвращает.
6. Создайте функцию logCategorySearch, которая имеет сигнатуру, описанную в интерфейсе LibMgrCallback. Если пришел объект ошибки, то вывести свойство err.message, в противном случае вывести названия книг.
7. Вызовите функцию getBooksByCategory() и передайте ей необходимые аргументы. Добавьте вывод сообщений в консоль перед и после вызова этой функции. Используйте Category.JavaScript и Category.Software в качестве значения первого параметра.
*/