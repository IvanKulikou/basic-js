const { getSeason } = require('../your/path/to/getSeason'); // Adjust the path accordingly
const { expect } = require('chai');

describe('What season', () => {
  it('corretly handles argument absence', () => {
    // You can use a try-catch block to check if an error is thrown
    try {
      getSeason(); // Call the function without an argument
      // If no error is thrown, fail the test
      expect.fail('Expected an error to be thrown for missing argument');
    } catch (error) {
      // Check if the error message is correct
      expect(error.message).to.equal('Invalid date!');
    }
  });

  it('throws an error with message "Invalid date!" on tricky moment', () => {
    try {
      getSeason(new Date(NaN)); // Call the function with a tricky moment
      expect.fail('Expected an error to be thrown for tricky moment');
    } catch (error) {
      expect(error.message).to.equal('Invalid date!');
    }
  });

  it('throws an error with message "Invalid date!" on a very tricky moment', () => {
    try {
      getSeason(new Date('invalid')); // Call the function with a very tricky moment
      expect.fail('Expected an error to be thrown for very tricky moment');
    } catch (error) {
      expect(error.message).to.equal('Invalid date!');
    }
  });
});
