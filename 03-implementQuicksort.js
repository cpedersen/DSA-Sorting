// Write a function qSort that sorts a dataset using the
// quicksort algorithm. The dataset to sort is:
// 89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32
// 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28
// 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27
// 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90
// 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54
// 84 34 53 78 40 14 5.

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

let arr = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5,
];

console.log(qSort(arr));
