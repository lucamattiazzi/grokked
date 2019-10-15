<script>
  import { drawOnCanvas, SIZE, DELTA, MIN, MAX } from './lib'
  let canvas
  let power = 4
  $: canvas && drawOnCanvas(canvas, power)
</script>

<div class="relative w-100 h-100 flex flex-column items-center justify-center">
  <div class="flex items-center pv3">
    <input bind:value={power} type="range" min={MIN} max={MAX} step={DELTA} />
    <div class="pl4 f4">{power}</div>
  </div>
  <canvas width={SIZE} height={SIZE} class="pointer" bind:this={canvas} />
</div>
