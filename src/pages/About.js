import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem`, padding: `4px` }}>
      <Img fluid={data.file.childImageSharp.fluid} />

      <div style={{padding: `1em`}}>
        <p>
          Our lead guide Clive, has had many years experience of planning, organising and leading walks, both in Wales and overseas. Apart from leading walks in the UK, he has led and participated in walks and treks in the Pyrenees, Gredos and Sierra Nevada mountain ranges of Spain and the High Atlas Mountains of Morocco, including an ascent of Mount Toubkal, which at 4167m is the highest peak in North Africa. Further afield, he has trekked in the Torres Del Paine national park in the Patagonian Andes, undertaken Jungle treks in Thailand and more recently, was very lucky to be included in a small party that trekked in the fascinating Himalayan kingdom of Bhutan. 
        </p>

        <p>  
          Whilst we want you to enjoy our walks, we take our clients safety extremely seriously and your safety and security in the hills is a priority for us. To ensure that you have a great but safe walking experience, Clive holds a Walking Group Leader qualification, (which is assessed by the Wales Mountain Leader Training Board), has completed a mountain leader training course and holds a NNAS, (National Navigation Award Scheme), gold level certificate in mountain navigation. He also holds a certificate in hill Rescue Emergency Care & First Aid.
        </p>  
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

