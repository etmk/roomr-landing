import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero';
import FeatureSection from '../components/featureSection';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`roomr`, `room management`, `open-source`, `free`]} />
    <Hero />
    <FeatureSection triangle={data.triangle.childImageSharp.fixed}/>
  </Layout>
)

export default IndexPage