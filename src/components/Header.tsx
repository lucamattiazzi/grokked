import * as React from 'react'

interface Props {
  leftButton: () => void
  rightButton: () => void
}

export function Header(p: Props) {
  return (
    <div className="w-100 relative flex flex-column items-center justify-center pt3">
      <div className="pa2 f1">Grokked it!</div>
      <div className="pa2 f4">{"Stuff i'm learning to play with"}</div>
      <div className="absolute left-3 pointer f1" style={{ top: '50%' }} onClick={p.leftButton}>
        {'<'}
      </div>
      <div className="absolute right-3 pointer f1" style={{ top: '50%' }} onClick={p.rightButton}>
        {'>'}
      </div>
    </div>
  )
}
