function factorial(z) {
  if (z === 0) {
    return 1
  }

  return z * factorial(z - 1)
}

console.log(factorial(4))
console.log(factorial(0))
console.log(factorial(9))
