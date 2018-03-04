import { Category } from '../../common/enums';
import { getBookTitlesByCategory } from '../../common/methods';
import { LibMgrCallback } from '../../common/interfaces';

export default function () {  
  console.log('--------------------- task 23');
  
  function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
          const titles = getBookTitlesByCategory(category);
          if (titles) {
            resolve(titles);
          } else {
            reject(new Error('No books found.'))
          }
      }, 2000);
    })
  }
  console.log('sart1');
  getBooksByCategoryPromise(Category.JavaScript)
  .then((titles: string[]) => {
    console.log(titles);
    return titles.length;
  }).then((quantity: number) => {
    console.log(`Quantyty: ${quantity}`);
  })  
  .catch((err: Error) => console.log(err))
  console.log('finish1');
}

/*
Task 23. Promises
1. Создайте функцию getBooksByCategoryPromise, которая принимает один параметр – category
 и возвращает промис – массив заголовков книг.
2. Используйте new Promise((resolve, reject) => { setTimeout(() => {…}, 2000) }); Добавьте
 код, аналогичный функции getBooksByCategory(), только теперь используйте resolve и reject.
  Верните из функции созданный промис.
3. Вызовите функцию getBooksByCategoryPromise и зарегистрируйте функции обратного вызова с
 помощью методов then и catch. Добавьте вывод сообщений в консоль перед и после вызова этой
  функции. Используйте Category.JavaScript и Category.Software в качестве значения параметра
4. Верните из функции, зарегистрированной с помощью then(), количество найденных книг. 
Зарегистрируйте с помощью еще одного метода then() функцию, которая должна вывести в 
консоль количество найденных книг.
*/