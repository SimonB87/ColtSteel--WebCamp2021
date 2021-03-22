// # JS Map method

// - creates a new array with the results of calling origin array

const numbers = [1,2,3,4,5,6,7,8,9];

const doubles = numbers.map(function(num){
  return num * 2;
});

const oddNumbers = numbers.map(function(num){
  if (num % 2 === 0) {
    return num;
  }
});

// - Practice

/*
<p>It's time to get practice with the map method! Define a function called <code>cleanNames</code>.&nbsp; It should accept an array of strings, which may contain additional space characters at the beginning and end. The <code>cleanNames</code> function should use the array map method to <strong>return a new array, full of trimmed names.&nbsp; For example:</strong></p>
*/

const names = [" Peter Jackson", " Bill Knight", " Lewis Duchovny"];

function cleanNames(arr) {
  return arr.map(function(itemArr){
      return itemArr.trim();
  });
}

const cleanNamesOutput = cleanNames(names); 
cleanNamesOutput; // is ["Peter Jackson", "Bill Knight", "Lewis Duchovny"]
