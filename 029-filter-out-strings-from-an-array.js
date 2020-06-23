function filterArray(arr) {
  return arr.filter((el) => typeof el !== 'string')
}

console.log(filterArray([1, 'a', 'b', 0, 15]))
