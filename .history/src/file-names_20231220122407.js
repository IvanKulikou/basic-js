const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const nameCount = {};

  // Helper function to generate a new name with a suffix
  const generateNewName = (name, count) => `${name}(${count})`;

  const result = names.map(name => {
    // If the name is not in the count, add it and return the same name
    if (!nameCount.hasOwnProperty(name)) {
      nameCount[name] = 1;
      return name;
    }

    // If the name is already in the count, generate a new name with a suffix
    const count = nameCount[name]++;
    return generateNewName(name, count);
  });

  return result;
}

module.exports = {
  renameFiles,
};
