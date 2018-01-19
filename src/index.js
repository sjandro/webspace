import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

class App extends Component {
	render() {
		return (
			<div className="content">
				<div>Hello,</div>
				<div>If you see this I want you to know you are incredible!</div>
			</div>
		)
	}
}

// ========================================

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
