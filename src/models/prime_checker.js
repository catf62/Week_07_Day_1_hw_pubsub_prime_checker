// link to pubsub to allow data to be re-routed
const PubSub = require('../helpers/pub_sub.js')

// standard PrimeChecker function
const PrimeChecker = function() {

};

// PrimeChecker bindEvents function which will:
// 1. subscribe to the submitted number channel through pub_sub
// 2. captue the inputted number and send it through the numberIsPrime function returning whether or not the inputted number is prime
// 3. publish the result of running the numberIsPrime function and send it back through PubSub
PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    const result = this.numberIsPrime(inputtedNumber);
    PubSub.publish('PrimeChecker:result-calculated', result);
  });
};

// numberIsPrime function which:
// 1. takes in a number
// 2. if the number is less than or equal to 1, it returns false
// 3. if the number is greater than 1, it divides the number by all the numbers lower than it, if any of them return modulo zero return false
// 4. This should only leave prime numbers which will return true
PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

// export PrimeChecker functions
module.exports = PrimeChecker;
