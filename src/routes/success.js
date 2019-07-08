import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import { paths } from './'

const Success = () => (
  <Layout>
    <div>
      <div>
        <h1>Success!</h1>
        <h3>Your question was submited to our team.</h3>
      </div>
      <p>Thank you for contacting us!</p>
      <Link to={paths.home}>HOME</Link>
    </div>
  </Layout>
)

export default Success