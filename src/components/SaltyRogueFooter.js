import { Link } from 'gatsby';
import { paths } from '../routes/index';
import React from 'react';
import logo from "../assets/logo.jpg";
import "./SaltyRogueFooter.css";

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Routes = () => (
  <div className="SaltyFooter">
    <div className="SaltyInfo">
      <h6>This is where the firm's info will be found</h6>
    </div>
    <div className="SaltyFooterLinks">
      <ListLink to={paths.home}>Home</ListLink>   
      <ListLink to={paths.about}>About</ListLink>
      <ListLink to={paths.contact}>Contact</ListLink>
    </div>
    <img src={logo} alt="Salty Rogue Real Estate" className="logo" />
    {/* <img src={logo} alt="Salty Rogue Real Estate" className="logo" style={{width: "50px", height: "50px"}} /> */}
  </div>
)

export default Routes