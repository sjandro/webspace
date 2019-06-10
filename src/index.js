import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

import SpecialPurpose from './components/SpecialPurpose'

class App extends Component {
  render() {
    return (
      <div className="content">
        <SpecialPurpose />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
