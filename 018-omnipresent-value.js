function isOmnipresent(arr, val) {
  const resultArr = arr.map((innerArr) => innerArr.includes(val))

  return resultArr.every((result) => result)
}

console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    1
  )
)

console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    6
  )
)
