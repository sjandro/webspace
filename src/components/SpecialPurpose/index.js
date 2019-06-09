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

const CAVU = '27.9585751,-82.4621767'
const ALEJANDRO = '28.2207775,-82.3119133'
const JANELLE = '28.1845467,-82.3441757'
class SpecialPurpose extends Component {
  mapsSelector = (coord) => {
    // if (
    //   /* if we're on iOS, open in Apple Maps */
    //   navigator.platform.indexOf('iPhone') != -1 ||
    //   navigator.platform.indexOf('iPad') != -1 ||
    //   navigator.platform.indexOf('iPod') != -1
    // )
    //   window.open(`maps://maps.google.com/maps?daddr=${coord}&amp;ll=`)
    // /* else use Google */ else
    window.open(`https://maps.google.com/maps?daddr=${coord}&amp;ll=`)
  }

  render() {
    return (
      <Card>
        <Card.Img variant="top" src={coverImage} />
        <Card.Body>
          <Tabs defaultActiveKey="itinerary" id="uncontrolled-tab-example">
            <Tab eventKey="itinerary" title="Itinerary">
              <Itinerary clickHandler={this.mapsSelector} />
            </Tab>
            {/* <Tab eventKey="food" title="Food">
              <Food />
            </Tab>
            <Tab eventKey="drinks" title="Drinks">
              <Drinks />
            </Tab> */}
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

const Itinerary = ({ clickHandler }) => {
  return (
    <div className="itinerary">
      <Card.Title className="header">Alejandro + Boys' Party</Card.Title>
      <Card.Text className="sub-header">Thursday, 6/20 @ 4:00PM</Card.Text>
      <div className="clickable" onClick={() => clickHandler(ALEJANDRO)}>
        <Card.Subtitle className="mb-2 text-muted ">
          4403 Yans Ct.
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted ">
          Wesley Chapel, FL, 33543
        </Card.Subtitle>
      </div>
      <br />
      <Card.Title className="header">Janelle + Girls' Party</Card.Title>
      <Card.Text className="sub-header">Thursday, 6/20 @ 4:00PM</Card.Text>
      <div className="clickable" onClick={() => clickHandler(JANELLE)}>
        <Card.Subtitle className="mb-2 text-muted ">
          1912 Twisting Ln.
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted ">
          Wesley Chapel, FL, 33543
        </Card.Subtitle>
      </div>
      <br />
      <Card.Title className="header ">Wedding Ceremony + Reception</Card.Title>
      <Card.Text className="sub-header ">Saturday, 6/22 @ 6:30PM</Card.Text>
      <div className="clickable" onClick={() => clickHandler(CAVU)}>
        <Card.Subtitle className="mb-2 text-muted">CAVU Tampa</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          1601 N. Franklin St.
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Tampa Florida, 33602
        </Card.Subtitle>
      </div>

      <Card.Text className="sub-header">6:30PM</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        Everyone Seated, Ceremony Begins
      </Card.Subtitle>

      <Card.Text className="sub-header">~7:00PM</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        Cocktail Hour on the Patio (Room Flip)
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">
        <i>4-Hr. Open Bar Begins</i>
      </Card.Subtitle>

      <Card.Text className="sub-header">~7:45PM</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        Dinner Served (See Menu)
      </Card.Subtitle>

      <Card.Text className="sub-header">~8:00PM</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        First Dance + Parents/Grandparents Dances
      </Card.Subtitle>

      <Card.Text className="sub-header">~8:30PM</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">
        Coffee and Dessert Served (See Menu)
      </Card.Subtitle>

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

const Menu = () => {
  return (
    <Tabs
      defaultActiveKey="food"
      className="menu-tabs"
      id="uncontrolled-tab-example"
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

export default SpecialPurpose
