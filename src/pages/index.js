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

export const query = graphql`
  query {
    triangle: file(relativePath: { eq: "feature-triangle.png" }) {
      childImageSharp {
        fixed(width: 15, height: 15) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`