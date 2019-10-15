<script>
  import { interpolateCool } from 'd3'
  import { fermatError, fermatErrorMatrix, SIZE, DELTA, MIN, MAX } from './lib'

  let canvas
  let power = MIN
  $: canvas

  // useEffect(() => {
  //   const ctx = canvas.current.getContext('2d')
  //   for (let x = 0; x < SIZE; x++) {
  //     for (let y = 0; y < SIZE; y++) {
  //       const value = fermatError(x, y, power)
  //       const scaled = value / 0.5
  //       const color = scaled === 0 ? 'white' : interpolateCool(scaled)
  //       ctx.fillStyle = color
  //       ctx.fillRect(x, SIZE - y, 1, 1)
  //     }
  //   }
  // }, [power])
</script>

<div className="relative w-100 h-100">
  <input
    bind:value={power}
    type="range"
    min={MIN}
    max={MAX}
    step={DELTA}
    className="top-3 absolute" />
  <canvas width={SIZE} height={SIZE} className="absolute pointer" bind:this={canvas} />
  <div>{power}</div>
</div>
