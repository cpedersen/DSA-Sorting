// Write an algorithm to shuffle an array into a random order
// in place (i.e., without creating a new array).

function partition(array, start, end) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  const pivot = array[end - 1];
  let j = start;
  let randomNum = Math.floor(Math.random() * (pivot * 2));

  for (let i = start; i < end - 1; i++) {
    if (randomNum <= pivot) {
      swap(array, i, j);
      j++;
    }
  }

  swap(array, end - 1, j);
  return j;
}

function qShuffle(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }

  const middle = partition(array, start, end);

  array = qShuffle(array, start, middle);
  array = qShuffle(array, middle + 1, end);

  return array;
}

let arr = [5, 7, 1, 0, 2, 10, 12, 3, 6, 9, 4];

console.log(qShuffle(arr));
