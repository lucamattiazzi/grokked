import { readable, get } from 'svelte/store'
import Truncable from './components/Truncable/index.svelte'
import Rotating from './components/Rotating/index.svelte'
import Fermat from './components/Fermat/index.svelte'

const HEADER_CYCLE_DELAY = 5000

export const titles = [
  'Dada-driven developer',
  "It's buggier on the inside",
  "Stuff I'm learning to play with",
]

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
    description:
      'Once set a power value, for each couple of integers [x, y] computes the error between the sum of the numbers elevated to the power and the nearest integer root (base power) of the result. In base 2 there are many white spots, the pythagorean triplets, any other base should have no white spots.',
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

export const headerIdx = readable(0, cycleHeaders)

function cycleHeaders(setter) {
  setTimeout(() => {
    const current = get(headerIdx)
    setter((current + 1) % titles.length)
    cycleHeaders(setter)
  }, HEADER_CYCLE_DELAY)
}
