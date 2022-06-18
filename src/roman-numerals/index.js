/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
 function romanToDecimal(roman) {
    const numerals ={
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let splitted = roman.toUpperCase().split("");
    let sum = 0;
    let i = 0;
    while(i < splitted.length){
      if((splitted[i] === "I" && splitted[i+1] === "V") ||
      (splitted[i] === "I" && splitted[i+1] === "X")||
      (splitted[i] === "X" && splitted[i+1] === "L")||
      (splitted[i] === "X" && splitted[i+1] === "C")||
      (splitted[i] === "C" && splitted[i+1] === "D")||
      splitted[i] === "C" && splitted[i+1] === "M")
      {
         sum+= (numerals[splitted[i+1]] - numerals[splitted[i]]);
         i+=2;
      }
      else{
        if(numerals[splitted[i]])
        {
          sum+= numerals[splitted[i]]
          i++;
        }
      }
    }
    return sum;
   }




   console.log(romanToDecimal(""))

   module.exports = romanToDecimal;
