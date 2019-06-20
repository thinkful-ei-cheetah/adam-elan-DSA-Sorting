'use strict';
const LL = require('./linkedlist');

// function main(){
//   let list = new LL();
//   list.insertFirst(2);
//   list.insertLast(3);
//   list.insertLast(1);
//   list.insertLast(8);
//   list.insertLast(32);

//   let array = [];

//   let count = 0;
//   let countList = list;
//   let leftPart = list;
//   let leftPointer = list;
//   let rightPart = null;
//   let rightPointer = null;


//   if(list.next === null){
//     return list;
//   }

//   while(countList.head.next !== null){
//     count++;
//     countList = list.next;
//   }

//   let mid = Math.floor(count /2);
//   let countLeft = 0;

//   while(countLeft < mid){
//     countLeft++;
//     leftPointer = leftPointer.next;
//   }

//   rightPart = new LL(leftPointer.next);
//   leftPointer.next = null;
//   console.log(rightPart);

//   //return mSort();
// }

// // console.log(JSON.stringify(main()));
// main();


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

const numbers = [1,4,2,6,2,6,3,7];

function bucketSort(arr, lowest, highest){
  
  for(let i = 0; i< arr.length; i++){

  }

} 



bucketSort(numbers, 1, 7);