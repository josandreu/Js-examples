/* Se usa para emular aún más el concepto de clases de tal manera que podamos incluir tanto métodos públicos / privados como variables dentro de un solo objeto, protegiendo así partes particulares del alcance global. Lo que resulta en una reducción en la probabilidad de que nuestros nombres de funciones entren en conflicto con otras funciones definidas en scripts adicionales en la página. */
let vehicle = function(wheels, brand) {
  // private properties
  let _wheels = wheels;
  let _brand = brand;
  let engine = 'gasoline';

  // public
  return {
    publicProperty: 'Example',

    getWheels: function() {
      return wheels;
    },

    getBrand: function() {
      return brand;
    }
  };
};

const seat = vehicle(4, 'Seat');

console.log(seat.getBrand());

console.log(seat.getWheels());

console.log(seat.publicProperty);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let basketModule = (function() {
  // privates
  let basket = [];
  function doSomethingPrivate() {
    //...
  }
  function doSomethingElsePrivate() {
    //...
  }

  // return an object exposed to the public
  return {
    // add items to our basket (objects, key:value)
    addItem: function(values) {
      basket.push(values);
    },
    // get the count of items in the basket
    getItemCount: function() {
      return basket.length;
    },
    // public alias to a private function
    doSomething: doSomethingPrivate,
    // get the total values of items in the basket
    getTotal: function() {
      let q = this.getItemCount(),
        p = 0;

      while (q--) {
        p += basket[q].price;
      }
      return p;
    }
  };
})();

basketModule.addItem({
  name: 'bread',
  price: 1.5
});

basketModule.addItem({
  name: 'butter',
  price: 1.8
});

console.log(`Items in the basket: ${basketModule.getItemCount()}`);
console.log(`Total amount: ${basketModule.getTotal()}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function(car) {
  console.log(seat.getBrand());
})(vehicle);
