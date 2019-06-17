import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"

import { paths } from './'

const Contact = () => {
  return(
    <Layout>
      <div>
        <h1>Let's talk together</h1>
        <h2>Phone number?</h2>
      </div>
      <Link to={paths.home}>Home</Link>   
      <Link to={paths.about}>About</Link>   
    </Layout>
  )
}

export default Contact