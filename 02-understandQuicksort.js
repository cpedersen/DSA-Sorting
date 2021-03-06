// 1) Suppose you are debugging a quicksort implementation
// that is supposed to sort an array in ascending order.
// After the first partition step has been completed, the
// contents of the array is in the following order:
// 3 9 1 14 17 24 22 20. Which of the following statements
// is correct about the partition step? Explain your answer.

// The pivot could have been 17, but could not have been 14

// False: It could have been 14 or 17. Everything on the
// left of 14 is less than and everything on the left of 17
// is less than.

// The pivot could have been either 14 or 17

// True: Everything on the left of 14 is less than and
// everything on the left of 17 is less than.

// Neither 14 nor 17 could have been the pivot

// False. It could have been 14 or 17

// The pivot could have been 14, but could not have been 17

// False. It could have been either 14 or 17

// 2) Given the following list of numbers
// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting
// list after the second partitioning according to the
// quicksort algorithm.

// When using the last item on the list as a pivot
// input: 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// first partition: 10, 3, 9, 12, 14, 17, 13, 15, 19, 16
// second partition: 10, 3, 9, 12, 14, 13, 15, 16, 17, 19

// When using the first item on the list as a pivot
// input: 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// first partition: 13, 10, 3, 9, 12, 14, 17, 15, 19, 16
// second partition: 13, 10, 3, 9, 12, 14, 15, 16, 17, 19
