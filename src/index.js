
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];
  for (let i=0; i < matrix.length; i++) {
    for (let j=0; j < matrix.length[i]; j++) {
      if (i % 2 == 0) {
        array.push(matrix[i][j]); 
      } else if (i % 2 == 1) {
        array.push(matrix[i][matrix[i].lengh - j - 1]);
      }
    }
  }
  return array;
}


