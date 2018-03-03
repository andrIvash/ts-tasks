/*
Task 09. Extending Interface
1. Объявите интерфейс Person, который содержит два строчных свойства – name и email.
2. Объявите интерфейс Author на основе интерфейса Person, который расширяет указанный
 интерфейс числовым свойством numBooksPublished.
3. Объявите интерфейс Librarian на основе интерфейса Person, который расширяет 
указанный интерфейс двумя свойствами:
a. Строчное свойство department
b. Функция assistCustomer, которая принимает строчный параметр custName и ничего 
не возвращает.
4. Объявите переменную favoriteAuthor используя интерфейс Author, задайте значение 
в виде литерала объекта.
5. Объявите переменную favoriteLibrarian используя интерфейс Librarian, задайте 
значение в виде литерала объекта.
*/
import { Author, Librarian } from '../../common/interfaces';

export default function () {  
  console.log('--------------------- task 9');

  const favoriteAuthor:Author = {
    name: 'Evan Burchard',
    email: 'evan.b@google.com',
    numBooksPublished: 20
  }

  const favoriteLibrarian: Librarian  = {
    name: 'John Daw',
    email: 'john@google.com',
    department: 'sci-fi',
    assistCustomer: (custName) => {
      console.log(`Assist customer: ${custName}`);
    }
  }

  console.log(`Author: ${favoriteAuthor.name}, Number of books: ${favoriteAuthor.numBooksPublished}`)
  favoriteLibrarian.assistCustomer('Serg Burghov');
}