/*
Task 11. Creating and Using Classes
1. Создайте класс ReferenceItem, который содержит:
a. Строчное свойство title
b. Числовое свойство year
c. Конструктор c двумя параметрами: строчный параметр newTitle, числовой параметр
 newYear, который в консоль выводит строчку 'Creating a new ReferenceItem...' и
  инициализирует поля.
d. Метод printItem() без параметров, который ничего не возвращает. Этот метод
 должен использовать template string literal и выводить строчку «title was
  published in year» в консоль.
2. Объявите переменную ref и проинициализируйте ее объектом ReferenceItem. Передайте
 значения параметров в конструктор. Вызовите метод printItem().
3. Закомментируйте конструктор, свойства title и year и реализуйте создание свойств
 через параметры конструктора (title- public, year - private).
4. Создайте приватное свойство _publisher: string.
a. Добавьте геттер publisher, который преобразовывает свойство _publisher в верхний
 регистр и возвращает его.
b. Добавьте сеттер publisher, который принимает строчный параметр newPublisher и
 устанавливает значение свойства _publisher в значение этого параметра.
c. Проинициализируйте свойство ref.publisher каким-либо сточным значением и
 выведите его в консоль. Результат должен быть в верхнем регистре.
5. Создайте статичное строчное свойство department и проинициализируйте его
 каким-либо значением по умолчанию. Внесите изменения в метод printItem() –
добавьте вывод в консоль этого статического свойства.
*/

import { ReferenceItem, Encyclopedia } from '../../common/classes';

export default function () {  
  console.log('--------------------- task 11');

  // const ref = new ReferenceItem('Refactoring JavaScript', 2016);
  // ref.printItem();
  // ref.publisher = 'Cook';
  // console.log(`Publisher: ${ref.publisher}`);

  const ref = new Encyclopedia('Refactoring JavaScript', 2016, 'First');
  ref.printItem();
  ref.publisher = 'Cook';
  console.log(`Publisher: ${ref.publisher}`);
}