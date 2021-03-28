// 1. Understanding merge sort
// Given the following list of numbers
// 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// What is the resulting list that will be sorted after 3 recursive
// calls to mergesort?

// Split in half to start.
// 1. Take left side. Split in half again.
//      input: [21, 1, 26, 45, 29, 28, 2, 9]
//      resulting lists: [21, 1, 26, 45] [29, 28, 2, 9]
// 2. Take left side. Split in half again.
//      input: [21, 1, 26, 45]
//      resulting list: [21, 1] [26, 45]
// 3. Take left side. Split in half again.
//      input: [21, 1]
//      resulting list: [21] [1]

// What is the resulting list that will be sorted after 16 recursive
// calls to mergesort?

// [
//     1,  2,  9, 16, 21, 26,
//     27, 28, 29, 34, 39, 40,
//     43, 45, 46, 49
//  ]

// What are the first 2 lists to be merged?
// [21] [1]

// Which two lists would be merged on the 7th merge?
// Merge 1 => [21] [1]
// Merge 2 => [26] [45]
// Merge 3 => [21, 1] [26, 45]
// Merge 4 => [29] [28]
// Merge 5 => [2] [9]
// Merge 6 => [28, 29] [2, 9]
// Merge 7 => [1, 21, 26, 45] [2, 9, 28, 29]
