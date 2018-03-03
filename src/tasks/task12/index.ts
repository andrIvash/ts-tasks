/*
Task 12. Extending Classes
1. Создайте класс Encyclopedia как наследника класса ReferenceItem. Добавьте одно 
дополнительное числовое публичное свойство edition. Используйте параметры конструктора.
2. Объявите переменную refBook и создайте объект Encyclopedia. Вызовите метод 
printItem();
3. Переопределите метод printItem(). Пусть он делает то, что делал и дополнительно
 выводит строчку в консоль «Edition: edition (year)». Вы получите ошибку, что свойство
  year недоступно. Чтобы оно было доступно измените модификатор доступа в классе
  ReferenceItem на protected.
*/

import { Encyclopedia } from '../../common/classes';

export default function () {  
  console.log('--------------------- task 12');

  const refBook = new Encyclopedia('Refactoring JavaScript', 2011, 'Second');
  refBook.printItem();

}