export class HelloWorld {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hola mundo, Webpack con ${this.name}`;
  }
}
