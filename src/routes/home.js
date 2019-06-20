import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import { paths } from './'

const Home = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to={paths.about}>Go to About</Link>
  </Layout>
)

export default Home