function sortDescending(num) {
  const arrStr = num.toString().split('')

  const orderedArr = arrStr.sort((a, b) => b - a)

  return parseInt(orderedArr.join(''))
}

console.log(sortDescending(123))
