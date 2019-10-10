import Worker from 'worker-loader!./lib.worker'
import React, { useEffect } from 'react'

export function TruncablePrime() {
  useEffect(() => {
    const worker = new Worker()
    console.log('worker', worker)
    worker.onmessage = e => {
      console.log(e.data)
    }
    worker.postMessage(JSON.stringify({ base: 10 }))
  }, [])

  return <div className="absolute absolute--fill">CIAO</div>
}
