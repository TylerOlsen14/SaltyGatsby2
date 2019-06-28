const { routes } = require('./src/routes')

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  Object.keys(routes).forEach(route => createPage(routes[route]))
}
// X1-ZWz1h7o5xy7a4r_7sxq3