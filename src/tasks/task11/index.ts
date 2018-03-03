
export default function () {  
  console.log('--------------------- task 11');

  class ReferenceItem {
    
    private _publisher: string;
    static department = 'General';

    constructor(public title: string, private year: number) {
      console.log('Creating a new ReferenceItem...');
    }

    printItem(): void {
      console.log(`${this.title} was published in ${this.year}, department: ${ReferenceItem.department}`);
    }
  }

  const ref = new ReferenceItem('Refactoring JavaScript', 2016);
  ref.printItem();
}