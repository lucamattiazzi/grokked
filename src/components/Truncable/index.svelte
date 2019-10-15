<script>
  import { tree, base, createTree, getWidth, getHeight, getPadding } from './lib'
  let clientWidth, clientHeight
  $: padding = getPadding($base)
  $: width = Math.max(getWidth($tree, $base), clientWidth - padding)
  $: height = Math.max(getHeight($tree, $base), clientHeight)
  $: treeSvg = createTree($tree, $base, width, height)
</script>

<div class="w-100 h-100 flex flex-column justify-center items-center pt3">
  <div class="flex items-center">
    <div>Base:</div>
    <input type="number" bind:value={$base} min="3" max="25" />
  </div>
  <div
    class="overflow-scroll w-100 h-100 mv3 mh4 ba bw1 b--black"
    bind:clientWidth
    bind:clientHeight>
    {#if treeSvg === undefined}
      <div class="absolute absolute--fill flex justify-center items-center f4">Loading...</div>
    {:else}
      <svg width={width + padding} {height}>
        {#each treeSvg.links as link}
          <path d={link.d} fill={link.fill} stroke={link.stroke} />
        {/each}
        {#each treeSvg.nodes as node}
          <g transform={node.transform}>
            <text alignment-baseline="middle">{node.text}</text>
          </g>
        {/each}
      </svg>
    {/if}
  </div>
</div>
