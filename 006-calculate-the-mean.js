function mean(arr) {
  const total = arr.reduce((acc, currV) => acc + currV)
  const mean = total / arr.length
  return parseFloat(mean.toFixed(2))
}

console.log(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]))
