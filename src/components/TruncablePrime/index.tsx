import React, { useEffect } from 'react'

export function TruncablePrime() {
  useEffect(() => {
    const worker = new Worker('prime.js')
    console.log(worker)
    worker.onmessage = e => {
      console.log(e.data)
    }
    worker.onerror = e => {
      console.log(e)
    }
    worker.postMessage(JSON.stringify({ base: 10 }))
  }, [])

  return <div className="absolute absolute--fill">CIAO</div>
}
