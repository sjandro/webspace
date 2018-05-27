import React, { Component, Fragment } from 'react'
import './styles.css'
import mainImage from '../../assets/img/saveTheDate.jpg'
import shrub from '../../assets/img/shrub.png'
import shrub1 from '../../assets/img/shrub1.png'
import greenLeaf from '../../assets/img/greenLeaf.png'

class SpecialPurpose extends Component {
  render() {
    return (
      <div className="card">
        <img className="cover" src={mainImage} alt="Janelle and I" />
        <img className="shrub" src={shrub} alt="shrub" />
        <img className="shrub1" src={greenLeaf} alt="shrub" />
        <div className="text">
          <div className="title card-text">SAVE THE DATE</div>
          <div className="subtitle card-text">
            JANELLE <span>&</span> ALEJANDRO
          </div>
          <div className="cursive card-text">June 22, 2019, Tampa</div>
          <div className="cursive card-text">Invitation to follow</div>
        </div>
      </div>
    )
  }
}

export default SpecialPurpose
