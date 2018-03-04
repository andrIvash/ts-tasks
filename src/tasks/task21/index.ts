import { UniversityLibrarian } from '../../common/classes'
import { Librarian } from '../../common/interfaces'

export default function () {  
  console.log('--------------------- task 21');

  const librarian: Librarian = new UniversityLibrarian('John Daw','john@google.com','sci-fi');

  librarian.teachCommunity();
}

/*
Task 21. Method Decorator
1. Создать декоратор метода writable как фабрику, которая получает булевый параметр. Декоратор должен устанавливать свойство дескриптора writable в переданное значение.
2. Добавить два метода для класса UniversityLibrarian
a. assistFaculty() – выводит в консоль сообщение «Assisting faculty.»
b. teachCommunity() – выводит в консоль сообщение «Teaching community.»
3. Задекорируйте метод assistFaculty() как изменяемый, а метод teachCommunity() неизменяемый.
4. Попробуйте поменять методы у экземпляра этого класса.
*/