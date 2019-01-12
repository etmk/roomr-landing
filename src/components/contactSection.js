import React from 'react';

import SectionHeader from './sectionHeader';
import Container from './container';
import Centrifier from './centrifier';

import './contactSection.css';

import fbIcon from '../images/fb_icon.svg';

const ContactSection = () => (
  <div className="contact-section">
    <SectionHeader isBlue text="Contact" smallLine="150px" bigLine="240px"/>
    <Container>
      <Centrifier>
        <div className="contact-text-box">
          <p>Want to know more about the enterprise plan or have any other question? Do not hesitate to drop us a line through the following channels!</p>
        </div>
      </Centrifier>
      <Centrifier>
        <div className="contact-social-box">
          <img src={fbIcon} />
          <img src={fbIcon} />
          <img src={fbIcon} />
          <img src={fbIcon} />
        </div>
      </Centrifier>
    </Container>
  </div>
)

export default ContactSection;