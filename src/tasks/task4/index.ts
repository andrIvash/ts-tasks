/*
Task 04. Function Type
1. Создайте функцию createCustomerID(), которая принимает имя клиента (name: string) и его
идентификатор (id: number) и возвращает конкатенацию этих значений в виде строки.
2. Объявите переменную myID строчного типа и вызовите функцию с значениями Ann, 10.
Полученное значение выведите в консоль.
3. Объявите переменную IdGenerator и задайте тип функции createCustomerID(). Присвойте этой
переменной функциональное выражение, используя стрелочную функцию. Тело аналогично
функции createCustomerID().
4. Присвойте переменной IdGenerator функцию createCustomerID() и вызовите ее. Полученное
значение выведите в консоль.
*/

export default function () {  
  console.log('--------------------- task 4');

  function createCustomerID(name: string, id: number): string {
    return `${name} ${id}`
  }

  let myID: string = createCustomerID('Ann', 10);
  console.log(myID);

  let IdGenerator: (name: string, id: number) => string;
  IdGenerator = (name: string, id: number): string => `${name} ${id}`;
  IdGenerator = createCustomerID;
  myID = IdGenerator('Ann', 20);
  console.log(myID)

}