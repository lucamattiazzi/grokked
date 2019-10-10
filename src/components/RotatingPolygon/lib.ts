function getIntersectionPoints(
  radius: number,
  sides: number,
  firstDelta: number,
  secondDelta: number
): { angle: number; distance: number }[] {
  // I wish I could draw how I got to this, but cannot do it here
  // It's a simple enough formula, no way to explain here
  // trust me, this works

  const intersections = sides * 2

  const internalAngle = (Math.PI * 2) / sides
  const delta = (secondDelta - firstDelta) % internalAngle

  const oddAlpha = internalAngle - delta
  const evenAlpha = delta
  const oddAngle = firstDelta + delta + oddAlpha / 2
  const evenAngle = firstDelta + internalAngle * 0.5 + evenAlpha / 2
  const beta = (Math.PI - internalAngle) / 2
  const oddGamma = Math.PI - beta - oddAlpha / 2
  const evenGamma = Math.PI - beta - evenAlpha / 2
  const oddDistance = (Math.sin(beta) / Math.sin(oddGamma)) * radius
  const evenDistance = (Math.sin(beta) / Math.sin(evenGamma)) * radius

  const points = Array(intersections)
    .fill(undefined)
    .map((_, i) => {
      const isEven = i % 2 === 1
      const baseAngle = isEven ? evenAngle : oddAngle
      const angle = baseAngle + i * (internalAngle / 2)
      const distance = isEven ? evenDistance : oddDistance
      return { angle, distance }
    })
  return points
}

function pointsDist(from: [number, number], to: [number, number]) {
  return Math.sqrt(Math.pow(from[0] - to[0], 2) + Math.pow(from[1] - to[1], 2))
}

export class World {
  canvas: HTMLCanvasElement
  drawing: boolean = true

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.resize()
    this.draw()
    // window.addEventListener('resize', this.resize)
  }

  get size(): number {
    return Math.min(this.canvas.parentElement.clientWidth, this.canvas.parentElement.clientHeight)
  }

  get radius(): number {
    return this.size / 3
  }

  get center(): [number, number] {
    const x = this.canvas.width / 2
    const y = this.canvas.height / 2
    return [x, y]
  }

  get ctx(): CanvasRenderingContext2D {
    return this.canvas.getContext('2d')
  }

  resize = () => {
    this.canvas.width = this.size
    this.canvas.height = this.size
    this.canvas.style.width = `${this.size}px`
    this.canvas.style.height = `${this.size}px`
  }

  toggleDrawing = () => {
    this.drawing = !this.drawing
    if (this.drawing) this.draw()
  }

  reset = () => {
    this.ctx.clearRect(0, 0, this.size, this.size)
  }

  drawCircle = () => {
    const ctx = this.canvas.getContext('2d')
    const [x, y] = this.center
    ctx.beginPath()
    ctx.arc(x, y, this.radius, 0, Math.PI * 2)
    ctx.stroke()
  }

  drawPolygon = (sides: number, alpha: number) => {
    const rotAngle = (Math.PI * 2) / sides
    this.ctx.beginPath()
    for (let i = 0; i < sides + 1; i++) {
      // wooo magic
      const angle = rotAngle * i + alpha
      const x = this.center[0] + this.radius * Math.sin(angle)
      const y = this.center[1] + this.radius * Math.cos(angle)
      this.ctx.lineTo(x, y)
      this.ctx.moveTo(this.center[0], this.center[1])
      this.ctx.lineTo(x, y)
    }
    this.ctx.stroke()
  }

  drawMagicPolygon = (sides: number, alpha: number) => {
    const rotAngle = (Math.PI * 2) / sides
    this.ctx.beginPath()
    const points = [] as [number, number][]
    while (true) {
      // yeah why not
      const angle = rotAngle * points.length + alpha
      const x = this.center[0] + this.radius * Math.sin(angle)
      const y = this.center[1] + this.radius * Math.cos(angle)
      this.ctx.lineTo(x, y)
      this.ctx.moveTo(this.center[0], this.center[1])
      this.ctx.lineTo(x, y)
      const closePoint = points.find(p => pointsDist(p, [x, y]) < 0.5)
      points.push([x, y])
      if (closePoint) break
      if (points.length > 100) break
    }
    this.ctx.stroke()
  }

  drawIntersections = (polygons: [number, number][]) => {
    const sides = polygons[0][0]
    const firstDelta = polygons[0][1]
    const secondDelta = polygons[1][1]
    const points = getIntersectionPoints(this.radius, sides, firstDelta, secondDelta)
    const pointsCoords = points.map(({ angle, distance }) => {
      const x = Math.sin(angle) * distance + this.center[0]
      const y = Math.cos(angle) * distance + this.center[1]
      return [x, y]
    })
    this.ctx.beginPath()
    this.ctx.fillStyle = 'gray'
    for (let i = 0; i < pointsCoords.length + 1; i++) {
      const [x, y] = pointsCoords[i % pointsCoords.length]
      this.ctx.lineTo(x, y)
    }
    this.ctx.fill()
  }

  draw = () => {
    const angle = Math.sin(Date.now() / 100000) * Math.PI
    // const polygons = [[3, 0], [3, angle]] as [number, number][]
    this.reset()
    this.drawCircle()
    // polygons.forEach(([sides, delta]) => {
    //   this.drawPolygon(sides, delta)
    // })
    // this.drawIntersections(polygons)
    this.drawMagicPolygon(angle, angle)
    if (!this.drawing) return
    window.requestAnimationFrame(this.draw)
  }

  destroy = () => {
    this.drawing = false
  }
}
