function sliceSum(arr, n) {
  if (n === 0) {
    return 0
  }
  const sliced = arr.slice(0, n)
  return sliced.reduce((acc, currV) => acc + currV)
}

console.log(sliceSum([1, 3, 2], 2))
