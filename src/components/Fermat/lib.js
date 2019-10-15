import { interpolateCool } from 'd3'

export const SIZE = 400
export const DELTA = 1
export const MAX = 8
export const MIN = 2

export function fermatErrorMatrix(power, size) {
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

function fermatError(x, y, power) {
  const naiveError = (x ** power + y ** power) ** (1 / power) % 1
  return naiveError > 0.5 ? 1 - naiveError : naiveError
}

export function drawOnCanvas(canvas, power) {
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  for (let x = 0; x < SIZE; x++) {
    for (let y = 0; y < SIZE; y++) {
      const value = fermatError(x, y, power)
      const scaled = value / 0.5
      const color = scaled === 0 ? 'white' : interpolateCool(scaled)
      ctx.fillStyle = color
      ctx.fillRect(x, SIZE - y, 1, 1)
    }
  }
}
