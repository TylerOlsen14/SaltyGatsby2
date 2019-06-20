import { Link } from 'gatsby'
import { paths } from '../routes/index'
import React from 'react'
import './routes.css'

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Routes = () => (
  <div className="routes">
    <ListLink to={paths.home}>Home</ListLink>   
    <ListLink to={paths.about}>About</ListLink>
    <ListLink to={paths.contact}>Contact</ListLink>
  </div>
)

export default Routes