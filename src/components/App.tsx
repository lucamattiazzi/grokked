import * as React from 'react'
import { RotatingPolygon } from './RotatingPolygon'

const Header = () => (
  <div className="w-80 flex flex-column items-center justify-center pt4">
    <div className="pa3 f1">Grokked it!</div>
    <div className="pa3 f4">{"Stuff i'm learning"}</div>
    <div className="pa3 f5">Currently this website is under work, so enjoy this!</div>
  </div>
)

const Footer = () => (
  <div className="absolute right-2 bottom-2 flex flex-column tc items-center">
    <div className="flex justify-around w-100">
      <a href="https://github.com/yeasteregg" target="_blank" rel="noopener noreferrer">
        <img src="/github.png" width="16" height="16" />
      </a>
    </div>
    Luca Mattiazzi
  </div>
)

export class App extends React.Component {
  render() {
    return (
      <div className="w-100 h-100 flex flex-column items-center relative bg-light-gray">
        <Header />
        <RotatingPolygon />
        <Footer />
      </div>
    )
  }
}
