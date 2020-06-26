function minMax(arr) {
  const sortedArr = arr.sort((a, b) => a - b)

  return [sortedArr[0], sortedArr[sortedArr.length - 1]]
}

console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([2334454, 5]))
console.log(minMax([1]))

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
