function countVowels(str) {
  let vowelRegex = /[aeiou]/g

  let vocals = str.match(vowelRegex)

  return vocals.length
}

console.log(countVowels('Celebration'))
