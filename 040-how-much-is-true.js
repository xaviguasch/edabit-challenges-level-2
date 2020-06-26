function countTrue(arr) {
  let numOfTrues = 0

  arr.forEach((bol) => {
    if (bol) {
      numOfTrues++
    }
  })

  return numOfTrues
}

console.log(countTrue([true, false, false, true, false]))

// Create a function which returns the number of true values there are in an array.
