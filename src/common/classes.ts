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