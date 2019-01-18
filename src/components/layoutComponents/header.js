import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import MediaQuery from 'react-responsive';
import { Link } from 'react-scroll';

import Container from '../helperComponents/container';

import closeMenuIcon from '../../images/close_menu_icon.svg';

import './header.css';

class Header extends Component {
  state = {
    prevScrollpos: 0,
    menuOpen: false,
    canShowNavbar: true,
    scrollTimer: 'none'
  }

  componentDidMount = async () => {
    window.addEventListener('click', event => {
      const name = event.target.getAttribute('name');
      if(name !== 'mobileHeader' && this.state.menuOpen === true) {
        this.toggleMobileMenu();
      }

      if(name !== 'mobileHeader' && name === 'hamburgerMenu') {
        this.toggleMobileMenu();
      }
    })
    window.addEventListener("scroll", this.navbarDisplayHandler);
    this.setState({ prevScrollpos: window.pageYOffset});
  }

  navbarDisplayHandler = () => {
    const prevScrollpos = this.state.prevScrollpos;
    let currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById('navbar');
    if (currentScrollPos > 0 && !navbar.classList.contains('header-shadow')) {
      navbar.classList.add('header-shadow');
    } else if (currentScrollPos === 0) {
      navbar.classList.remove('header-shadow');
    }
    if (currentScrollPos <= 70) {
      navbar.style.top = "0"
    } else {
      if (
        prevScrollpos > currentScrollPos && this.state.canShowNavbar
      ) {
        navbar.style.top = "0";
      }
      if (prevScrollpos < currentScrollPos && currentScrollPos > 70) {
        if(this.state.scrollTimer !== 'none') {
          clearTimeout(this.state.scrollTimer);
        }
        this.setState({ canShowNavbar: false });
        navbar.style.top = "-80px";
        this.setState({scrollTimer : setTimeout(() => {
          this.setState({ canShowNavbar: true });
        }, 500)});
      }
      this.setState({ prevScrollpos: currentScrollPos });
    }
  }
  
  toggleMobileMenu = () => {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen}))
  }

  onRoomrClick = () => {
    this.setState({ menuOpen: false });
  }

  render () {
    return (
      <Fragment>
        <div
        className="header-box"
        id="navbar"
        >
          <Container>
            <div className="header-content-box">
              <Link to="heroSection" spy={true} smooth={'easeInOutCubic'} duration={750} offset={-70}>
              <h1 onClick={this.onRoomrClick}>
                {this.props.siteTitle}
              </h1>
              </Link>
              <MediaQuery minWidth={1088}>
                <div className="navbar-links-box">
                <Link to="featureSection" spy={true} smooth={'easeInOutCubic'} duration={750} offset={-70}>
                  <p>Features</p>
                </Link>
                <Link to="pricingSection" spy={true} smooth={'easeInOutCubic'} duration={750} offset={-70}>
                  <p>Pricing</p>
                </Link>
                <Link to="testimonialSection" spy={true} smooth={'easeInOutCubic'} duration={750} offset={-70}>
                  <p>Testimonials</p>
                </Link>
                <Link to="loginSection" spy={true} smooth={'easeInOutCubic'} duration={750} offset={-70}>
                  <p>Sign up/Login</p>
                </Link>
                <Link to="sourcecodeSection" spy={true} smooth={'easeInOutCubic'} duration={750} offset={-70}>
                  <p>Sourcecode</p>
                </Link>
                <Link to="contactSection" spy={true} smooth={'easeInOutCubic'} duration={750} offset={-70}>
                  <p>Contact</p>
                </Link>
                </div>
              </MediaQuery>
              <MediaQuery maxWidth={1087}>
                <div 
                  name="hamburgerMenu"
                  className="hamburger-menu"
                >
                  <div name="hamburgerMenu"></div>
                  <div name="hamburgerMenu"></div>
                  <div name="hamburgerMenu"></div>
                </div>
              </MediaQuery>
            </div>
          </Container>
        </div>
        
          <div
            name="mobileHeader"
            className="mobile-header"
            style={{
              "right": (this.state.menuOpen) ? "0px" : "-260px"
            }}
          >
            <img
            alt="mobile menu close button"
            src={closeMenuIcon}
            />
            <Link to="featureSection" spy={true} smooth={'easeInOutCubic'} duration={750} offset={-70}>
              <p onClick={this.toggleMobileMenu}>Features</p>
            </Link>
            <Link to="pricingSection" spy={true} smooth={'easeInOutCubic'} duration={750} offset={-70}>
              <p onClick={this.toggleMobileMenu}>Pricing</p>
            </Link>
            <Link to="testimonialSection" spy={true} smooth={'easeInOutCubic'} duration={750} offset={-70}>
              <p onClick={this.toggleMobileMenu}>Testimonials</p>
            </Link>
            <Link to="loginSection" spy={true} smooth={'easeInOutCubic'} duration={750} offset={-70}>
              <p onClick={this.toggleMobileMenu}>Sign up/Login</p>
            </Link>
            <Link to="sourcecodeSection" spy={true} smooth={'easeInOutCubic'} duration={750} offset={-70}>
              <p onClick={this.toggleMobileMenu}>Sourcecode</p>
            </Link>
            <Link to="contactSection" spy={true} smooth={'easeInOutCubic'} duration={750} offset={-70}>
              <p onClick={this.toggleMobileMenu}>Contact</p>
            </Link>
          </div>
       
      </Fragment>
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
