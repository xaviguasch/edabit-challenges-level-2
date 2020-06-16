function inkLevels(inks) {
  const levels = Object.values(inks)

  return Math.min(...levels)
}

console.log(
  inkLevels({
    cyan: 23,
    magenta: 12,
    yellow: 10,
  })
)
