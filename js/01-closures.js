// ejemplo 1

function ej1() {
  function sub() {
    return 'angel';
  }

  return sub();

  function sub() {
    return 'demonio';
  }
}

console.log(ej1()); // demonio, la razón es que la 2ª funcion sub() SOBREESCRIBE la 1ª al ser funciones ANÓNIMAS, independientemente del return que hay en medio

// ejemplo 2

function ej2() {
  var sub2 = function() {
    return 'angel';
  };

  return sub2();

  var sub2 = function() {
    return 'demonio';
  };
}

console.log(ej2()); // angel, ya que después del return ya no ejecuta lo que hay después

// ejemplo 3

console.log(ej3()); // angel, la ejecutamos antes de declararla. Es posible porque JavaScript lo permite. NO SERÍA POSIBLE SI HUBIÉRAMOS GUARDADO LA FUNCIÓN EN UNA VARIABLE let/var ej3 = function()...

function ej3() {
  var sub3 = function() {
    return 'angel';
  };

  return sub3();

  var sub3 = function() {
    return 'demonio';
  };
}

// ejemplo 4

function ej4() {
  return sub4();

  var sub4 = function() {
    return 'angel';
  };

  var sub4 = function() {
    return 'demonio';
  };
}

console.log(ej4()); // error, sub4 is not a function. Da este error porque estamos intentando ejecutar la función sub4, que está guardada en una variable, y las variables se crean en tiempo de ejecución por lo que al llamar a la función dentro del return estas variables aún no existen
