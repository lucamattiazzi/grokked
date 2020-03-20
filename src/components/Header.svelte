<script>
  import { Link } from 'svero'
  import { fade } from 'svelte/transition'
  import { titles, headerIdx } from '../store'
</script>

<style>
  .grayscale {
    filter: grayscale(100%);
  }
</style>

<div class="w-100 relative flex pt3 pb2 items-center flex-column justify-center ph3">
  <div class="flex flex-column w-100 tc pb5">
    <Link href="/" class="f1 no-underline black">Grokked it!</Link>
    <div class="f4 relative">
      {#each titles as title, idx}
        {#if idx === $headerIdx}
          <div class="absolute absolute--fill w-100 h-100" in:fade out:fade>{title}</div>
        {/if}
      {/each}
    </div>
  </div>
  <div class="flex w-100 tc justify-center">
    <a
      href="https://github.com/lucamattiazzi"
      target="_blank"
      rel="noopener noreferrer"
      class="ph2 flex flex-column justify-around items-center no-underline black">
      <img src="/github.png" width="32" height="32" alt="githublogo" />
      <div>Github</div>
    </a>
    <a
      href="https://recently.grokked.it"
      target="_blank"
      rel="noopener noreferrer"
      class="ph2 flex flex-column justify-around items-center grayscale no-underline black">
      <img src="/favicon.png" width="32" height="32" alt="grokkedlogo" />
      <div>Recently Grokked</div>
    </a>
    <a
      href="https://giove.grokked.it"
      target="_blank"
      rel="noopener noreferrer"
      class="ph2 flex flex-column justify-around items-center grayscale no-underline black">
      <img src="/jupyter.png" width="32" height="32" alt="jupyterlogo" />
      <div>Jupyter</div>
    </a>
  </div>
</div>
