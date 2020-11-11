// Create a function to convert an array of percentages to their decimal equivalents.

function convertToDecimal(arr) {
  return arr.map((perc) => parseFloat(perc) / 100)
}

console.log(convertToDecimal(['33%', '98.1%', '56.44%', '100%']))
