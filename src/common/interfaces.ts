import {Category} from './sets';

export interface DamageLogger {
  (reason: string): void;
}

export interface Book {
  id: number,
  title: string,
  author:  string,
  available: boolean,
  category: Category,
  pages?: number,
  markDamaged?: DamageLogger
};

export interface Person {
  name: string,
  email: string
}

export interface Author extends Person {
  numBooksPublished: number
}

export interface Librarian extends Person {
  department: string,
  assistCustomer(custName: string): void
}