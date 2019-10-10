import * as React from 'react'

export function Footer() {
  return (
    <div className="absolute right-2 bottom-2 flex flex-column tc items-center">
      <div className="flex justify-around w-100">
        <a href="https://github.com/yeasteregg" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" width="16" height="16" />
        </a>
      </div>
      Luca Mattiazzi
    </div>
  )
}
