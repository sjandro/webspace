import React, { Component, Fragment } from 'react'
import './styles.css'
import mainImage from '../../assets/img/saveTheDate.jpg'
import coverImage from '../../assets/img/cover.jpg'
import shrub from '../../assets/img/shrub.png'
import shrub1 from '../../assets/img/shrub1.png'
import greenLeaf from '../../assets/img/greenLeaf.png'

import Button from 'react-bootstrap/Button'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Card from 'react-bootstrap/Card'

class SpecialPurpose extends Component {
  render() {
    return (
      <Card>
        <Card.Img variant="top" src={coverImage} />
        <Card.Body>
          <Tabs defaultActiveKey="menu" id="uncontrolled-tab-example">
            <Tab eventKey="itinerary" title="Itinerary">
              <div />
            </Tab>
            <Tab eventKey="menu" title="Menu">
              <Menu />
            </Tab>
            <Tab eventKey="save-the-date" title="Invite">
              <SaveTheDate />
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    )
  }
}

const Menu = () => {
  return (
    <div className="menu">
      <Card.Title className="header">Tampa Cubano Mains</Card.Title>
      <Card.Text className="sub-header">Mojo Roasted Pork</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        pork shoulder. scratch made mojo sauce.
      </Card.Subtitle>
      <br />
      <Card.Text className="sub-header">Garlic Roasted Chicken</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        free range. roasted garlic. citrus.
      </Card.Subtitle>
      <br />

      <Card.Text className="sub-header">2.0.1.5 Chopped Salad</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        romaine. heirloom tomatoes. house marinated olives. prosciutto crumble.
        ricotta salata. grilled lemon vinaigrette.
      </Card.Subtitle>
      <br />

      <Card.Title className="header">Fixings</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Black Beans</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">Tostones</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">Jasmine Rice</Card.Subtitle>
      <br />

      <Card.Title className="header">Sauces</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Garlic Mojo</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">Sofrito</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">Mojo Criollo</Card.Subtitle>
    </div>
  )
}

// const EventInfo = () => {
//   return(

//   )
// }

const SaveTheDate = () => (
  <Fragment>
    <img className="cover" src={mainImage} alt="Janelle and I" />
    <img className="shrub" src={shrub} alt="shrub" />
    {/* <img className="shrub1" src={greenLeaf} alt="shrub" /> */}
    <div className="text">
      <div className="title card-text">SAVE THE DATE</div>
      <div className="subtitle card-text">
        JANELLE <span>&</span> ALEJANDRO
      </div>
      <div className="cursive card-text">June 22, 2019, Tampa</div>
      <div className="cursive card-text">Invitation sent</div>
    </div>
  </Fragment>
)

export default SpecialPurpose
