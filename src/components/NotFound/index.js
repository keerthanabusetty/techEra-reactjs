import {Component} from 'react'
import Header from '../Header'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="not-found-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
              className="not-found-image"
              alt="not found"
            />
          </div>
          <h1 className="not-found-heading">Page Not Found</h1>
          <p className="not-found-text">
            We are sorry, the page you requested could not be found.
          </p>
        </div>
      </div>
    )
  }
}
export default NotFound
