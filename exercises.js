let arrays = [[1, 2, 3], [4, 5], [6]];

//use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays

export function flattening(list) {
  //return a flattened array of all of the arrays using the reduce method
  return list.reduce((previousValue, currentValue) =>
    previousValue.concat(currentValue)
  );
}

console.log(flattening(arrays));

//write a higher-order function loop that provides something like a for loop statement.
//it takes a value, a test function, an update function, and a body function.
export function loop(value, test, update, body) {
  let curValue = value;
  while (true) {
    console.log("Iteration, curValue " + curValue);
    if (test(curValue)) {
      //if test is true, do body
      console.log("Calling body...");
      body(curValue);
      curValue = update(curValue);
    } else {
      console.log("curValue test is false");
      break;
    }
  }

  //each iteration, it first runs the test function on the current loop value and stops if that returns false.
  //then it calls the body function, giving it the current value.
  //finally, it calls the update function to create a new value and starts from the beginning.
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

//every single value when tested must return true for the entire function to return true
export function everyLoop(array, test) {
  let curResult = true;
  for (let item of array) {
    console.log(test(item));
    curResult = curResult && test(item);
  }
  return curResult;
}

export function everySome(array, test) {
  return !array.some((value) => !test(value));
}

//everyLoop
console.log("Should be true");
console.log(everyLoop([1, 3, 5], (n) => n < 10));
// → true
console.log("Should be false");
console.log(everyLoop([2, 4, 16], (n) => n < 10));
// → false
console.log("Should be true");
console.log(everyLoop([], (n) => n < 10));
// → true

//everySome
console.log("Should be true");
console.log(everySome([1, 3, 5], (n) => n < 10));
// → true
console.log("Should be false");
console.log(everySome([2, 4, 16], (n) => n < 10));
// → false
console.log("Should be true");
console.log(everySome([], (n) => n < 10));
// → true
