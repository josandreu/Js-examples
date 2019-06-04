// disponibles dentro del API de JavaScript

// window.setTimeOut()

setTimeout(() => {
  console.log('Aquí estoy');
}, 2000); // milisegundos

const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');

// Una forma, todo en la misma función

b1.onclick = function() {
  setTimeout(function() {
    alert('Aquí estoy');
  }, 3000);
};

// Otra forma

let temporizado = function() {
  console.log('Aquí estoy de nuevo');
};

let clickBoton = function() {
  setTimeout(temporizado, 3000);
};

b2.onclick = clickBoton;
