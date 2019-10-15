self.onmessage = event => {
  console.log(event.data)
}

self.onerror = event => {
  console.error(event.message)
}
