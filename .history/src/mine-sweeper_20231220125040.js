const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const isMine = (row, col) =>
    row >= 0 && row < rows && col >= 0 && col < cols && matrix[row][col];

  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i !== 0 || j !== 0) {
            result[row][col] += isMine(row + i, col + j) ? 1 : 0;
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
