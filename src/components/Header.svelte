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

<div class="w-100 relative flex pt3 pb4 items-center">
  <div class="pl3 flex flex-column w-50">
    <Link href="/" class="f1 no-underline black">Grokked it!</Link>
    <div class="f4 relative">
      {#each titles as title, idx}
        {#if idx === $headerIdx}
          <div class="absolute absolute--fill w-100 h-100" in:fade out:fade>{title}</div>
        {/if}
      {/each}
    </div>
  </div>
  <div class="pl3 flex w-50 justify-center justify-around">
    <div class="flex flex-column justify-around items-center">
      <a href="https://github.com/yeasteregg" target="_blank" rel="noopener noreferrer">
        <img src="/github.png" width="32" height="32" alt="githublogo" />
      </a>
      <div>Github</div>
    </div>
    <div class="flex flex-column justify-around items-center grayscale">
      <a href="https://recently.grokked.it" target="_blank" rel="noopener noreferrer">
        <img src="/favicon.png" width="32" height="32" alt="grokkedlogo" />
      </a>
      <div>Recently Grokked</div>
    </div>
    <div class="flex flex-column justify-around items-center grayscale">
      <a href="https://giove.grokked.it" target="_blank" rel="noopener noreferrer">
        <img src="/jupyter.png" width="32" height="32" alt="jupyterlogo" />
      </a>
      <div>Jupyter</div>
    </div>
  </div>
</div>
