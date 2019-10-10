import React, { useState, useEffect } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Inspector } from './Inspector'
import { RotatingPolygon } from './RotatingPolygon'
import { TruncablePrime } from './TruncablePrime'
import { Fermat } from './Fermat'

interface Component {
  component: () => JSX.Element
  title: string
  path: string
}

const PAGES: Component[] = [
  { component: RotatingPolygon, title: 'Something cool', path: 'rotating' },
  { component: Fermat, title: 'Fermat difference', path: 'fermat' },
  { component: TruncablePrime, title: 'Truncable Primes', path: 'truncable' },
]

export function App() {
  const [inspectorOpen, toggleInspector] = useState(false)
  const [currentComponent, setCurrent] = useState(-1)

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    const pageIdx = PAGES.findIndex(p => p.path === hash)
    setCurrent(Math.max(pageIdx, 0))
  }, [])

  useEffect(() => {
    const currentPage = PAGES[currentComponent]
    if (!currentPage) return
    window.location.hash = `#${currentPage.path}`
  }, [currentComponent])

  function nextPage() {
    const nextIdx = (currentComponent + 1) % PAGES.length
    console.log('nextIdx', nextIdx)
    setCurrent(nextIdx)
  }

  function previousPage() {
    const nextIdx = (PAGES.length - 1 + currentComponent - 1) % (PAGES.length - 1)
    console.log('nextIdx', nextIdx)
    setCurrent(nextIdx)
  }

  const currentPage = PAGES[currentComponent]

  function checkForInspector() {
    const element = new window['Image']() as HTMLImageElement
    let open = false
    Object.defineProperty(element, 'id', {
      get: () => {
        open = true
        toggleInspector(true)
      },
    })
    console.debug(element)
    open ? setTimeout(checkForInspector, 100) : toggleInspector(false)
  }

  useEffect(() => {
    checkForInspector()
  }, [])

  // if (inspectorOpen) return <Inspector />
  return (
    <div className="w-100 h-100 flex flex-column items-center relative bg-light-gray">
      <Header rightButton={nextPage} leftButton={previousPage} />
      <div className="w-100 h-100 relative">{currentPage && <currentPage.component />}</div>
      <Footer />
    </div>
  )
}
