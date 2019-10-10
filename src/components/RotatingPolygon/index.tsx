import React, { createRef, RefObject, useEffect } from 'react'
import { World } from './lib'

export function RotatingPolygon() {
  const canvas: RefObject<HTMLCanvasElement> = createRef()
  let world: World

  useEffect(() => {
    world = new World(canvas.current)
    return world.destroy
  }, [])

  const handleClick = () => world && world.toggleDrawing()

  const canvasStyle = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  return (
    <canvas className="absolute pointer" style={canvasStyle} ref={canvas} onClick={handleClick} />
  )
}
