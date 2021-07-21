/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => (
  <div className="min-h-screen bg-black-500 font-normal	">{children}</div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
