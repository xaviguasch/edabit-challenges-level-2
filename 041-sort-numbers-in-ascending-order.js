function sortNumsAscending(arr) {
  if (arr === null) {
    return []
  }
  return arr.sort((a, b) => a - b)
}

console.log(sortNumsAscending([80, 29, 4, -95, -24, 85]))

// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.
