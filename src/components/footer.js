import React from 'react'

import Container from './container';
import Centrifier from './centrifier';
import './footer.css';

const Footer = () => (
  <div className="footer-box">
  <Container>
    <Centrifier>
      <div>
        <div className="footer-content-box">
          <div className="footer-address-box">
            <h3>Address</h3>
            <p>33rd, Roomrstreet, <br />Roomrtown</p>
          </div>
          <div className="footer-follow-box">
            <h3>Follow us</h3>
            <p>Facebook</p>
            <p>LinkedIn</p>
            <p>Twitter</p>
            <p className="footer-github">Github</p>
            <p>Youtube</p>
          </div>
          <div className="footer-company-box">
            <h3>Company</h3>
            <p>About</p>
            <p className="footer-culture">Culture</p>
            <p>Career</p>
            <p>Press</p>
          </div>
        </div>
        <div className="footer-term-box">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Roomr <span>©</span> 2018</p>
        </div>
      </div>  
    </Centrifier>
  </Container>
  </div>
)

export default Footer;