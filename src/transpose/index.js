/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
 function transpose(array) {
    const mat =[]
    for(let i = 0; i < array[0].length; i++)
    {
      const eachCol = []
      for(let j = 0; j < array.length; j++)
      {
        eachCol.push(array[j][i])
      }
      mat.push(eachCol);
    }
    return mat;
  }
  console.log(transpose([
    [1, 7, 9],
        [2, 3, 5],
  ]))
  module.exports = transpose;
