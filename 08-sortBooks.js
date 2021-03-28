// Imagine that I gave you 20 books to sort in alphabetical
// order. Express this as an algorithm and then implement
// your algorithm.

function partition(array, start, end) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  const pivot = array[end - 1];
  let j = start;

  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }

  swap(array, end - 1, j);
  return j;
}

function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }

  const middle = partition(array, start, end);

  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);

  return array;
}

const books = [
  "The Bible",
  "The Koran",
  "War and Peace",
  "Crime and Punishment",
  "Alice in Wonderland",
  "Jane Eyre",
  "The Old Man and the Sea",
  "The Color Purple",
  "The Selfish Gene",
  "Darkness Visible",
];

console.log(qSort(books));
