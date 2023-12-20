const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // Set default values for options if they are not provided
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition === undefined ? '' : options.addition;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  // Create an array of repeated additions
  const repeatedAddition = Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);

  // Create an array of repeated strings (including the repeated additions)
  const repeatedString = Array(repeatTimes)
    .fill(str + repeatedAddition)
    .join(separator);

  return repeatedString;
}

module.exports = {
  repeater,
};
