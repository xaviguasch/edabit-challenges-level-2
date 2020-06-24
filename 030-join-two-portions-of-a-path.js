function joinPath(portion1, portion2) {
  if (portion1.endsWith('/') && portion2.startsWith('/')) {
    const newPortion1 = portion1.split('')

    newPortion1.splice(newPortion1.length - 1)

    return [newPortion1.join(''), portion2].join('')
  } else if (portion1.endsWith('/') || portion2.startsWith('/')) {
    return [portion1, portion2].join('')
  } else {
    return [portion1, portion2].join('/')
  }
}

console.log(joinPath('portion1/', '/portion2'))
console.log(joinPath('portion1/', 'portion2'))
console.log(joinPath('portion1', 'portion2'))

// Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.
