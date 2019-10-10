import * as React from 'react'

export function Inspector() {
  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: 26,
  }

  return (
    <div className="absolute w-100 h-100 bg-white z999">
      <div style={style}>
        I suggest you head to <a href="https://github.com/YeasterEgg">my Github Page</a>, you can
        find the code there.
      </div>
    </div>
  )
}
