'use strict';

const Person = function (firstName, birthYear, yearOld) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  let currentYear = new Date().getFullYear();
  this.yearOld = currentYear - this.birthYear;
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
// console.log(matilda);

Person.prototype.calcAge = function(){
    console.log(`another time, it's ${this.yearOld}` );
}

jonas.calcAge();
matilda.calcAge();