import PropTypes from 'prop-types'
import React, { Component } from 'react'
import MediaQuery from 'react-responsive';
import { Link } from 'react-scroll';

import Container from './container';
import './header.css';

class Header extends Component {
  state = { prevScrollpos: 0}

  componentDidMount = async () => {
    window.addEventListener("scroll", this.navFunction);
    this.setState({ prevScrollpos: window.pageYOffset});
  }

  navFunction = () => {
    const prevScrollpos = this.state.prevScrollpos;
    let currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById('navbar');
    if (
        (prevScrollpos > currentScrollPos) 
      ) {
      navbar.style.top = "0";
    } else if (window.scrollY > 70) {
      navbar.style.top = "-80px";
    }
    this.setState(prevState => ({ prevScrollpos: currentScrollPos}));
  }
  

  render () {
    let scrollY = 0;
    if (typeof window !== 'undefined') {
      scrollY = window.scrollY;
    }
    return (
      <div
      className={`header-box ${(scrollY > 70)? "header-shadow" : null}`}
      id="navbar"
      >
        <Container>
          <div className="header-content-box">
            <h1>
              {this.props.siteTitle}
            </h1>
            <MediaQuery minWidth={1088}>
              <div className="navbar-links-box">
              <Link to="featureSection" spy={true} smooth={true} duration={750} offset={-70}>
                <p>Features</p>
              </Link>
              <Link to="pricingSection" spy={true} smooth={true} duration={750} offset={-70}>
                <p>Pricing</p>
              </Link>
              <Link to="testimonialSection" spy={true} smooth={true} duration={750} offset={-70}>
                <p>Testimonials</p>
              </Link>
              <Link to="loginSection" spy={true} smooth={true} duration={750} offset={-70}>
                <p>Sign up/Login</p>
              </Link>
              <Link to="sourcecodeSection" spy={true} smooth={true} duration={750} offset={-70}>
                <p>Sourcecode</p>
              </Link>
              <Link to="contactSection" spy={true} smooth={true} duration={750} offset={-70}>
                <p>Contact</p>
              </Link>
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
