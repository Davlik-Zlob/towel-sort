
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sortArr = [];
  if (matrix === undefined) {
    return sortArr;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i % 2 === 0) {
        sortArr.push(matrix[i][j]);
      } else {
        let k = matrix[i].length - 1 - j;
        sortArr.push(matrix[i][k]);
      }
    }
  }
  return sortArr;
}
