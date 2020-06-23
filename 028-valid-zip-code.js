function isValid(zip) {
  const arr = zip.split('')

  if (arr.length !== 5) {
    return false
  }

  const arrOfNums = arr.map((n) => Number(n))

  return arrOfNums.every((n) => !isNaN(n))
}

console.log(isValid('59001'))
console.log(isValid('853a7'))

// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

// Must only contain numbers (no non-digits allowed).
// Must not contain any spaces.
// Must not be greater than 5 digits in length.
