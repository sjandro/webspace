import React, { Component, Fragment } from 'react'
import './styles.css'
import mainImage from '../../assets/img/saveTheDate.jpg'
import coverImage from '../../assets/img/cover.jpg'
import shrub from '../../assets/img/shrub.png'
import shrub1 from '../../assets/img/shrub1.png'
import greenLeaf from '../../assets/img/greenLeaf.png'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Card from 'react-bootstrap/Card'

const CAVU = '27.9585704%2C-82.459988'
const ALEJANDRO = '28.2207728%2C-82.3097245'
const JANELLE = '28.184542%2C-82.341987'
class SpecialPurpose extends Component {
  mapsSelector = (coord, type) => {
    if (type === 'google')
      window.open(`https://maps.google.com/maps?daddr=${coord}&amp;ll=`)
    if (type === 'apple')
      window.open(`maps://maps.google.com/maps?daddr=${coord}&amp;ll=`)
    if (type === 'waze') window.open(`"https://waze.com/ul?q=${coord}`)
    this.close()
  }

  state = { tab: 'itinerary', subTab: 'food', modal: false }

  open = (address, addressText) =>
    this.setState({ modal: true, address, addressText })

  close = () => this.setState({ modal: false })

  changeMainTab = (tab) => this.setState({ tab })

  changeSubTab = (subTab) => this.setState({ subTab })

  goToSubTab = (subTab) => {
    this.setState({ tab: 'menu' }, () => this.changeSubTab(subTab))
  }

  render() {
    return (
      <Card>
        <Card.Img variant="top" src={coverImage} />
        <Card.Body>
          <Tabs
            className="main-nav"
            defaultActiveKey="itinerary"
            activeKey={this.state.tab}
            onSelect={this.changeMainTab}
          >
            <Tab eventKey="itinerary" title="Itinerary">
              <Itinerary goToSubTab={this.goToSubTab} open={this.open} />
            </Tab>
            <Tab eventKey="menu" title="Menu">
              <Menu
                changeSubTab={this.changeSubTab}
                subTab={this.state.subTab}
              />
            </Tab>
            <Tab eventKey="save-the-date" title="Invite">
              <SaveTheDate />
            </Tab>
          </Tabs>
        </Card.Body>
        <MapModal
          show={this.state.modal}
          handleClose={this.mapsSelector}
          address={this.state.address}
          addressText={this.state.addressText}
        />
      </Card>
    )
  }
}

const Itinerary = ({ goToSubTab, open }) => {
  return (
    <div className="itinerary">
      <Card.Title className="header">Alejandro + Boys' Party</Card.Title>
      <Card.Text className="sub-header">Thursday, 6/20 @ 4:00PM</Card.Text>
      <div
        className="clickable"
        onClick={() => open(ALEJANDRO, "Alejandro + Boys' Party")}
      >
        <Card.Subtitle className="mb-2 text-muted ">
          4403 Yans Ct.
        </Card.Subtitle>
        <Card.Subtitle className="text-muted ">
          Wesley Chapel, FL, 33543
        </Card.Subtitle>
        <div className="indicator">CLICK FOR DIRECTIONS</div>
      </div>
      <br />
      <Card.Title className="header">Janelle + Girls' Party</Card.Title>
      <Card.Text className="sub-header">Thursday, 6/20 @ 4:00PM</Card.Text>
      <div
        className="clickable"
        onClick={() => open(JANELLE, "Janelle + Girls' Party")}
      >
        <Card.Subtitle className="mb-2 text-muted ">
          1912 Twisting Ln.
        </Card.Subtitle>
        <Card.Subtitle className="text-muted ">
          Wesley Chapel, FL, 33543
        </Card.Subtitle>
        <div className="indicator">CLICK FOR DIRECTIONS</div>
      </div>
      <br />
      <Card.Title className="header ">Wedding Ceremony + Reception</Card.Title>
      <Card.Text className="sub-header ">Saturday, 6/22 @ 6:30PM</Card.Text>
      <div className="clickable" onClick={() => open(CAVU, 'CAVU')}>
        <Card.Subtitle className="mb-2 text-muted">CAVU Tampa</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          1601 N. Franklin St.
        </Card.Subtitle>
        <Card.Subtitle className="text-muted">
          Tampa, Florida, 33602
        </Card.Subtitle>
        <div className="indicator">CLICK FOR DIRECTIONS</div>
      </div>
      <br />

      <Card.Text className="sub-header">6:30PM</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        Everyone Seated, Ceremony Begins
      </Card.Subtitle>

      <Card.Text className="sub-header">~7:00PM</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        Cocktail Hour on the Patio (Room Flip)
      </Card.Subtitle>
      <Card.Subtitle className="text-muted">
        <i>4-Hr. Open Bar Begins</i>
      </Card.Subtitle>
      <div className="indicator clickable" onClick={() => goToSubTab('drinks')}>
        CLICK TO SEE MENU
      </div>

      <Card.Text className="sub-header">~7:45PM</Card.Text>
      <Card.Subtitle className="text-muted">Dinner Served</Card.Subtitle>
      <div className="indicator clickable" onClick={() => goToSubTab('food')}>
        CLICK TO SEE MENU
      </div>

      <Card.Text className="sub-header">~8:00PM</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        First Dance + Parents/Grandparents Dances
      </Card.Subtitle>

      <Card.Text className="sub-header">~8:30PM</Card.Text>
      <Card.Subtitle className="text-muted">
        Coffee and Dessert Served
      </Card.Subtitle>
      <div className="indicator clickable" onClick={() => goToSubTab('food')}>
        CLICK TO SEE MENU
      </div>

      <Card.Text className="sub-header">~8:45PM</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        Dance Floor Opens
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">
        Dancing, Photos, Memories
      </Card.Subtitle>

      <Card.Text className="sub-header">11:00PM</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        Open Bar Service Ends, Cash Bar Begins
      </Card.Subtitle>

      <Card.Text className="sub-header">11:59PM</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">Goodnight!</Card.Subtitle>
    </div>
  )
}

const Menu = ({ subTab, changeSubTab }) => {
  return (
    <Tabs
      defaultActiveKey="food"
      activeKey={subTab}
      onSelect={changeSubTab}
      className="menu-tabs"
    >
      <Tab eventKey="food" title="Food">
        <Food />
      </Tab>
      <Tab eventKey="drinks" title="Drinks">
        <Drinks />
      </Tab>
    </Tabs>
  )
}

const Food = () => {
  return (
    <div className="menu">
      <Card.Title className="header">Tampa Cubano Mains</Card.Title>
      <Card.Text className="sub-header">Mojo Roasted Pork</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        pork shoulder. scratch made mojo sauce.
      </Card.Subtitle>

      <Card.Text className="sub-header">Garlic Roasted Chicken</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        free range. roasted garlic. citrus.
      </Card.Subtitle>

      <Card.Text className="sub-header">2.0.1.5 Chopped Salad</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        romaine. heirloom tomatoes. house marinated olives. prosciutto crumble.
        ricotta salata. grilled lemon vinaigrette.
      </Card.Subtitle>
      <br />

      <Card.Title className="header">Fixings</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Black Beans</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">
        Tostones/Patacones
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">Jasmine Rice</Card.Subtitle>
      <br />

      <Card.Title className="header">Sauces</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Garlic Mojo</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">Sofrito</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">Mojo Criollo</Card.Subtitle>
      <br />

      <Card.Title className="header">Desserts</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        Tres Leches Shooters
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">
        Double Chocolate Brownie Bites
      </Card.Subtitle>
    </div>
  )
}

const Drinks = () => {
  return (
    <div className="drinks">
      <Card.Title className="header">Alcohol-Free</Card.Title>
      <Card.Text className="sub-header">Refreshments</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">Water,</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">Coffee,</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">etc.</Card.Subtitle>
      <br />
      <Card.Title className="header">Alcohol</Card.Title>
      <Card.Text className="sub-header">Beer</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        Domestic (2): Corona, Budweiser
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">
        Craft (2): Guayabera Citra Pale Ale, New Belgium Fat Tire
      </Card.Subtitle>
      <Card.Text className="sub-header">Red Wine</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        La Crema Pinot Noir (Monterey, CA)
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">
        Hess Cabernet (Napa Allomi Vineyard, CA)
      </Card.Subtitle>
      <Card.Text className="sub-header">Rosé/Sparkling Wine</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        La Crema Rosé (CA),
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">
        La Vostra Prosecco (Italy)
      </Card.Subtitle>
      <Card.Text className="sub-header">Speciality Cocktail</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">Margarita</Card.Subtitle>
      <Card.Text className="sub-header">Liquors/Spirits</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        Grey Goose Vodka,
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">Hendricks Gin,</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">
        Casa Amigos Blanco Tequilla,
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">Bacardi Rum,</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">
        Captain Morgan Spiced Rum,
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">
        Jack Daniels Whiskey,
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">
        Glenfiddich 12 year Scotch
      </Card.Subtitle>
    </div>
  )
}

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

const MapModal = ({ show, handleClose, address, addressText }) => {
  const iOSSafari = () => {
    const userAgent = window.navigator.userAgent
    return (
      /iP(ad|od|hone)/i.test(userAgent) &&
      /WebKit/i.test(userAgent) &&
      !/(CriOS|FxiOS|OPiOS|mercury)/i.test(userAgent)
    )
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Get Directions</Modal.Title>
      </Modal.Header>
      <Modal.Body>{`Open ${addressText} directions in your map app of choice!`}</Modal.Body>
      <Modal.Footer>
        <Button
          className="map-bttn"
          variant="primary"
          onClick={() => handleClose(address, 'google')}
        >
          Google Maps
        </Button>
        {iOSSafari() && (
          <Button
            className="map-bttn"
            variant="primary"
            onClick={() => handleClose(address, 'apple')}
          >
            Apple Maps
          </Button>
        )}
        <Button
          className="map-bttn"
          variant="primary"
          onClick={() => handleClose(address, 'waze')}
        >
          Waze
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SpecialPurpose
