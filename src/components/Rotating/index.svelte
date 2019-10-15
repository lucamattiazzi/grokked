<script>
  import { World } from './lib'
  let canvas, world
  $: canvas && new World(canvas)
</script>

<style>
  .centered {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<div class="w-100 flex-auto relative">
  <div class="absolute absolute--fill">
    <canvas class="absolute pointer absolute--fill centered" bind:this={canvas} />
  </div>
</div>
