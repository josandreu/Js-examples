let Fighter = function(params = {}) {
  // para poder tener acceso a las propiedades del objeto dentro de la funcion calculateDamage
  let self = this;

  /* Properties */
  this.name = params.name || 'Unknown';
  this.health = params.health || 100;
  this.force = params.force || 1; // 1 (weakness) to 10 (strongest)

  /* Methods */
  // se encierra en variable para que no sea accedido desde fuera, es privado (encapsulacion)
  let calculateDamage = function() {
    let damage = Math.floor(Math.random() * 10) + 1;
    damage *= self.force;
    return damage;
  };
  this.moveTo = function(direction) {
    // ...
  };
  this.attackTo = function(opponent) {
    let damagePerformed = calculateDamage();
    return damagePerformed;
  };
  Fighter.prototype.greet = function() {
    return `${this.name} says hello.`;
  };
};

let Player = function(params = {}) {
  this.isPlayable = true;
  this.speed = params.speed || '0';
  // herencia
  Fighter.call(this, params);
};

let ken = new Player({ name: 'Ken', force: '8', speed: '10' });

console.log(ken);

let ryu = new Fighter({ name: 'Ryu', force: '6' });

console.log(ryu);
console.log(ryu.greet());
