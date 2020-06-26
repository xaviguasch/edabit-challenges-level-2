function set(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

console.log(set([1, 3, 3, 5, 5]))
console.log(set([4, 4, 4, 4]))

// A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.Create a function that sorts an array and removes all duplicate items from it.
