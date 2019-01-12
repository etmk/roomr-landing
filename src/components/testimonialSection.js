import React from 'react';

import SectionHeader from './sectionHeader';

import './testimonialSection.css';
import Centrifier from './centrifier';
import Container from './container';

const TestimonialSection = () => (
  <div className="testimonial-section">
    <SectionHeader text="Testimonials" smallLine="220px" bigLine="300px"/>
    <Container>
      <Centrifier>
        <div className="testimonial-box">
          <p className="testimonial">We used to spend loads of time looking for rooms. Additionally, workers looking for rooms would interrupt meetings because they were not sure whether a room was vacant or not. Roomr helped us find rooms more quickly and made sure everyone was informed at all times.</p>
        </div>
      </Centrifier>
    </Container>
  </div>
)

export default TestimonialSection;