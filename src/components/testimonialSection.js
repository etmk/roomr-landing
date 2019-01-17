import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Swipeable from 'react-swipeable';

import SectionHeader from './helperComponents/sectionHeader';
import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';
import IndexIndicator from './helperComponents/container';

import triangleLeft from '../images/testimonial-triangle-left.svg';
import triangleRight from '../images/testimonial-triangle-right.svg';

import './testimonialSection.css';

class TestimonialSection extends Component {
  state = {
    testimonial: 0
  }

  onIndicatorClick = event => {
    const number = parseInt(event.target.getAttribute('name'));
    this.setState({ testimonial: number });
  }

  moveRight = event => {
    if (this.state.testimonial === 2) {
      this.setState({ testimonial: 0 });
    } else {
      this.setState(prevState => ({ testimonial: prevState.testimonial + 1 }));
    }
  }

  moveLeft = event => {
    if (this.state.testimonial === 0) {
      this.setState({ testimonial: 2 });
    } else {
      this.setState(prevState => ({ testimonial: prevState.testimonial -1 }));
    }
  }

  render () {
    return (
      <div className="testimonial-section">
        <SectionHeader text="Testimonials" smallLine="220px" bigLine="300px"/>
        <Container>
          <Centrifier>
            <div className="testimonial-box">
              <MediaQuery minWidth={700}>
                <img
                  onClick={this.moveLeft}
                  alt="testimonial triangle left"
                  src={triangleLeft}
                />
              </MediaQuery>
              <Swipeable
                onSwipedLeft={this.moveRight}
                onSwipedRight={this.moveLeft}
              >
                {this.state.testimonial === 0 &&
                  <p className="testimonial">We used to spend loads of time looking for rooms. Additionally, workers looking for rooms would interrupt meetings because they were not sure whether a room was vacant or not. Roomr helped us find rooms more quickly and made sure everyone was informed at all times.</p>
                }
                {this.state.testimonial === 1 &&
                  <p className="testimonial">Thanks to the SAML single sign-on feature we could easily sign up all our 300 employees using the login data we already had. We had some problems while setting up but the support team helped us quickly and we got it done in under half an hour. Thanks guys!</p>
                }
                {this.state.testimonial === 2 &&
                  <p className="testimonial">We chose roomr because the usage analytics are just so helpful. We can quickly observe which rooms are used most and at what times. On top of that, the calendar integration automatically reminds everyone so forgotten meetings are now a thing of the past for us! </p>
                }
              </Swipeable>
              <MediaQuery minWidth={700}>
                <img
                  onClick={this.moveRight}
                  alt="testimonial triangle right"
                  src={triangleRight}
                />
              </MediaQuery>
            </div>
          </Centrifier>
        </Container>
        <Container>
          <Centrifier>
            <div className="testimonial-company">
              {this.state.testimonial === 0 &&
                <p>CEO of someCompany Inc.</p>
              }
              {this.state.testimonial === 1 &&
                <p>HR of bigCompany Inc.</p>
              }
              {this.state.testimonial === 2 &&
                <p>COO of thatCompany Inc.</p>
              }
            </div>
          </Centrifier>
        </Container>
        <Container>
          <Centrifier>
            <IndexIndicator
              onIndicatorClick={this.onIndicatorClick}
              index={this.state.testimonial}
              amount={3}
            />
          </Centrifier>
        </Container>
      </div>
    )
  }
}

export default TestimonialSection;