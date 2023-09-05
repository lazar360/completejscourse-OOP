'use strict';

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name !`);
  }

  get fullName() {
    return this._fullName;
  }
}

// const jessica = new PersonCl('Jessica Davis', 1996);
// jessica.calcAge();
// console.log(jessica.age);
// jessica.fullName = "Jessica Davis"
// console.log(jessica._fullName);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this._fullName} !`);
// };

// jessica.greet();

// const account = {
//   owner: 'Jonas',
//   movements: [200, 300, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//       },
// };

// const steven = Object.create(PersonProto);
// const jonas = Object.create(PersonProto);
// steven.name = 'steven';
// steven.birthYear = 1990;
// console.log(jonas);
// steven.calcAge();

// class Car {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//       }

// accelerate(){
//     this.speed += 20;
//     console.log(`Accelerate : ${this.speed}`);
// }

// brake(){
//     this.speed -= 10;
//     console.log(`Brake : ${this.speed}`);
// }
//  get speedUs(){
//     return this.speed / 1.6;
//  }

//  set speedUs(speed){
//     this._speed = speed * 1.6;
//  }
// }

// const vw = new Car('volkswagen', 100);
// console.log(vw.speedUs);
// vw.accelerate();
// vw.brake();
// console.log(vw.speedUs);
// vw.speedUs = 100;
// console.log(vw.speedUs);

// const Person = function(firstName, birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function(){
//     console.log(2037 - this.birthYear);
// }

// const Student = function(firstName, birthYear, course){
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// }

// Student.prototype.introduce = function(){
//     console.log(`Hello my name is ${this.firstName} and I study ${this.course}`);
// };
// const mike = new Student('mike', 2020, 'computer')
// mike.introduce();

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(
      `Hello my name is ${this.fullName} and I study ${this.course}`
    );
  }

  calcAge(){
    console.log('method over-ride');
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'computer science');
console.log(martha);
martha.introduce();
martha.calcAge();
