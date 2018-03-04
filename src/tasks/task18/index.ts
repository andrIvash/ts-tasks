import { Category } from '../../common/enums'; 
import { Magazine } from '../../common/interfaces';
import { Shelf } from '../../common/classes';

export default function () {  
  console.log('--------------------- task 18');

  const inventory = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
  ];

  const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
  ];

  const bookShelf = new Shelf(inventory);
  console.log(bookShelf.getFirst().title);

  const magazineShelf = new Shelf(magazines);
  console.log(magazineShelf.getFirst());
}

/*
Task 18. Generic Interfaces and Classes
1. Создайте интерфейс Magazine, который содержит два строчных свойства title, publisher и добавьте его в файл interfaces.ts. Экспортируйте данный интерфейс.
2. Создайте файл shelf.ts и используя экспорт по умолчанию реализуйте дженерик класс Shelf:
a. добавьте приватное свойство _items, которое является массивом элементов типа Т.
b. добавьте метод add(), который принимает один параметр item типа Т и добавляет его в массив. Ничего не возвращает.
c. добавьте метод getFirst(), который ничего не принимает, а возвращает первый элемент с полки.
3. Импортируйте данный класс и интерфейс Magazine в приложение.
4. Закомментируйте код, который относится к функции purge(), кроме переменной inventory
5. Создайте полку bookShelf и сохраните все книжки из inventory на полку. Получите первую книжку и выведите ее название в консоль.
6. Объявите переменную magazines, которая содержит следующие данные:
[
{ title: 'Programming Language Monthly', publisher: 'Code Mags' },
{ title: 'Literary Fiction Quarterly', publisher: 'College Press' },
{ title: 'Five Points', publisher: 'GSU' }
];
7. Создайте полку magazineShelf и поместите все эти журналы на полку. Получите первый журнал и выведите его в консоль.
*/