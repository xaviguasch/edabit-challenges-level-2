function isTrue(relation) {
  return eval(relation.replace('=', '==='))
}

// In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines if the relation is true or false.

console.log(isTrue('2=2'))
