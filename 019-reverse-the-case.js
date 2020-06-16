function reverseCase(str) {
  const arr = str.split('')

  return arr
    .map((letter) => {
      if (letter == letter.toUpperCase()) {
        return letter.toLowerCase()
      } else {
        return letter.toUpperCase()
      }
    })
    .join('')
}

console.log(reverseCase('Happy Birthday'))
