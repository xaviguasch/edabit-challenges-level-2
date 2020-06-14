function charIndex(word, char) {
  let result = []
  if (word.includes(char)) {
    result.push(word.indexOf(char))
    result.push(word.lastIndexOf(char))
  } else {
    return undefined
  }
  return result
}

console.log(charIndex('hello', 'l'))
console.log(charIndex('circumlocution', 'c'))
console.log(charIndex('happy', 'h'))
console.log(charIndex('happy', 'e'))
