function getAbsSum(arr) {
  return arr.map((num) => Math.abs(num)).reduce((acc, currV) => acc + currV)
}

console.log(getAbsSum([2, 4, 6, 8, 10]))
