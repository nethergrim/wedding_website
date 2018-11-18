import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import WhatWeDo from './whatWeDo/whatWeDo'
import { Grommet, Box } from 'grommet'
import './layout.css'

const theme = {
  global: {
    colors: {
      'light-1': '#ffffff',
      'light-2': '#f5f5f5',
      text: {
        light: 'rgba(0, 0, 0, 0.87)',
      },
    },
    edgeSize: {
      small: '14px',
    },
    elevation: {
      light: {
        medium:
          '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
      },
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Weddings By Egupova' },
            {
              name: 'keywords',
              content: 'свадьба, егупова, евгения, организация свадеб Харьков',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Grommet theme={theme}>
          <Box>
            <Header siteTitle={data.site.siteMetadata.title} />
            <WhatWeDo />
          </Box>
        </Grommet>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
