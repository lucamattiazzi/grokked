import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './components/App'
import 'modern-normalize'
import 'tachyons'
import 'tachyons-extra'
import 'reset.css'
import 'style.css'

function renderApp() {
  ReactDOM.render(<App />, document.getElementById('root'))
}

// First render
renderApp()
