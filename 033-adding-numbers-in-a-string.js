function addNums(nums) {
  const arrNums = nums.split(',')

  return arrNums.map((num) => Number(num)).reduce((acc, currV) => acc + currV, 0)
}

console.log(addNums('2, 5, 1, 8, 4'))
// Given a string of numbers separated by a comma and space, return the total of all the numbers.
