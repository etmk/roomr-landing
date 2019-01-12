import React from 'react';

import './loginSection.css';

import SectionHeader from './sectionHeader';
import Container from './container';
import Centrifier from './centrifier';

const LoginSection = () => (
  <div className="login-section">
    <SectionHeader isBlue text="Sign up/Login" smallLine="240px" bigLine="320px" />
    <Container>
      <Centrifier>
        <div className="login-box"></div>
      </Centrifier>
    </Container>
    <Container>
      <Centrifier>
        <div className="info-text-box">
          <p>Choose a plan once you are signed up.</p>
        </div>
      </Centrifier>
    </Container>
  </div>
)

export default LoginSection;