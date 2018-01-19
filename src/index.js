import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

class App extends Component {
	render() {
		return (
			<div className="content">
				<span>Site under contruction...</span>
			</div>
		)
	}
}

// ========================================

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
