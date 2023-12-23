const { NotImplementedError } = require('../extensions/index.js');

function getSeason(date) {
  if (
    !date ||
    Object.prototype.toString.call(date) !== '[object Date]' ||
    isNaN(date)
  ) {
    throw new Error('Invalid date');
  }

  const month = date.getMonth();

  if (month >= 2 && month <= 4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else if (month >= 8 && month <= 10) {
    return 'autumn';
  } else {
    return 'winter';
  }
}

module.exports = {
  getSeason,
};
