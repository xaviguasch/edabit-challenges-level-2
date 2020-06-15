function createPhoneNumber(numbers) {
  const firstP = numbers.slice(0, 3).join('')
  const secP = numbers.slice(3, 6).join('')
  const thirdP = numbers.slice(6, 10).join('')

  return `(${firstP}) ${secP}-${thirdP}`
}

console.log(createPhoneNumber([8, 7, 4, 1, 2, 5, 6, 5, 8, 2]))
