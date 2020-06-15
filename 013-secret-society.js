function societyName(friends) {
  const initials = friends.map((f) => f.slice(0, 1))

  return initials.sort().join('')
}

console.log(societyName(['Adam', 'Sarah', 'Malcolm']))
