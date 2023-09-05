'use strict'

class Account{
  // 1- Public fields 
  locale = navigator.language;

  // 2- Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin){
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3- public method
  getMovements(){
    return this.#movements;
  }

  // 4- private method
  #approval(val){
    return true;
  }

}

const acc1 = new Account('jonas', 'EUR', 1111);

