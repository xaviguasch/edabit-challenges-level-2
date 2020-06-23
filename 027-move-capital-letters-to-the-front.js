function capToFront(s) {
  const arr = s.split('')
  const resultCapital = []
  const resultLower = []
  arr.forEach((w, i) => {
    if (w === w.toUpperCase()) {
      resultCapital.push(w)
    } else {
      resultLower.push(w)
    }
  })

  return resultCapital.concat(resultLower).join('')
}

console.log(capToFront('moveMENT'))
