import PropTypes from 'prop-types'
import React from 'react'

import Container from './container';
import './header.css';

const Header = ({ siteTitle }) => (
  <div className="header-box">
    <Container>
      <div className="header-content-box">
        <h1>
          {siteTitle}
        </h1>
        <div className="navbar-links-box">
          <p>Features</p>
          <p>Pricing</p>
          <p>Testimonials</p>
          <p>Sign up/Login</p>
          <p>Sourcecode</p>
          <p>Contact</p>
        </div>
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
