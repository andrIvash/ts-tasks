import 'babel-polyfill';
import { Category } from '../../common/enums';
import { getBooksByCategoryPromise }  from '../../common/methods';

export default function () {  
  console.log('--------------------- task 24');

  async function logSearchResults(category: Category) {
    let foundBooks = await getBooksByCategoryPromise(category);
    console.log(foundBooks);
  }

  console.log('Beginning search...');
  logSearchResults(Category.JavaScript)
  .catch(reason => console.log(reason));
  console.log('Search submitted...');

}

/*
Task 24. Async/await
1. npm install babel-polyfill --save-dev
2. Добавьте import "babel-polyfill"; в app.ts
3. Добавьте функцию в файл lib/utility-funtions.ts
export async function logSearchResults(category: Category) {
let foundBooks = await getBooksByCategoryPromise(category);
console.log(foundBooks);
}
4. Добавьте следующий фрагмент кода в app.ts
console.log('Beginning search...');
logSearchResults(Category.JavaScript)
.catch(reason => console.log(reason));
console.log('Search submitted...');
*/