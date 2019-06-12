class Fighter {
  constructor(params = {}) {
    // para poder tener acceso a las propiedades del objeto dentro de la funcion calculateDamage
    let self = this;
    /* Properties */
    this.name = params.name || 'Unknown';
    this.health = params.health || 100;
    this.force = params.force || 1; // 1 (weakness) to 10 (strongest)
  }
  /* Methods */
  // es privado (encapsulacion)
  calculateDamage() {
    let damage = Math.floor(Math.random() * 10) + 1;
    damage *= self.force;
    return damage;
  }
  moveTo(direction) {
    // ...
  }
  attackTo(opponent) {
    let damagePerformed = calculateDamage();
    return damagePerformed;
  }
}

class Player extends Fighter {
  constructor(params) {
    super(params);
    // this.name = params.name || 'Unknown';
    // this.health = params.health || 100;
    // this.force = params.force || 1;
    this.speed = params.speed || 0;
    this.isPlayable = true;
  }
  // saludar
  greet() {
    return 'Hello my name is ' + this.name;
  }
}

class Animal {
  constructor(name = 'Unknown', legs = 4) {
    this.type = 'Animal';
    this.name = name;
    this.legs = legs;

    // update count of Animal objects
    Animal.count++;
  }

  // setter
  set eats(food) {
    this.food = food;
  }

  // getter
  get dinner() {
    return `${this.name} eats ${this.food || 'nothing'} for dinner`;
  }

  // STATIC, return number of Animal objects
  static get COUNT() {
    return Animal.count;
  }
}

// static property, ADDED AFTER CLASS IS DEFINED
Animal.count = 0;

let ryu = new Player({ name: 'Ryu', health: 100, force: 1, speed: 3 });

console.log(ryu);
console.log(ryu.greet());

const rex = new Animal('Rex', 2);
console.log(rex);
console.log(rex.dinner);

console.log(`Number of Animal´s: ${Animal.COUNT}`);

const coco = new Animal('Coco');
coco.eats = 'penes de goma';
console.log(coco.dinner);

console.log(`Number of Animal's now: ${Animal.COUNT}`);
