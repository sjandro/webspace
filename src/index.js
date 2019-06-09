import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

// import Navbar from './components/Navbar'
// import Main from './components/Main'
import SpecialPurpose from './components/SpecialPurpose'

class App extends Component {
  render() {
    return (
      <div className="content">
        {/* <Navbar />
				<Main /> */}
        <SpecialPurpose />
      </div>
    )
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById('root'))
