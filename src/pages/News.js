import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="News" />
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem`, padding: `4px` }}>
      <Img fluid={data.file.childImageSharp.fluid} />





    </div>
  </Layout>
)


export const query = graphql`
query {
  file(relativePath: {eq: "waw_intro_banner.jpg"}) {
    childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
    }
  }
}`

export default IndexPage

