import PropTypes from 'prop-types'
import React, { Component } from 'react'
import MediaQuery from 'react-responsive';

import Container from './container';
import './header.css';

class Header extends Component {
  state = { prevScrollpos: window.pageYOffset }

  componentDidMount = async () => {
    window.addEventListener("scroll", this.navFunction);
  }

  navFunction = () => {
    const prevScrollpos = this.state.prevScrollpos;
    const maxScroll = document.body.clientHeight - window.innerHeight;
    let currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById('navbar');
    if (
        (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) 
      || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
      || (prevScrollpos <= 0 && currentScrollPos <= 0)
      ) {
      navbar.style.top = "0";
    } else if (window.scrollY > 70) {
      navbar.style.top = "-80px";
    }
    this.setState(prevState => ({ prevScrollpos: currentScrollPos}));
  }
  

  render () {
    return (
      <div
      className={`header-box ${(window.scrollY > 70) ? "header-shadow" : null}`}
      id="navbar"
      >
        <Container>
          <div className="header-content-box">
            <h1>
              {this.props.siteTitle}
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
  }
  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
