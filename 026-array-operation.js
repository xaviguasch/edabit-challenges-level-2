function arrayOperation(x, y, n) {
  let arr = []
  for (let i = x; i <= y; i++) {
    arr.push(i)
  }

  return arr.filter((num) => num % n === 0)
}

console.log(arrayOperation(1, 10, 3))
console.log(arrayOperation(7, 9, 2))
console.log(arrayOperation(15, 20, 7))
console.log(arrayOperation(15, 20, 5))
