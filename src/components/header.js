import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Container from './container';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#fcf2cb`
    }}
  >
    <Container>
      <div
        style={{
          height: 90,
          padding: `0`,
          display: `flex`,
          alignItems: `center`
        }}
      >
        <h1 style={{ marginTop: -5 }}
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
