let book = {
  /* Properties */
  title: 'La Historia Interminable',
  publisher: 'Planeta',
  author: 'Michael Ende',
  year: '1979',
  genre: 'Fantasy',

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

// show property
console.log(book.title);
// show property
let getTitle = 'title';
console.log(book[getTitle]);
// show function content
console.log(book.getCitation());
