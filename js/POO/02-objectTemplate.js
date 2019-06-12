// This is not the best option for create objects

let book = {
  /* Properties */
  title: '',
  publisher: '',
  author: '',
  year: '',
  genre: '',

  /* Methods */
  getCitation: function() {
    return (
      this.author +
      ', ' +
      this.title.toUpperCase() +
      '. ' +
      this.publisher +
      ', ' +
      this.year
    );
  }
};

// create objects from book template
let book1 = Object.create(book);
let book2 = Object.create(book);

book1.author = 'Paco Montañés';

console.dir(book1);
