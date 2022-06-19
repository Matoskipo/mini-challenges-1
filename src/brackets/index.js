/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let part ={
    '(': ')',
    '{': '}',
    '[': ']',
  };
  let store = [];
  for(let i=0; i< str.length; i++)
  {
    // compare the key of the object and return the value
    if(part[str[i]])
    {
      store.push(part[str[i]]);
    }
    else{
      let x = store.pop();
      if(x != str[i])
      {
        return "invalid";
      }

    }
  }
   storedVal = store.length;
  return (stored === 0) ? "valid" : "invalid";


}
console.log(isValid("{()}"))

module.exports = isValid;




