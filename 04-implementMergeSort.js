// Write a function mSort that sorts the dataset above
// using the merge sort algorithm.

let count = 0;
function mSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  count++;
  left = mSort(left);
  right = mSort(right);
  return merge(left, right, array);
}

let mergeCount = 0;
function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  console.log(array);
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex] = left[leftIndex];
      outputIndex++;
      leftIndex++;
    } else {
      array[outputIndex] = right[rightIndex];
      outputIndex++;
      rightIndex++;
    }
  }

  // If there is still an item in the left array, add it
  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex] = left[i];
    outputIndex++;
  }

  // If there is still an item in the right array, add it
  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex] = right[i];
    outputIndex++;
  }
  mergeCount++;
  return array;
}

const sampleArr = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

console.log(mSort(sampleArr));
