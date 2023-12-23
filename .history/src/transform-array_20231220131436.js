const { NotImplementedError } = require('../extensions/index.js');

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input should be an array');
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-next':
        if (i < arr.length - 1 && !isControlSequence(arr[i + 1])) {
          result.push(arr[i + 1]);
        }
        break;
      case '--discard-next':
        i++;
        break;
      case '--double-prev':
        if (i > 0 && !isControlSequence(arr[i - 1])) {
          result.push(result[result.length - 1]);
        }
        break;
      case '--discard-prev':
        if (i > 0 && !isControlSequence(arr[i - 1])) {
          result.pop();
        }
        break;
      default:
        result.push(arr[i]);
    }
  }

  return result;
}

function isControlSequence(element) {
  return [
    '--double-next',
    '--discard-next',
    '--double-prev',
    '--discard-prev',
  ].includes(element);
}

module.exports = {
  transform,
};
