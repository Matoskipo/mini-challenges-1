/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
 function transpose(array) {
    const matrix =[]
    for(let i = 0; i < array[0].length; i++)
    {
      //declare a variable to store each column
      const eachCol = []
      for(let j = 0; j < array.length; j++)
      {
        eachCol.push(array[j][i])
      }
      matrix.push(eachCol);
    }
    return matrix;
  }

  module.exports = transpose;
