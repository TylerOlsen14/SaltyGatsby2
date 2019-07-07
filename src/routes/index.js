const path = require('path')

/**
 * File for all the different routes. These will be rendered in gatsby-node.js.
 */
const routes = {
  home: {
    path: '/',
    component: path.resolve(__dirname, 'home.js'),
  },
  about: {
    path: '/about',
    component: path.resolve(__dirname, 'about.js'),
  },
  contact: {
    path: '/contact',
    component: path.resolve(__dirname, 'contact.js')
  },
  Success: {
    path: '/success',
    component: path.resolve(__dirname, 'success.js')
  },
  EmmaStreet: {
    path: '/EmmaStreet',
    component: path.resolve(__dirname, 'EmmaStreet.js')
  },
  LaurelStreet: {
    path: '/LaurelStreet',
    component: path.resolve(__dirname, 'LaurelStreet.js')
  }
}

// Same keys as 'routes', but the value is only the path.
const paths = Object.keys(routes).reduce((acc, route) => {
  acc[route] = routes[route].path
  return acc
}, {})

module.exports = { routes, paths }