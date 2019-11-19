import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Activities" />
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem`, padding: `4px` }}>
      <Img fluid={data.file.childImageSharp.fluid} />

      <div style={{padding: `1em`}}>

        <p>Activities that we can cater for include:-</p>

        <p>Why not combine your walking trip and your visit with other activities?We can arrange visits to our partner multi- activity operators and centres throughout Wales at discounted rates for our clients.</p>

        <ul>
          <li>Mountain Biking</li>
          <li>Coasteering</li>
          <li>Gorge walking</li>
          <li>Climbing</li>
          <li>Abseiling</li>
          <li>High Rope zip lining</li>
          <li>Pony trekking</li>
          <li>Sea kayaking</li>
        </ul>

        <p>And a whole range of other great activities for all ages and abilities.</p>

        <p><strong>Contact us for further details and pricing – we can put together a great package, from ½, full or multi-day programs, including transport, meals and accommodation!</strong></p>
      </div>
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

