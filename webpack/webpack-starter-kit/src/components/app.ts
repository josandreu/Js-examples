export class HelloWorld {
  // hay que definir el tipo de dato de cada propiedad
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet(): string {
    return `Hola mundo, Webpack con ${this.name}`;
  }
}
