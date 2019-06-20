import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../assets/logo.jpg"
import './layout.css'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header style={{}}>
    <img src={logo} style={{width:"50px", height: "50px", }} alt="Salty Rogue Real Estate" />
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}>
      <h1>Salty Rogue Real Estate</h1>        
      {/* <h3 style={{ display: `inline`}}>Salty Rogue Real Estate</h3>         */}
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
