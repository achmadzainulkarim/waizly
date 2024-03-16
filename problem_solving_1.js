const arr = [1, 3, 5, 7, 9];

function minMaxSum(arr) {
  arr.sort((a, b) => a - b);
  const min = arr.slice(0, 4).reduce((i, j) => i + j, 0);
  const max = arr.slice(arr.length - 4).reduce((i, j) => i + j, 0);
  console.log(min, max);
}

minMaxSum(arr);