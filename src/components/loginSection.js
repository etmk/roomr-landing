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
        <div className="login-box">
          <div className="tabs-box">
            <div className="tab--signup">Sign up</div>
            <div className="tab--login">Login</div>
          </div>
          <div className="form-box">
            <div className="email-box">email...</div>
            <div className="password-box">password...</div>
            <div className="signup-box">sign up</div>
          </div>
        </div>
      </Centrifier>
    
      <Centrifier>
        <div className="info-text-box">
          <p>Choose a plan once you are signed up.</p>
        </div>
      </Centrifier>
    </Container>
  </div>
)

export default LoginSection;