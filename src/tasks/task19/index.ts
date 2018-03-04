import { Magazine } from '../../common/interfaces';
import { Shelf } from '../../common/classes';

export default function () {  
  console.log('--------------------- task 19');

  const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
  ];

  const magazineShelf = new Shelf(magazines);
  magazineShelf.printTitles();
  console.log(magazineShelf.find('Five Points'));
}

/*
Task 19. Generic Constraints
1. Внесите изменения в класс Shelf:
a. добавьте метод find(), который принимает строчный параметр title и возвращает
 первый найденный элемент на полке типа Т.
b. добавьте метод printTitles(), который выводит в консоль наименования того, что
 находиться на полке.
2. После добавления этих методов вы должны получить ошибку, что свойство title не
 существует.
3. В файле shelf.ts создайте интерфейс ShelfItem, который должен содержать все
 необходимые свойства, которые должны иметь тип Т, а именно title.
4. Добавьте дженерик ограничение для класса расширив тип T.
5. Вызовите функцию printTitles для журналов.
6. Найдите журнал 'Code Complete' и выведите его в консоль.
*/