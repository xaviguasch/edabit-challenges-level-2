function sumOfCubes(nums) {
  return nums.reduce((acc, currV) => acc + Math.pow(currV, 3), 0)
}

console.log(sumOfCubes([1, 5, 9]))
console.log(sumOfCubes([3, 4, 5]))
console.log(sumOfCubes([]))

// Create a function that takes in an array of numbers and returns the sum of its cubes.
