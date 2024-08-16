class Car {
  constructor(company, speed, colour) {
    this.b = company;
    this.s = speed;
    this.c = colour;
  }
  print() {
    console.log("company: ", this.b);
    console.log("max speed: ", this.s);
    console.log("colour: ", this.c);
  }
}

var car1 = new Car("Ford", 200, "red");
car1.print();
var car2 = new Car("Ferrari", 500, "black");
car1.print();
