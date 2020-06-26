function isSymmetrical(num) {
  const newArr = num.toString().split('')
  const finalArr = []

  newArr.forEach((n) => finalArr.unshift(n))

  Number(finalArr.join(''))

  if (Number(finalArr.join('')) == num) {
    return true
  } else {
    return false
  }
}

console.log(isSymmetrical(7227))
console.log(isSymmetrical(12567))

// Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.
