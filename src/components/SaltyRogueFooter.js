import { Link } from 'gatsby'
import { paths } from '../routes/index'
import React from 'react'
import './SaltyRogueFooter.css'
import logo from "../assets/logo.jpg"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Routes = () => (
  <div className="SaltyFooter">
    <img src={logo} alt="Salty Rogue Real Estate" className="logo" />
    <div className="SaltyInfo">
      <h6>This is where the firm's info will be found</h6>
    </div>
    <div className="SaltyFooterLinks">
      <ListLink to={paths.home}>Home</ListLink>   
      <ListLink to={paths.about}>About</ListLink>
      <ListLink to={paths.contact}>Contact</ListLink>
    </div>
  </div>
)

export default Routes