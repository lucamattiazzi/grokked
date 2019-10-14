function isPrime(n) {
  if (n === 1) return false
  if (n === 2 || n === 3) return true
  if (n % 2 === 0 || n % 3 === 0) return false
  let p = 5
  let w = 2
  while (p * p <= n) {
    if (n % p === 0) return false
    p += w
    w = 6 - w
  }
  return true
}

function numberLength(n, base) {
  return Math.ceil(Math.log(n) / Math.log(base))
}

function createTree(base) {
  let highest = 0
  const tree = { value: 0, children: [] }
  function addAllNumbers(node) {
    for (let i = 1; i < base; i++) {
      const nextNumber = i + node.value * base
      if (isPrime(nextNumber)) {
        highest = Math.max(highest, nextNumber)
        const newNode = {
          value: nextNumber,
          children: [],
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

self.addEventListener('message', event => {
  const { base } = JSON.parse(event.data)
  const tree = createTree(base)
  self.postMessage(JSON.stringify(tree))
})

self.postMessage(JSON.stringify({ ciao: 3 }))
