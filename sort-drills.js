'use strict';
// 1. Understanding merge sort

// given (21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40)
// what is the result after 3 recursive calls 


// 1st
// (21, 1, 26, 45, 29, 28, 2, 9),(16, 49, 39, 27, 43, 34, 46, 40)
//second 
// (21, 1, 26, 45),(29, 28, 2, 9), (16, 49, 39, 27, 43, 34, 46, 40)
//third 
// (21, 1, 26, 45), (29, 28, 2, 9), (16, 49, 39, 27), (43, 34, 46, 40)
//fourth 
// (21, 1),(26, 45), (29, 28, 2, 9), (16, 49, 39, 27), (43, 34, 46, 40)
// fifth 
// (21, 1), (26, 45), (29, 28),(2, 9), (16, 49, 39, 27), (43, 34, 46, 40)
// sixth
// (21, 1), (26, 45), (29, 28),(2, 9), (16, 49), (39, 27), (43, 34, 46, 40)
// seventh
// (21, 1), (26, 45), (29, 28),(2, 9), (16, 49), (39, 27), (43, 34), (46, 40)
// eighth
// (21),(1), (26, 45), (29, 28),(2, 9), (16, 49), (39, 27), (43, 34), (46, 40)
// ninth
// (21),(1), (26), (45), (29, 28),(2, 9), (16, 49), (39, 27), (43, 34), (46, 40)
// tenth
// (21), (1), (26), (45), (29), (28), (2, 9), (16, 49), (39, 27), (43, 34), (46, 40)
// eleventh
// (21), (1), (26), (45), (29), (28), (2), (9), (16, 49), (39, 27), (43, 34), (46, 40)
// twelfth
// (21), (1), (26), (45), (29), (28), (2), (9), (16), (49), (39, 27), (43, 34), (46, 40)
// thirteenth
// (21), (1), (26), (45), (29), (28), (2), (9), (16), (49), (39), (27), (43, 34), (46, 40)
// fourteenth
// (21), (1), (26), (45), (29), (28), (2), (9), (16), (49), (39), (27), (43), (34), (46, 40)
// fifteenth
// (21), (1), (26), (45), (29), (28), (2), (9), (16), (49), (39), (27), (43), (34), (46), (40)


// first merge 
// (1, 21)
// second merge 
// (1, 21),(26, 45)
// third merge
// (1, 21),(26, 45),(28,29)
// fourth merge
// (1, 21),(26, 45),(28,29), (2, 9)
// fifth merge 
// (1, 21),(26, 45),(28,29), (2, 9), (16,49), 
// 6th merge 
// (1, 21),(26, 45),(28,29), (2, 9), (16,49), (27, 39)
// 7th merge
// (1, 21),(26, 45),(28,29), (2, 9), (16,49), (27, 39), (34, 43)

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
};

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
};

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

// 2a. Understanding Quicksort
// [3, 9, 1, 14, 17, 24, 22, 20]
// // The pivot could have been 14 or 17, as there are an even number of elements in the array
// 3, 9, 1, 20, 17, 24, 22, 14 --> 3, 9, 1, 14, 17, 24, 22, 20
// 3, 9, 1, 14, 20, 24, 22, 17 --> 3, 9, 1, 14, 17, 24, 22, 20

// // 2b. 
// //using last item
// [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
// //First partition 
// 10, 17, 13, 15, 19, 14, 3, 16, 9, 12
// //Second partition
// 10, 3, 13, 15, 19, 14, 17, 16, 9, 12
// //Third partition
// 10, 3, 9, 15, 19, 14, 17, 16, 13, 12

// // using first item
// [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]

// 3. QuickSort

function qSort(array, start=0, end=array.length) {
  if(start >= end) {
    return array;
  }

  const sorted = partition(array, start, end);
  array = qSort(array, start, sorted);
  array = qSort(array, sorted + 1, end);
  return array;
}

function makeArray(nums) {
  const newNums = nums.split(' ').map(num => parseInt(num));
  return newNums;
}

let array = makeArray('89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5');
console.log(mSort(array));

//4. Merge Sort 

function mSort(array) {
  if(array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);
  return merge(array, left, right);
}

function merge(array, left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }
  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

module.exports = mSort;