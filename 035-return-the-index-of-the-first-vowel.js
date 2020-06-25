function firstVowel(str) {
  const regex = /[AEIOUaeiou]/
  return str.search(regex)
}

console.log(firstVowel('STRAWBERRY'))
console.log(firstVowel('hello'))

// Create a function that returns the index of the first vowel in a string.
