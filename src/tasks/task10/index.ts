/*
Task 10. Interfaces for Class Types
1. Создайте класс UniversityLibrarian, который реализует интерфейс Librarian и
 реализуйте все необходимые свойства. Метод assistCustomer должен выводить
  в консоль строчку `${this.name} is assisting ${custName}`.
2. Закомментируйте код, который относится к переменной favoriteLibrarian
3. Объявите переменную favoriteLibrarian используя интерфейс Librarian и
 проинициализируйте ее с помощью объекта, созданного классом UniversityLibrarian().
  Никаких ошибок при этом не должно возникать. Проинициализируйте свойство name
   и вызовите метод assistCustomer().
*/

import { Librarian } from '../../common/interfaces';
import { UniversityLibrarian } from '../../common/classes';

export default function () {  
  console.log('--------------------- task 10');
  
  const favoriteLibrarian: Librarian = new UniversityLibrarian('John Daw','john@google.com','sci-fi');
  favoriteLibrarian.assistCustomer('Serg Burghov');

}  