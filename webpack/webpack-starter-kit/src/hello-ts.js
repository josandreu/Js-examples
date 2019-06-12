/* ARCHIVO PRINCIPAL DEL PROYECTO */
import style from './style.css';
import sass from './scss/main.scss';
import logo from './img/typescript-logo.svg';
import data from './data.json';
import { HelloWorld } from './components/app';

const d = document,
  app = d.getElementById('app'),
  h1 = d.createElement('h1'),
  img = d.createElement('img'),
  p = document.createElement('p'),
  nav = document.createElement('nav'),
  hello = new HelloWorld('TypeScript');

// este menu será el de navegación, cogerá los datos del archivo data.json (variable data)
// la rellenaremos con un foreach, por eso la declaramos vacía. Nos interesa la propiedad links
let menu = '';

data.links.forEach(link => (menu += `<a href="${link[1]}">${link[0]}</a>`));

h1.textContent = 'Webpack +  TypeScript';
p.textContent = hello.greet();
img.src = logo;

nav.classList.add('menu');
nav.innerHTML = menu;

app.appendChild(h1);
app.appendChild(p);
app.appendChild(nav);
app.appendChild(img);
