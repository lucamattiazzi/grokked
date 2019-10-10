import React, { createRef, RefObject, useEffect, useState } from 'react'
import { interpolateCool } from 'd3'
import { fermatError, fermatErrorMatrix } from './lib'

const SIZE = 300
const DELTA = 1
const MAX = 8
const MIN = 2

export function Fermat() {
  const [power, setPower] = useState(MIN)
  const canvas: RefObject<HTMLCanvasElement> = createRef()

  useEffect(() => {
    const ctx = canvas.current.getContext('2d')
    for (let x = 0; x < SIZE; x++) {
      for (let y = 0; y < SIZE; y++) {
        const value = fermatError(x, y, power)
        const scaled = value / 0.5
        const color = scaled === 0 ? 'white' : interpolateCool(scaled)
        ctx.fillStyle = color
        ctx.fillRect(x, SIZE - y, 1, 1)
      }
    }
  }, [power])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setPower(e.target.valueAsNumber)

  const canvasStyle = {
    top: '50%',
    left: '50%',
    width: SIZE,
    height: SIZE,
    transform: 'translate(-50%, -50%)',
  }

  return (
    <>
      <input value={power} type="range" min={MIN} max={MAX} step={DELTA} onChange={handleChange} />
      <canvas
        width={SIZE}
        height={SIZE}
        className="absolute pointer"
        style={canvasStyle}
        ref={canvas}
      />
      <div>{power}</div>
    </>
  )
}
