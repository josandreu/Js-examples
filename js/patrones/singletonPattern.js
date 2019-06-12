/* INDICADO CUANDO QUEREMOS QUE DE UNA CLASE ÚNICAMENTE PODAMOS INSTANCIAR 1 SÓLO OBJETO */

let mySingleton = (function() {
  // instance stores a reference to the Singleton
  let instance;

  function init() {
    // Singleton
    // private functions and variables
    function privateMethod() {
      console.log('I am private');
    }

    let privateVar = 'A private variable';

    let privateRandomNumber = Math.random();

    // public methods and variables
    return {
      publicMethod: function() {
        console.log('I am public!');
      },

      publicProperty: 'I am a public property',

      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  }

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

const singletonA = mySingleton.getInstance();
const singletonB = mySingleton.getInstance();

singletonA.publicMethod();
console.log(singletonA.publicProperty);

// ever TRUE
console.log(singletonA.getRandomNumber() === singletonB.getRandomNumber());
