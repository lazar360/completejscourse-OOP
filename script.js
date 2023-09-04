// 'use strict';

// const Person = function (firstName, birthYear, yearOld) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   let currentYear = new Date().getFullYear();
//   this.yearOld = currentYear - this.birthYear;
// };

// const jonas = new Person('Jonas', 1991);
// const matilda = new Person('Matilda', 2017);
// // console.log(matilda);

// Person.prototype.calcAge = function(){
//     console.log(`another time, it's ${this.yearOld}` );
// }

// jonas.calcAge();
// matilda.calcAge();
// Person.prototype.species = "homo sapiens";
// console.log(jonas.species, matilda.species);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(this.speed);
}

const theBmw = new Car("BMW", 120);
theBmw.accelerate();
theBmw.brake();
theBmw.accelerate();
theBmw.brake();
theBmw.accelerate();
theBmw.brake();
theBmw.accelerate();
theBmw.brake();

const theMercedes = new Car("Metcedes", 95);
theMercedes.accelerate();
theMercedes.brake();
theMercedes.accelerate();
theMercedes.brake();