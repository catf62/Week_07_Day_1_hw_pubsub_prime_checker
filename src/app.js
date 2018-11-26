// require PrimeChecker model
const PrimeChecker = require('./models/word_counter.js')
// require views
const FormView = require('./views/form_view.js')
const ResultView = require('./views/result_view.js')

// listen for:
  // 1. events from the bind events function in the form view
  // 2. events from the bind events function in the PrimeChecker model
  // 3. events from the bind events function in the result view
document.addEventListener('DOMContentLoaded', () => {
  const formView = new FormView();
  formView.bindEvents();

  const primeChecker = new PrimeChecker();
  primeChecker.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});
