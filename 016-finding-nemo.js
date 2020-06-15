function findNemo(sentence) {
  const words = sentence.split(' ')

  const isNemo = words.findIndex((w) => w === 'Nemo')
  if (isNemo !== -1) {
    return `I found Nemo at ${isNemo + 1}!`
  } else {
    return "I can't find Nemo :("
  }
}

console.log(findNemo('I am finding Nemo !'))
