function task1() {

enum Category {'JavaScript', 'TypeScript'};

  function getAllBooks(): Array<any> {
    let books: Array<any> = [
      { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
      { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
      { title: 'CSS Secrets', author: 'Lea Verou', available: true },
      { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
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


 }

export default task1;