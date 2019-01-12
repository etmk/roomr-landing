import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import FeatureSection from '../components/featureSection';
import PricingSection from '../components/pricingSection';
import TestimonialSection from '../components/testimonialSection';
import LoginSection from '../components/loginSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`roomr`, `room management`, `open-source`, `free`]} />
    <Hero />
    <FeatureSection />
    <PricingSection />
    <TestimonialSection />
    <LoginSection />
  </Layout>
)

export default IndexPage