import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../assets/logo.jpg"
import './header.css'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header className="header">
    <img src={logo} alt="Salty Rogue Real Estate" className="logoSalty" />
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}>
      <h1>Salty Rogue Real Estate</h1>        
    </Link>
    <ul style={{ listStyle: `none`, float: `right`,  }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about">About</ListLink>
      <ListLink to="/contact">Contact</ListLink>
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
