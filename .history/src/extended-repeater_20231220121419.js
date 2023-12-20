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
  // Default values for options
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition =
    options.addition !== undefined ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  // Create an array of repeated strings with additions
  const repeatedWithAdditions = Array(additionRepeatTimes)
    .fill(str + addition)
    .join(additionSeparator);

  // Repeat the above array and join with the separator
  return Array(repeatTimes).fill(repeatedWithAdditions).join(separator);
}

module.exports = {
  repeater,
};
