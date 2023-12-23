const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  // Check if sampleActivity is a string
  if (typeof sampleActivity !== 'string') {
    return false;
  }

  // Check if sampleActivity is a valid number and within the appropriate range
  const parsedActivity = parseFloat(sampleActivity);
  if (
    isNaN(parsedActivity) ||
    parsedActivity <= 0 ||
    parsedActivity > MODERN_ACTIVITY
  ) {
    return false;
  }

  // Calculate the age using the formula: age = ln(MODERN_ACTIVITY / sampleActivity) * (HALF_LIFE_PERIOD / 0.693)
  const age = Math.ceil(
    Math.log(MODERN_ACTIVITY / parsedActivity) * (HALF_LIFE_PERIOD / 0.693)
  );

  return age;
}

module.exports = {
  dateSample,
};
