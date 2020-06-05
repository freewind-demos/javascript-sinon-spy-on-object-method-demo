export default class User {

  constructor(name) {
    this.name = name;
  }

  hello() {
    return `Hello, ${this.upperName(this.name)}`;
  }

  upperName(name) {
    return name.toUpperCase();
  }
}
