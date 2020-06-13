function getDecimalPlaces(num) {
  if (num.includes('.')) {
    const indexOfDot = num.indexOf('.')
    const decimals = num.slice(indexOfDot + 1)
    return decimals.length
  } else {
    return 0
  }
}

console.log(getDecimalPlaces('43'))
console.log(getDecimalPlaces('43.9440'))
