<script>
  import SmartLink from './SmartLink.svelte'
  import { routes } from '../store'
</script>

<div class="flex pt5 items-center justify-start w-80 h-100 flex-column">
  {#each routes as route}
    <SmartLink {route} />
  {/each}
</div>
