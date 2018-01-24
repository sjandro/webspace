import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

import Navbar from './components/Navbar'
import Main from './components/Main'

class App extends Component {
	render() {
		return (
			<div className="content">
				<Navbar />
				<Main />
			</div>
		)
	}
}

// ========================================

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
