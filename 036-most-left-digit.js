function leftDigit(num) {
  const regex = /\d/

  return Number(num.match(regex)[0])
}

console.log(leftDigit('TrAdE2W1n95!'))
console.log(leftDigit('V3r1ta$'))

// Write a function that takes a string as an argument and returns the left most digit in the string.
