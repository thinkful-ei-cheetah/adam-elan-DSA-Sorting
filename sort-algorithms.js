'use strict';
const LL = require('./linkedlist');

function main(){
  let list = new LL();
  list.insertFirst(2);
  list.insertLast(3);
  list.insertLast(1);
  list.insertLast(8);
  list.insertLast(32);
  console.log(list)
  

}

// function sortLinkedList(LL) {
//   const list = LL
//   if(list.next == null) return LL

//   let count = 0
//   while(list.next !== null) {
//     count++
//     list = list.next
//   }
// }
// console.log(JSON.stringify(main()));
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

  let bucketSize = Math.floor(Math.sqrt(arr.length))
  let firstBucket = []
  let secondBucket = []

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < (highest+lowest)/2) {
      firstBucket.push(arr[i])
    } else {
      secondBucket.push(arr[i])
    }
  }
  
  mSort(firstBucket)
  mSort(secondBucket)
  return firstBucket.concat(secondBucket)  

} 

console.log(bucketSort([1,4,2,6,2,6,3,7], 1, 7))

// 7. Sort in place
function randomizeArray(array) {
  for(let i = array.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i+1))
     let tmp = array[i]
     array[i] = array[randomIndex]
     array[randomIndex] = tmp
  }
  return array
}
// [1, 4, 3, 5, 6, 9]
// [4, 3, 5, 6, 1, 9]

// bucketSort(numbers, 1, 7);
// console.log(randomizeArray([1, 4, 3, 5, 6, 9]))

//8. Sorting books
console.log(mSort(['Cauliflower', 'Banana', 'Asparagus', 'Harry Potter', 'Lord of the Rings', 'Peaches', 'Nectarines', 'Mistborn']))



