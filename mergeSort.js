const mergeSort = function(array) {
  if (array.length <= 1) return array;

  const halfLength = Math.floor(array.length / 2);

  const left = mergeSort(array.slice(0, halfLength));
  const right = mergeSort(array.slice(halfLength));

  let indexLeft = 0;
  let indexRight = 0;
  const mergedArray = [];

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] <= right[indexRight]) {
      mergedArray.push(left[indexLeft]);
      indexLeft++;
    } else {
      mergedArray.push(right[indexRight]);
      indexRight++;
    }
  }

  mergedArray.push(...left.slice(indexLeft), ...right.slice(indexRight));

  return mergedArray;
}

console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
