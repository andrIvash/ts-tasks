/* Task 16. Default Export
1. Создайте файл encyclopedia.ts и переместите в него class Encyclopedia. 
Добавьте импорт ReferenceItem. Добавьте экспорт по умолчанию.
2. Импортируйте данный класс как RefBook
3. Внесите изменения в код, который создает переменную refBook.
*/
import { Encyclopedia as RefBook } from '../../common/classes';



export default function () {  
  console.log('--------------------- task 16');

  const refBook = new RefBook('Refactoring JavaScript', 2011, 'Second');
  refBook.printCitation();
  
}