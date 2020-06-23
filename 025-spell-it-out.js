function spelling(str) {
  let newArr = []
  for (let i = 1; i <= str.length; i++) {
    newArr.push(str.slice(0, i))
  }

  return newArr
}

console.log(spelling('bee'))
console.log(spelling('eagerly'))
