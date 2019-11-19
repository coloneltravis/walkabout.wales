import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Contact" />
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem`, padding: `4px` }}>
      <Img fluid={data.file.childImageSharp.fluid} />

        <div style={{padding: `10px`}}></div>
        <select id="contactList">
          <option value="walks">Walks</option>
          <option value="courses">Courses</option>
          <option value="web">Web site</option>
        </select>
    </div>

    <div id="walks">
    </div>

    <div id="courses">
    </div>

    <div id="contact">
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

