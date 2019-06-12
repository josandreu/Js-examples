// ejemplo programación del videojuego Street Fighter

/*
Posibles objetos: los luchadores, la barra de vida, el fondo de la pantalla, etc.
Clases: Luchador, Tiempo, MarcadorPuntos...
*/

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
};

let chunLi = new Fighter({ name: 'Chun Li', force: '3' });
let ryu = new Fighter({ name: 'Ryu', force: '7' });

console.dir(chunLi);
console.dir(ryu);

console.info(ryu.attackTo());

// creamos otro objeto a partir del objeto ryu (no se utiliza)
let ken = new ryu.constructor({ name: 'Ken', force: '8' });

console.log(ryu instanceof Fighter);

// creamos nueva propiedad a partir del prototipo (extendemos la clase)
Fighter.prototype.score = '100';
// ahora un método
Fighter.prototype.specialAttack = function() {
  return 'Booom';
};

console.info(ryu.specialAttack());

console.info(ryu.__proto__);
