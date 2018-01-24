import React, { Component } from 'react'
import './styles.css'

const MainView = (props) => {
  return (
    <div className="main-card">
      <img
        src={require('../../assets/img/profile.jpg')}
        alt="profile.jpg"
        className="profile-img"
      />
      <div className="bio-container">
        <div><strong>Hello,</strong></div>
        <div>If you see this I want you to know you are incredible!</div>
        <br/>
        <br/>
        <div>This site is under construction and in all honestly I have no idea what this site will entail. Stay tuned! 😅</div>
        <br/>
        <div>You may follow me or get in contact with me through these sites:</div>
        <br/>
        <div>
          <a href="https://www.linkedin.com/in/salazar6" target="_blank">
            <img
              className="social-icon"
              src={require('../../assets/img/Linkedin.svg')}
            />
          </a>
          <a href="https://github.com/sjandro" target="_blank">
            <img
              className="social-icon"
              src={require('../../assets/img/Github.svg')}
            />
          </a>
          <a href="https://twitter.com/sjandro16" target="_blank">
            <img
              className="social-icon"
              src={require('../../assets/img/Twitter.svg')}
            />
          </a>
          <a href="https://www.instagram.com/alejandro___salazar/" target="_blank">
            <img
              className="social-icon"
              src={require('../../assets/img/Instagram.svg')}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

class Main extends Component {
  render() {
    return <MainView />
  }
}

export default Main
