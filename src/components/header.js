import PropTypes from 'prop-types'
import React from 'react'
import MediaQuery from 'react-responsive';

import Container from './container';
import './header.css';

const Header = ({ siteTitle }) => (
  <div className="header-box">
    <Container>
      <div className="header-content-box">
        <h1>
          {siteTitle}
        </h1>
        <MediaQuery minWidth={1088}>
          <div className="navbar-links-box">
            <p>Features</p>
            <p>Pricing</p>
            <p>Testimonials</p>
            <p>Sign up/Login</p>
            <p>Sourcecode</p>
            <p>Contact</p>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1087}>
          <div className="hamburger-menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </MediaQuery>
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
