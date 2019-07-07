import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../assets/logo.jpg"
import "./header.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = () => (
  <header className="header">
    <img src={logo} alt="Salty Rogue Real Estate" className="logoSalty" />
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h1>
        Salty Rogue <br /> Real Estate
      </h1>
    </Link>
    <ul>
      <li>
        <ListLink to="/">Home</ListLink>
      </li>
      <li>
        <a href="#">Properties</a>
        <ul>
          <li>
            <ListLink to="/LaurelStreet">Laurel Street</ListLink>
          </li>
          <li>
            <ListLink to="/EmmaStreet">Emma Street</ListLink>
          </li>
        </ul>
      </li>
      <li>
        <ListLink to="/contact">Contact</ListLink>
      </li>
      <li>
        <ListLink to="/about">About</ListLink>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
