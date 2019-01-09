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
        <h1 style={{
            marginTop: -5,
            color: `#1e4363`
          }}
        >
          {siteTitle}
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
