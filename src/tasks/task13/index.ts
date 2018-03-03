/*
Task 13. Creating Abstract Classes
1. Внесите изменения в класс ReferenceItem – сделайте его абстрактным. Закомментируйте
 код, который относится к переменной ref, поскольку нельзя создавать экземпляры 
 абстрактного класса.
2. Добавьте абстрактный метод printCitation(), который не принимает параметров и не
 возвращает значения. У этого метода не должно быть реализации. После этого Вы 
 получите ошибку в классе Encyclopedia, которая будет сообщать, что не реализован
  абстрактный метод.
3. Добавьте реализацию метода printCitation в класс Encyclopedia. Метод должен 
выводить в консоль строчку «title – year».
*/

import { Encyclopedia } from '../../common/classes';

export default function () {  
  console.log('--------------------- task 13');

  const refBook = new Encyclopedia('Refactoring JavaScript', 2011, 'Second');
  refBook.printCitation();
  
}