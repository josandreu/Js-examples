/* 
They can be used to modify existing systems where we wish to add additional features to objects without the need to heavily modify the underlying code using them

They can be used to modify existing systems where we wish to add additional features to objects without the need to heavily modify the underlying code using them
*/

/* Example 1: Decorating Constructors With New Functionality */

// A vehicle constructor
function Vehicle(vehicleType) {
  // some sane defaults
  this.vehicleType = vehicleType || 'car';
  this.model = 'default';
  this.license = '00000-000';
}

// Test instance for a basic vehicle
var testInstance = new Vehicle('car');
console.log(testInstance);

// Outputs:
// vehicle: car, model:default, license: 00000-000

// Lets create a new instance of vehicle, to be decorated
var truck = new Vehicle('truck');

// New functionality we're decorating vehicle with
truck.setModel = function(modelName) {
  this.model = modelName;
};

truck.setColor = function(color) {
  this.color = color;
};

// Test the value setters and value assignment works correctly
truck.setModel('CAT');
truck.setColor('blue');

console.log(truck);

// Outputs:
// vehicle:truck, model:CAT, color: blue

// Demonstrate "vehicle" is still unaltered
var secondInstance = new Vehicle('car');
console.log(secondInstance);

// Outputs:
// vehicle: car, model:default, license: 00000-000

/* Example 2: Decorating Objects With Multiple Decorators */

// The constructor to decorate
function MacBook() {
  this.cost = function() {
    return 997;
  };
  this.screenSize = function() {
    return 11.6;
  };
}

// Decorator 1
function memory(macbook) {
  var v = macbook.cost();
  macbook.cost = function() {
    return v + 75;
  };
}

// Decorator 2
function engraving(macbook) {
  var v = macbook.cost();
  macbook.cost = function() {
    return v + 200;
  };
}

// Decorator 3
function insurance(macbook) {
  var v = macbook.cost();
  macbook.cost = function() {
    return v + 250;
  };
}

var mb = new MacBook();
memory(mb);
engraving(mb);
insurance(mb);

// Outputs: 1522
console.log(mb.cost());

// Outputs: 11.6
console.log(mb.screenSize());
