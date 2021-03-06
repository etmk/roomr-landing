import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Swipeable from 'react-swipeable'

import SectionHeader from './helperComponents/sectionHeader';
import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';
import IndexIndicator from './helperComponents/indexIndicator';

import './pricingSection.css';


class PricingSection extends Component {
  state = {
    monthly: true,
    plan: 0,
    width:''
  }

  componentDidMount = async () => {
    await this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWidth);
  }

   /**
   * for some reason, using mediaqueries from react-responsive
   * sometimes breaks the app, which is why I have created my own
   * mediaquery with updateWidth, until I find the cause
   */
  updateWidth = () => {
    this.setState({ width: window.innerWidth });
  }
  
  onPriceToggle = () => {
    this.setState(prevState => ({ monthly: !prevState.monthly}));
  }

  onIndicatorClick = event => {
    const number = parseInt(event.target.getAttribute('name'));
    this.setState({ plan: number});
  }

  onSwipedLeft = () => {
    if(this.state.plan !==2) {
      this.setState(prevState => ({ plan: prevState.plan + 1}))
    }
  }

  onSwipedRight = () => {
    if(this.state.plan !== 0) {
      this.setState(prevState => ({ plan: prevState.plan - 1}))
    }
  }

  render () {
    return (
      <div className="pricing-section">
        <SectionHeader
          isBlue
          text="Pricing" 
          smallLine="160px"
          bigLine="250px"
        />
        <Container>
          <Centrifier>
            <div className="pricing__toggle-box">
              <p>Monthly</p>
              <div className="toggle-background" onClick={this.onPriceToggle}>
                <div
                  className={`toggle-foreground ${(!this.state.monthly) ? "right" : null}`}
                >
                </div>
              </div>
              <p>Annually</p>
            </div>
          </Centrifier>
          <Centrifier>
            <Swipeable
              onSwipedLeft={this.onSwipedLeft}
              onSwipedRight={this.onSwipedRight}
            >
              <div className="pricing__plans-box">
                {(this.state.plan === 0  || this.state.width > 984) && 
                  <div className="plan-box">
                    <p className="plan-name" >Basic</p>
                    <p className="plan-price" >
                      {(this.state.monthly) ? "3": "2"}$/room
                    </p>
                    <p className="plan-per-month">per month</p>
                    <p>minimum 1 room</p>
                    <p className="plan-includes">Includes:</p>
                    <p className="plan-feature">block and unblock rooms</p>
                    <p className="plan-feature">access on any device</p>
                    <p className="plan-feature">unlimited members & admins</p>
                  </div>
                }
                {(this.state.plan === 1  || this.state.width > 984) && 
                  <div className="plan-box">
                    <p className="plan-name" >Pro</p>
                    <p className="plan-price" >
                    {(this.state.monthly) ? "5": "4"}$/room
                    </p>
                    <p className="plan-per-month">per month</p>
                    <p>minimum 1 room</p>
                    <p className="plan-includes">Includes:</p>
                    <p className="plan-feature">all of basic</p>
                    <p className="plan-feature">calendar integrations</p>
                    <p className="plan-feature">usage analytics</p>
                  </div>
                }
                {(this.state.plan === 2  || this.state.width > 984) && 
                  <div className="plan-box">
                    <p className="plan-name">Enterprise</p>
                    <p className="plan-price enterprise-plan" >Contact us</p>
                    <p className="plan-per-month">per month</p>
                    <p>minimum 1 room</p>
                    <p className="plan-includes">Includes:</p>
                    <p className="plan-feature">all of basic and pro</p>
                    <p className="plan-feature">slack plugin</p>
                    <p className="plan-feature">custom booking rules</p>
                    <p className="plan-feature">SAML single sign-on</p>
                    <p className="plan-feature">dedicated support team</p>
                    <p className="plan-feature">custom branding</p>
                  </div>
                }
              </div>
            </Swipeable>
          </Centrifier>
          <MediaQuery maxWidth={984}>
            <Centrifier>
              <IndexIndicator
                isBlue
                onIndicatorClick={this.onIndicatorClick}
                index={this.state.plan}
                amount={3}
              /> 
            </Centrifier>
          </MediaQuery>
        </Container>
      </div>
    )
  }
}

export default PricingSection;