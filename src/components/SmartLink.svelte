<script>
  import { Link } from 'svero'
  export let route = {}
</script>

<div class="mb5 w-100">
  <Link class="pl4 f4 ttu no-underline blue" href={route.path}>{route.name}</Link>
  <div class="pt3">{route.description}</div>
</div>
