import Worker from 'worker-loader!./lib.worker'
import React, { useEffect } from 'react'

export function TruncablePrime() {
  useEffect(() => {
    const worker = new Worker()
    console.log(worker)
    worker.onmessage = e => {
      console.log(e.data)
    }
    worker.onerror = e => {
      console.log(e)
    }
    worker.postMessage(JSON.stringify({ base: 10 }))
  }, [])

  console.log('maronn!!')

  return <div className="absolute absolute--fill">CIAO</div>
}
