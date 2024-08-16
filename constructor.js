class Student {
  constructor(name, age) {
    this.n = name;
    this.a = age;
  }
  stu() {
    console.log("The name of the student is: ", this.n);
    console.log("The age of the student is: ", this.a);
  }
}

var stu1 = new Student("Peter", 20);
var stu2 = new Student("Kishlay", 21);

stu1.stu();
stu2.stu();
