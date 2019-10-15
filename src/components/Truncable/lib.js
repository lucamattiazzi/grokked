import { readable, derived, writable } from 'svelte/store'
import * as d3 from 'd3'
const worker = new Worker('prime.js')

const promisedWorker = base => {
  const promise = new Promise(resolve => {
    worker.onmessage = ({ data }) => resolve(JSON.parse(data))
    worker.postMessage(JSON.stringify({ base }))
  })
  return promise
}

export const base = writable(10)

export const tree = derived(base, ($base, set) => {
  set(undefined)
  promisedWorker($base).then(result => set(result))
})

function buildLink(node) {
  const {
    x,
    y,
    parent: { x: px, y: py },
  } = node
  const d = `M${y},${x} C${py + 50},${x} ${py + 150},${px} ${py},${px}`
  const fill = 'none'
  const stroke = '#bbb'
  return { d, fill, stroke }
}

function buildNode(node, base) {
  const fontSize = 16
  const transform = `translate(${node.y},${node.x})`
  const text = node.data.value.toString(base)
  return { transform, text, fontSize }
}

function numberLength(n, base) {
  return Math.ceil(Math.log(n) / Math.log(base))
}

export function getWidth(treeData, base) {
  if (!treeData) return 0
  const { highest } = treeData
  const maxLength = numberLength(highest, base)
  const width = maxLength * 10 * 15
  return width
}

export function getHeight(treeData, base) {
  if (!treeData) return 0
  const { highest } = treeData
  const maxLength = numberLength(highest, base)
  const height = maxLength * base * 16
  return height
}

export function getPadding(base) {
  return base * 12
}

export function createTree(treeData, base, width, height) {
  if (!treeData) return
  const { tree } = treeData
  const cluster = d3.tree().size([height, width])
  const root = d3.hierarchy(tree, d => d.children)
  cluster(root)
  const descendants = root.descendants().slice(1)
  const links = descendants.map(buildLink)
  const nodes = root.descendants().map(n => buildNode(n, base))
  return { links, nodes }
}
