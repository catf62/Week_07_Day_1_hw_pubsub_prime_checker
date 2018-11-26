// require PubSub to connect messages
const PubSub = require('../helpers/pub_sub.js')

// standard FormView function
const FormView = function () {

}

// bindEvents function for view which:
  // 1. grabs hold of the html element with the id prime-checker-form
  // 2. adds an event listener to listed for the submit button for the form being clicked
  // 3. prevents the default, which is to refresh the page when submit is clicked
  // 4. select the number entered into the number field html element
  // publishes the submitted number to hand it on through PubSub

FormView.prototype.bindEvents = function () {
  const form = document.querySelecter('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtedNumber = event.target.number.value;
    PubSub.publish('FormView:number-submitted', inputtedNumber);
  });
};

// export FormView functions
module.exports = FormView;
