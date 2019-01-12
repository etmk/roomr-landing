import React from 'react';
import MediaQuery from 'react-responsive';

import SectionHeader from './sectionHeader';

import './testimonialSection.css';
import Centrifier from './centrifier';
import Container from './container';

import triangleLeft from '../images/testimonial-triangle-left.svg';
import triangleRight from '../images/testimonial-triangle-right.svg';

const TestimonialSection = () => (
  <div className="testimonial-section">
    <SectionHeader text="Testimonials" smallLine="220px" bigLine="300px"/>
    <Container>
      <Centrifier>
        <div className="testimonial-box">
          <MediaQuery minWidth={700}>
            <img alt="testimonial triangle left" src={triangleLeft}/>
          </MediaQuery>
          <p className="testimonial">We used to spend loads of time looking for rooms. Additionally, workers looking for rooms would interrupt meetings because they were not sure whether a room was vacant or not. Roomr helped us find rooms more quickly and made sure everyone was informed at all times.</p>
          <MediaQuery minWidth={700}>
            <img alt="testimonial triangle right" src={triangleRight}/>
          </MediaQuery>
        </div>
      </Centrifier>
    </Container>
    <Container>
      <Centrifier>
        <div className="testimonial-company">
          <p>CEO of someCompany Inc.</p>
        </div>
      </Centrifier>
    </Container>
    <Container>
      <Centrifier>
      <div className="testimonial__swipe-indicator">
            <div className="indicator-box"></div>
            <div className="indicator-box"></div>
            <div className="indicator-box"></div>
          </div>
      </Centrifier>
    </Container>
  </div>
)

export default TestimonialSection;