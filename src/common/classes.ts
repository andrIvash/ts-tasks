import { Librarian, ShelfItem } from './interfaces';
import { writable } from './decorators';

class UniversityLibrarian implements Librarian {
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

  @writable(true)
  assistFaculty(): void {
    console.log('Assisting faculty');
  }

  @writable(false)
  teachCommunity(): void {
    console.log('Teaching community');
  }
}

abstract class ReferenceItem {
    
  private _publisher: string;
  static department = 'General';

  constructor(public title: string, protected year: number) {
    console.log('Creating a new ReferenceItem...');
  }

  abstract printCitation(): void;

  printItem(): void {
    console.log(`${this.title} was published in ${this.year}, department: ${ReferenceItem.department}`);
  }


  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }
}

class Encyclopedia extends ReferenceItem {
  
  constructor(title: string, year: number, public edition: string) {
    super(title, year);
  }

  printCitation(): void {
    console.log(`${this.title} - ${this.year}`)
  }

  printItem(): void {
    console.log(`${this.title} was published in ${this.year}, department: ${ReferenceItem.department}, edition: ${this.edition}`);
  }
}

class Shelf<T extends ShelfItem> {
  private _items: Array<T>;

  constructor(items: Array<T>) {
    this._items = items;  
  }
  
  add(item: T): void {
    this._items.push(item);
  }
  
  getFirst(): T {
    return this._items[0];
  }
  
  find(title: string): T {
    return this._items.find((item: T) => item.title == title);
  }

  printTitles() {
    this._items.forEach((item: T) => {
      console.log(item.title);
    });
  }
}

export {UniversityLibrarian, ReferenceItem, Encyclopedia, Shelf};