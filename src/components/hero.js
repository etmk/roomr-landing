import React from 'react';
import Img from 'gatsby-image';
import MediaQuery from 'react-responsive';
import './hero.css';

import Container from './container';

const Hero = ({ heroImage }) => (
  <div className="hero">
    <Container>
    <MediaQuery minWidth={501}>
      <div className="hero__image-box">
          <Img className="hero__image" fluid={heroImage} />
      </div>
    </MediaQuery>
      <div className="hero-header-box">
        <div className="first-sentence">
          <p>Spend less time</p>
          <p>looking for empty rooms.</p>
        </div>
        <div className="second-sentence">
          <p>Have more time</p>
          <p>for actual work.</p>
        </div>
      </div>
      <div className="hero-buttons">
          <p>▹ Try demo</p>
          <p>▹ Sign up</p>
      </div>
    </Container>
  </div>
)


export default Hero;