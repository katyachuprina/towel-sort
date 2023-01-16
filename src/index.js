
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newMatrix = [];
  for (let i=0; i < matrix.length; i++) {
    for (let j=0; j < matrix.length[i]; j++) {
      newMatrix.push(matrix[i][j])
    }
  }
  return newMatrix;
}
