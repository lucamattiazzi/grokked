const ctx: Worker = self as any
const isPrime = require('is-prime')

interface TreeNode {
  value: number
  children: TreeNode[]
}

function numberLength(n: number, base: number) {
  return Math.ceil(Math.log(n) / Math.log(base))
}

export function createTree(base: number): TreeNode {
  let highest = 0
  const tree = { value: 0, children: [] as TreeNode[] }
  function addAllNumbers(node: TreeNode) {
    for (let i = 1; i < base; i++) {
      const nextNumber = i + node.value * base
      if (isPrime(nextNumber)) {
        highest = Math.max(highest, nextNumber)
        const newNode = {
          value: nextNumber,
          children: [] as TreeNode[],
        }
        addAllNumbers(newNode)
        node.children.push(newNode)
      }
    }
  }
  addAllNumbers(tree)
  const ratio = base / numberLength(highest, base)
  return tree
}

ctx.addEventListener('message', event => {
  const { base } = JSON.parse(event.data) as { base: number }
  const tree = createTree(base)
  ctx.postMessage(JSON.stringify(tree))
})
