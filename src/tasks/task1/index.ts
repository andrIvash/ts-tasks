export function task1() {
console.log('task 1');  

enum Category {'JavaScript', 'OOP', 'Testing', 'CSS'};

  function getAllBooks(): Array<any> {
    let books: Array<any> = [
      { id: 0, title: 'Refactoring JavaScript', author: 'Evan Burchard', category: Category.JavaScript, available: true},
      { id: 1, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', category: Category.Testing, available: false },
      { id: 2, title: 'CSS Secrets', author: 'Lea Verou', category: Category.CSS, available: true },
      { id: 3, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', category: Category.OOP, available: true }
    ];
    return books;
  }

  function logFirstAvailable(books: any[]): void {
    const numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for(let currentBook of books) {
      if (currentBook.available) {
        firstAvailable = currentBook.title;
        break;
      }
    }

    console.log(`Total number of books: ${numberOfBooks}`);
    console.log(`first Available Book: ${firstAvailable}`);
  }

  function getBookTitlesByCategory(category: Category): Array<string> {
    const allBooks = getAllBooks();
    const titles: Array<string> = [];
     
    for (let currentBook of allBooks) {
      if (currentBook.category === category) {
        titles.push(currentBook.title); 
      }
    }
    return titles; 
  }

  function logBookTitles(titles: Array<string>): void {
    for (let title of titles) {
      console.log(title);
    }
  }

  logBookTitles(getBookTitlesByCategory(Category.JavaScript));

  // task 3
  //--------------------------------------------------------------
  function getBookById(id: number): object {
    const allBooks:Array<any> = getAllBooks();
    return allBooks.find(book => book.id === id)
  }

  const jsBooks: Array<string> = getBookTitlesByCategory(Category.OOP);
  jsBooks.forEach(title => console.log(title));
  console.log(getBookById(3));

  //task4
  function createCustomerID(name: string, id: number): string {
    return `${name} ${id}`
  }

  let myID = createCustomerID('Anna', 10);
  console.log(myID);

  let IdGenerator: (name: string, id: number) => string;
  IdGenerator = (name: string, id: number): string => `${name} ${id}`;
  IdGenerator = createCustomerID;
  myID = IdGenerator('Anna', 20);
  console.log(myID)


};
