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

const myFunction = props => (
  document.getElementById("myDropdown").classList.toggle("show")
)

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const Header = () => (
  <header className="header">
    <img src={logo} alt="Salty Rogue Real Estate" className="logoSalty" />
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}>
      <h1>Salty Rogue <br/> Real Estate</h1>
    </Link>
    <div className="siteLinks">
      <ul style={{ listStyle: `none`, float: `right`,  }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </div>
    <div class="dropdown">
      <button onClick="myFunction()" class="dropbtn">
        Dropdown
      </button>
      <ul>
        <li>
          <Link to='/LaurelStreet'>Laurel Street</Link>
        </li>
        <li>
          <Link to='/EmmaStreet'>Emma Street</Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header