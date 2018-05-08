import React, { Component, Fragment } from 'react'
import './styles.css'

class SpecialPurpose extends Component {
  buttonOnClick = () => {
    window.alert(
      'Hello my love. Just wanted to tell you I love you and also safe the date! Maybe we can make a web based save the date that we can print into actual cards! Here is a dummy calendar 😊'
    )
  }
  render() {
    return (
      <Fragment>
        {/* <div>Save The Date!</div> */}
        <div className="container">
          <div className="calendar">
            <header>
              <h2>
                June <span className="accent-h2">2019</span>
              </h2>

              {/* <a className="btn-prev fontawesome-angle-left" href="#" /> */}
              {/* <a className="btn-next fontawesome-angle-right" href="#" /> */}
            </header>

            <table>
              <thead>
                <tr>
                  <td>Su</td>
                  <td>Mo</td>
                  <td>Tu</td>
                  <td>We</td>
                  <td>Th</td>
                  <td>Fr</td>
                  <td>Sa</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="prev-month">26</td>
                  <td className="prev-month">27</td>
                  <td className="prev-month">28</td>
                  <td className="prev-month">29</td>
                  <td className="prev-month">30</td>
                  <td className="prev-month">31</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>17</td>
                  <td>18</td>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td className="current-day">22</td>
                  {/* <td className="current-day event">22</td> */}
                </tr>

                <tr>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td className="next-month">1</td>
                  <td className="next-month">2</td>
                  <td className="next-month">3</td>
                  <td className="next-month">4</td>
                  <td className="next-month">5</td>
                  <td className="next-month">6</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- end calendar --> */}
          <div className="button-container">
            <span
              className="button button-primary"
              onClick={this.buttonOnClick}
            >
              Click Nelly!
            </span>
          </div>
        </div>
        {/* <!-- end container --> */}
      </Fragment>
    )
  }
}

export default SpecialPurpose
