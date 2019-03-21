import * as React from 'react'
import { World } from './lib'

export class RotatingPolygon extends React.Component {
  canvas: React.RefObject<HTMLCanvasElement> = React.createRef()
  world: World

  componentDidMount() {
    this.world = new World(this.canvas.current)
  }

  componentWillUnmount() {
    this.world.destroy()
  }

  handleClick = () => {
    this.world.toggleDrawing()
  }

  render() {
    const canvasStyle = {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }
    return (
      <div className="w-100 h-100 relative">
        <canvas
          className="absolute pointer"
          style={canvasStyle}
          ref={this.canvas}
          onClick={this.handleClick}
        />
      </div>
    )
  }
}
