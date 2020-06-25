function charCount(myChar, str) {
  const arr = str.split('')
  const newArr = arr.filter((letter) => letter === myChar)

  return newArr.length
}

console.log(charCount('c', 'Chamber of secrets'))
console.log(charCount('b', 'big fat bubble'))

// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
