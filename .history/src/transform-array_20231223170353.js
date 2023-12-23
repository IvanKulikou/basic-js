const { NotImplementedError } = require('../extensions/index.js');

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }

  const result = [];
  let ignoreNext = false;

  for (let i = 0; i < arr.length; i++) {
    if (ignoreNext) {
      ignoreNext = false;
      continue;
    }

    switch (arr[i]) {
      case '--double-next':
        if (i < arr.length - 1) {
          result.push(arr[i + 1]);
          ignoreNext = true; // Skip the next element
        }
        break;
      case '--double-prev':
        if (i > 0) {
          result.push(result[result.length - 1]);
        }
        break;
      case '--discard-next':
        ignoreNext = true;
        break;
      case '--discard-prev':
        if (i > 0) {
          result.pop();
        }
        break;
      default:
        result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  transform,
};
