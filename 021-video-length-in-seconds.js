function minutesToSeconds(time) {
  const [minutes, seconds] = time.split(':')
  if (seconds >= 60) {
    return false
  }

  return parseInt(minutes * 60) + parseInt(seconds)
}

console.log(minutesToSeconds('13:56'))
console.log(minutesToSeconds('10:60'))
