// Write an O(n) algorithm to sort an array of integers,
// where you know in advance what the lowest and highest
// values are. You can't use arr.splice(), shift() or
// unshift() for this exercise.

function bucketSort(arr, min, max) {
  // Pass every value in the array into a hashmap,
  // tracking the number of times each value appears
  const numMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (numMap.get(arr[i]) === undefined) {
      numMap.set(arr[i], 1);
    } else {
      numMap.set(arr[i], numMap.get(arr[i]) + 1);
    }
  }
  // Iterate from min to max
  // Retrieve the values in the hashmap to know how many
  // times the given value appears
  // Overwrite the values in arr in order
  let arrI = 0;
  for (let i = min; i <= max; i++) {
    let numAppearing = numMap.get(i);
    while (numAppearing) {
      arr[arrI] = i;
      numAppearing--;
      arrI++;
    }
  }
  return arr;
}

function main() {
  const arr = [4, 1, 7, 0, 5, -1, 10, 2, 3, 1, 8];
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  bucketSort(arr, min, max);
  console.log(arr);
}

main();
