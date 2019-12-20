<script>
  import { Router, Route } from 'svero'
  import { routes, inspectorOpen } from './store'
  import Header from './components/Header.svelte'
  import Home from './components/Home.svelte'
  import Inspector from './components/Inspector.svelte'
</script>

<style>
  .open-sans {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
  }
</style>

<div class="w-100 h-100 flex flex-column items-center relative bg-light-gray open-sans">
  <Header />
  <Router>
    <Route path="" component={Home} exact />
    {#each routes as route}
      <Route path={route.path} component={route.component} exact />
    {/each}
  </Router>
  {#if $inspectorOpen}
    <!-- <Inspector /> -->
  {/if}
</div>
