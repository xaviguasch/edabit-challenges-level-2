function highLow(str) {
  const arrNums = str.split(' ')

  const finalArr = arrNums.map((num) => Number(num)).sort((a, b) => b - a)

  return `${finalArr[0]} ${finalArr[finalArr.length - 1]}`
}

console.log(highLow('1 2 -3 4 5'))
console.log(highLow('13'))

// Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
