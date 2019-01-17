import React, { Component } from 'react';

import SectionHeader from './helperComponents/sectionHeader';
import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';

import './loginSection.css';

class LoginSection extends Component {
  state = {
    isSignUp: true
  }

  onSignupTab = () => {
    this.setState({ isSignUp: true });
  }

  onLoginTab = () => {
    this.setState({ isSignUp: false})
  }
  render () {
    return (
      <div className="login-section">
        <SectionHeader isBlue text="Sign up/Login" smallLine="240px" bigLine="320px" />
        <Container>
          <Centrifier>
            <div className="login-box">
              <div className="tabs-box">
                <div
                  onClick={this.onSignupTab}
                  className="tab--signup"
                  style={{"background" : (this.state.isSignUp) ? "#1e4363" : "#152F45"}}
                >
                  Sign up
                </div>
                <div
                  onClick={this.onLoginTab}
                  className="tab--login"
                  style={{"background" : (this.state.isSignUp) ? "#152F45" : "#1e4363"}}
                >
                  Login
                </div>
              </div>
              <div
                className={`form-box ${(this.state.isSignUp) ? "form-box--signup" : "form-box--login"}`}
              >
                {(!this.state.isSignUp) && <div className="entity-box">entity...</div>}
                <div>email...</div>
                <div>password...</div>
                <div className="signup-box">
                  {(this.state.isSignUp) ? "sign up" : "login"}
                </div>
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
  }
  
}

export default LoginSection;