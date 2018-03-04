import {Category} from './enums';

interface DamageLogger {
  (reason: string): void;
}

interface Book {
  id: number,
  title: string,
  author:  string,
  available: boolean,
  category: Category,
  pages?: number,
  markDamaged?: DamageLogger
};

interface Person {
  name: string,
  email: string
}

interface Author extends Person {
  numBooksPublished: number
}

interface Librarian extends Person {
  department: string,
  assistCustomer(custName: string): void
  assistFaculty?(): void
  teachCommunity?(): void
}

interface Magazine {
  title: string,
  publisher: string
}

interface ShelfItem {
  title: string
}

interface LibMgrCallback {
  (err: Error, titles: string[]): void;
}

export {Book, Person, Author, Librarian, DamageLogger as Logger, Magazine, ShelfItem, LibMgrCallback};