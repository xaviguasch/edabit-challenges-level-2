function largestSwap(num) {
  const [a, b] = num.toString().split('')
  if (a >= b) {
    return true
  } else {
    return false
  }
}

console.log(largestSwap(14))
console.log(largestSwap(53))
