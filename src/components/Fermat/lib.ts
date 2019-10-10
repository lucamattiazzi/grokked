export function fermatErrorMatrix(power: number, size: number) {
  const errors = []
  for (let x = 0; x < size; x++) {
    const rows = []
    for (let y = 0; y < size; y++) {
      rows.push(fermatError(x, y, power))
    }
    errors.push(rows)
  }
  return errors
}

export function fermatError(x: number, y: number, power: number) {
  const naiveError = (x ** power + y ** power) ** (1 / power) % 1
  return naiveError > 0.5 ? 1 - naiveError : naiveError
}
