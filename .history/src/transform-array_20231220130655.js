const { NotImplementedError } = require('../extensions/index.js');

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          result.pop();
        }
        break;
      case '--double-next':
        if (i < arr.length - 1) {
          result.push(arr[i + 1]);
          // Remove the actual control sequence
          result.pop();
        }
        break;
      case '--double-prev':
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          result.push(result[result.length - 1]);
        }
        break;
      default:
        result.push(arr[i]);
        break;
    }
  }

  return result;
}

module.exports = {
  transform,
};
