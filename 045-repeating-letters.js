function doubleChar(str) {
  const splitted = str.split('')

  return splitted.map((letter) => letter + letter).join('')
}

// Create a function that takes a string and returns a string in which each character is repeated once.

console.log(doubleChar('Hello World!'))
