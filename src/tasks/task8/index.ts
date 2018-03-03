/*
Task 08. Defining an Interface for Function Types
1. Объявите интерфейс DamageLogger, который будет описывать тип для функции, 
которая принимает один строчный параметр и ничего не возвращает.
2. Внесите изменения в интерфейс Book: используйте объявленный интерфейс для поля 
markDamaged.
3. Объявите переменную logDamage используя объявленный ранее интерфейс. 
Создайте функцию, которая удовлетворяет этому интерфейсу, присвойте объявленной 
переменной. Вызовите функцию.
*/

import { DamageLogger } from '../../common/interfaces';

export default function () {  
  console.log('--------------------- task 8');

  const logDamage: DamageLogger = (reason: string): void => {
      console.log(`Damaged: ${reason}`);
  }

  logDamage('missing pages');
}