import { purge } from '../../lib/utility-functions';
import { Category } from '../../common/enums';

export default function () {  
  console.log('--------------------- task 17');

  const inventory = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
  ];

  console.log(purge(inventory));
  console.log(purge([1, 2, 3]));
}

/*
Task 17. Generic Functions
1. Создайте файл lib/utility-functions.ts и добавьте в него дженерик функцию purge,
 которая принимает один параметр – дженерик массив inventory и возвращает дженерик
  массив того же типа, который содержит оригинальный массив без двух первых элементов.
2. Экспортируйте данную функцию.
3. Импортируйте данную функцию в приложение.
4. Добавьте категорию Software.
5. Объявите переменную inventory, которая содержит следующий массив книг
[
{ id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
{ id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
{ id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
{ id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
6. Вызовите функцию purge и передайте ей эти данные.
7. Выведите результат в консоль.
8. Вызовите эту же функцию, но с числовым массивом и снова выведите результат в 
консоль.
*/