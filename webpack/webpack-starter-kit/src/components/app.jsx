/* 
import React from 'react';

export class HelloWorld extends React.Component {} 
*/

import React, { Component } from 'react';

export class HelloWorld extends Component {
  render() {
    return (
      <div>
        {/* Todas estas props las cogemos de hello_react.js */}
        <h1>Webpack + {this.props.name}</h1>
        <p>Hola mundo, Webpack con {this.props.name}!</p>
        <nav className="menu">
          {this.props.menu.map(link => (
            <a key={link[0]} href={link[1]}>
              {link[0]}
            </a>
          ))}
        </nav>
        <img src={this.props.logo} />
      </div>
    );
  }
}
