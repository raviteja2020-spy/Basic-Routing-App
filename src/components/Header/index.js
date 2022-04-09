import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="logo-bar">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1 className="logo-name">Wave</h1>
    </div>
    <ul className="nav-items">
      <li>
        <Link to="/" className="link-item">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="link-item">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="link-item">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
