findMax = (arr) => {
  let max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

let arr1 = [1, 2, 3, 4, 5, 12, 34, 5, 6, 7, 8, 9, 100];
console.log(findMax(arr1));
