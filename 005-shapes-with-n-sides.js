function nSidedShape(n) {
  switch (n) {
    case 1:
      return 'circle'
      break
    case 2:
      return 'semi-circle'
      break
    case 3:
      return 'triangle'
      break
    case 4:
      return 'square'
      break
    case 5:
      return 'pentagon'
      break
    case 6:
      return 'hexagon'
      break
    case 7:
      return 'heptagon'
      break
    case 8:
      return 'octagon'
      break
    case 9:
      return 'nonagon'
      break
    case 10:
      return 'decagon'
      break
  }
}

console.log(nSidedShape(3))
console.log(nSidedShape(1))
console.log(nSidedShape(9))
