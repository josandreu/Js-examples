/* ARCHIVO PRINCIPAL DEL PROYECTO */
import style from './style.css';
import sass from './scss/main.scss';
import logo from './img/webpack-logo.svg';
//import texture from './img/texture1.jpg';
import data from './data.json';
import { suma } from './suma'; // importamos la funcion suma del modulo suma.js

const profesor = 'Jose';

console.log(`Hola mundo, soy ${profesor}`);

console.log(suma(9, 8));

const d = document,
  app = d.getElementById('app'),
  h1 = d.createElement('h1'),
  img = d.createElement('img'),
  p = document.createElement('p'),
  nav = document.createElement('nav');

// este menu será el de navegación, cogerá los datos del archivo data.json (variable data)
// la rellenaremos con un foreach, por eso la declaramos vacía. Nos interesa la propiedad links
let menu = '';

data.links.forEach(link => (menu += `<a href="${link[1]}">${link[0]}</a>`));

h1.textContent = 'Webpack';
p.textContent = 'Creando mi primera aplicación con Webpack';
img.src = logo;

nav.classList.add('menu');
nav.innerHTML = menu;

app.appendChild(h1);
app.appendChild(p);
app.appendChild(nav);
app.appendChild(img);

console.log(data);
