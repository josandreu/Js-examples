import style from './style.css';
import sass from './scss/main.scss';
import logo from './img/react-logo.svg';
import data from './data.json';
import React from 'react';
import ReactDom from 'react-dom';
import { HelloWorld } from './components/app.jsx';

ReactDom.render(
  <HelloWorld name="React" logo={logo} menu={data.links} />,
  document.getElementById('app')
);
