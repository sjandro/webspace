import React, { Component } from 'react'
import './styles.css'

class Navbar extends Component {
  render() {
    return (
      <div className="nav sticky">
        <div className="nav-bttn-container">
          <span className="nav-bttn">Home</span>
          <span className="nav-bttn">About</span>
          <span className="nav-bttn">Contact</span>

          {/* <span className="nav-bttn-right">
            <a href="https://www.linkedin.com/in/salazar6/" target="_blank">
             <img className="icon" src={require('../../assets/img/linkedin.png')} alt="not working..."/>
            </a>
          </span>
          <span className="nav-bttn-right">Test 5</span> */}
        </div>
      </div>
    )
  }
}

export default Navbar
