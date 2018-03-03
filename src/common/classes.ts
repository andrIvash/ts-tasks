import { Librarian } from './interfaces';

export class UniversityLibrarian implements Librarian {
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

export abstract class ReferenceItem {
    
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

export class Encyclopedia extends ReferenceItem {
  
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