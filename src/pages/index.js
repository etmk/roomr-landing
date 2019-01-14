import React from 'react';
import { Element } from 'react-scroll';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import FeatureSection from '../components/featureSection';
import PricingSection from '../components/pricingSection';
import TestimonialSection from '../components/testimonialSection';
import LoginSection from '../components/loginSection';
import SourcecodeSection from '../components/sourcecodeSection';
import ContactSection from '../components/contactSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`roomr`, `room management`, `open-source`, `free`]} />
    <Element name="heroSection">
      <Hero />
    </Element>
    
    <Element name="featureSection">
      <FeatureSection />
    </Element>
    <Element name="pricingSection">
      <PricingSection />
    </Element>
    <Element name="testimonialSection">
      <TestimonialSection />
    </Element>
    <Element name="loginSection">
      <LoginSection />
    </Element>
    <Element name="sourcecodeSection">
      <SourcecodeSection />
    </Element>
    <Element name="contactSection">
      <ContactSection />
    </Element>
    
    
    
    
    
    
  </Layout>
)

export default IndexPage