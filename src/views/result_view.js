// require PubSub to allow messages to be broadcasted
const PubSub = require('../helpers/pub_sub.js');

// standard result view function
const ResultView = function () {

};

// bind events function for Result View which:
  // 1. subscribes to the PrimeChecker result channel which will include the output of the PrimeChecker function
  // 2. captures the true/false being broadcasted
  // 3. displays the true/false using the displayResult function
ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const primeOrNot = event.detail;
    this.displayResult(primeOrNot);
  });
};

// display result function which:
  // 1. takes in the result of running the prime checker function in the prime_checker file
  // 2. assigns this result to the html element with the id 'result'
  // 3. returns out the result in a string sentence
ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelecter('#result');
  resultElement.textContent = `Is your number prime? ${result}!`
};

// export result view functions
module.exports = ResultView;
