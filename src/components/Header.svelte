<script>
  import { Link } from 'svero'
  import { fade } from 'svelte/transition'
  import { titles, headerIdx } from '../store'
</script>

<div class="w-100 relative flex flex-column items-center justify-center pt3">
  <Link href="/" class="pa2 f1 no-underline black">Grokked it!</Link>
  <div class="pa2 f4 relative w-100 tc">
    {#each titles as title, idx}
      {#if idx === $headerIdx}
        <div class="absolute absolute--fill w-100 h-100" in:fade out:fade>{title}</div>
      {/if}
    {/each}
  </div>
</div>
