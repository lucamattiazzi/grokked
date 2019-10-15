import { readable, derived, writable } from 'svelte/store'
import Truncable from './components/Truncable/index.svelte'
import Rotating from './components/Rotating/index.svelte'
import Fermat from './components/Fermat/index.svelte'

export const routes = [
  {
    path: '/truncable-primes',
    component: Truncable,
    name: 'Truncable Primes',
    description:
      'A dataviz on truncable primes (primes that remain prime by removing the rightmost number) with different base.',
  },
  {
    path: '/rotating-polygons',
    component: Rotating,
    name: 'Rotating Polygons',
    description:
      'An animation that shows a poligon created by starting on a circumference, then rotating of an angle = sin(now / 100000) * pi and setting the next point.',
  },
  {
    path: '/fermat-remainders',
    component: Fermat,
    name: 'Fermat Remainders',
    description: 'It shows the distance for each point from a perfect trine of numbers',
  },
]

function checkForInspector(setter) {
  const element = new window['Image']()
  let open = false
  Object.defineProperty(element, 'id', {
    get: () => {
      open = true
      setter(true)
    },
  })
  console.debug(element)
  setter(open)
  setTimeout(() => checkForInspector(setter), 100)
}

export const inspectorOpen = readable(false, checkForInspector)
