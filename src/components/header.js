import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Container from './container';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#fcf2cb`,
      height: 90
    }}
  >
    <Container>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1152,
        height: `100%`,
        padding: `0`,
        display: `flex`,
        alignItems: `center`
      }}
    >
      <h1 style={{
          margin: 0,
          marginTop: -5,
          fontFamily: `Roboto`,
          letterSpacing: 1,
          fontWeight: 700
        }}
      >
        <Link
          to="/"
          style={{
            color: `#1e4363`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    </Container>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
