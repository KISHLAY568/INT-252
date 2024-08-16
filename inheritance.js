class Car {
  constructor(name) {
    this.brand = name;
  }
  present() {
    return "I have a " + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + ", It is a " + this.model;
  }
}

const myCar = new Model("Ford", "Mustang");
console.log(myCar.show());
