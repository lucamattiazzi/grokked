<script>
  import { Link } from 'svero'
  const { random, floor } = Math
  const titles = [
    'Dada-driven developer',
    'It\'s buggier on the inside',
    'Stuff I\'m learning to play with',
  ]
  export let title = titles[floor(random() * titles.length)]
</script>

<div class="w-100 relative flex flex-column items-center justify-center pt3">
  <Link href="/" class="pa2 f1 no-underline black">Grokked it!</Link>
  <div class="pa2 f4">{title}</div>
</div>
