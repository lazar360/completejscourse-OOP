'use strict';

class PersonCl {
    constructor(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    }
  
    calcAge() {
      console.log(2037 - this.birthYear);
    }
  }
  
  const jessica = new PersonCl('Jessica', 1996);
  jessica.calcAge();
  
  PersonCl.prototype.greet = function(){
      console.log(`Hey ${this.firstName} !`);
  }
  
  jessica.greet();
const account = {
    owner: 'Jonas',
    movements: [200,300,120,300],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    }
}

console.log(account.latest);

account.latest = 50;
