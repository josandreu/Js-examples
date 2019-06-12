let Book = function(params = {}) {
  /* 
  params = {}  (disponible a partir de ES6)
  nos permite crear un objeto book sin parámetros
  
  OTRAS FORMAS DE HACER LO MISMO, pero con function(params) {
    // FORMA 1
    params || (params = {});
    // FORMA 2
    if (!params) {
      params = {};
    }
  }
  */

  /* Properties */
  this.title = params.title || 'unknown';
  this.publisher = params.publisher || 'unknown';
  this.author = params.author;
  this.year = params.year;
  this.genre = params.genre;

  /* Methods */
  this.getCitation = function() {
    return (
      this.author +
      ', ' +
      this.title.toUpperCase() +
      '. ' +
      this.publisher +
      ', ' +
      this.year
    );
  };

  return this; // no hace falta ponerlo, lo hace implícitamente
};

let params = { title: 'Momo', author: 'Ende' };

let book1 = new Book(params);

console.log(book1);
console.log(book1.getCitation());

let book2 = new Book();
console.dir(book2);
