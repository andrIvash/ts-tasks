import { Librarian } from '../../common/interfaces';
import { sealed,  logger} from '../../common/decorators';


export default function () {  
  console.log('--------------------- task 20');

  @sealed('my metadata')
  @logger
  class UniversityLibrarian {
    name: string;
    email: string;
    department: string;

    constructor(name: string, email: string, department: string) {
      this.name = name;
      this.email = email;
      this.department = department;
    }

    assistCustomer(custName: string): void {
      console.log(`${this.name} is assisting ${custName}`);
    }
  }

  const favoriteLibrarian: Librarian = new UniversityLibrarian('John Daw','john@google.com','sci-fi');
  favoriteLibrarian.assistCustomer('Serg Burghov');
  
}

/*
Task 20.1. Class Decorators
1. Создайте файл decorators.ts.
2. Создайте декоратор класса sealed, для того, чтобы предотвратить добавление новых свойств объекту класса и прототипу объекта. Функция-декоратор должна принимать один строчный параметр и ничего не должна возвращать. Перед выполнением функционала функция должна вывести в консоль сообщение «Sealing the constructor + параметр». Используйте метод Object.seal().
3. Примените данный декоратор к классу UniversityLibrarian. Проверьте сообщение в консоли.

Task 20.2. Class Decorators that replace constructor functions
1. Создайте декоратор класса logger, который будет изменять конструктор класса.
2. Объявите внутри декоратора переменную newConstructor: Function и проинициализируйте ее функциональным выражением. Новый конструктор должен выводить в консоль сообщение «Creating new instance» и выводить переданный параметр (имя класса).
3. Проинициализируйте прототип нового конструктора объектом, созданным на основе прототипа переданного класса используя Object.create().
4. Пропишите корректное значение для свойства newConstructor.prototype.constructor (переданный параметр)
5. Верните из декоратора новый конструктор, предварительно преобразовав его к типу <TFunction>.
6. Примените этот декоратор к классу UniversityLibrarian. Проверьте результат работы в консоли.
*/