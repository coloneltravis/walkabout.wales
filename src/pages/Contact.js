import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import ContactForm from "../components/contactform"

const ContactPage = ({data}) => (
  <Layout pageInfo={{ pageTitle: `Contact` }}>
    <SEO title="Contact" />
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem`, padding: `4px` }}>
      <Img fluid={data.file.childImageSharp.fluid} />

        <div style={{padding: `10px`}}>
          <ContactForm />
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

export default ContactPage

