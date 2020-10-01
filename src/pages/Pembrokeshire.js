import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Share from "../components/Share"

const IndexPage = ({data}) => (

<Layout pageInfo={{ pageTitle: `Pembrokeshire and Ceredigion Coastal Paths` }}>
    <SEO title="Brecon Beacons" />
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem`, padding: `4px` }}>

      <Share
        socialConfig={{
          twitterHandle: `${data.site.siteMetadata.twitterHandle}`,
          config: {
            url: `${data.site.siteMetadata.url}/Pembrokeshire`,
            title: `Pembrokeshire and Ceredigion coastal paths`,
          }
        }}
        tags = {[`pembrokeshire`,`ceredigion`, `coastal`]}
      />

      <div style={{padding: `1em`}}>
        <p dangerouslySetInnerHTML={{ __html: data.regionseMarkdown.childMarkdownRemark.html }} />
      </div>

      <div>
        <span style={{padding: `2px`}}>
          <Img fixed={data.pembrokeshire2.childImageSharp.fixed} />
        </span>
        <span style={{padding: `2px`, float: `right`}}>
          <Img fixed={data.pembrokeshire3.childImageSharp.fixed} />
        </span>
      </div>
    </div>
  </Layout>
)


export const query = graphql`
query {
  pembrokeshire2: file(relativePath: {eq: "walk_areas/pembrokeshire_2.png"}) {
    childImageSharp {
        fixed(width: 270) {
            ...GatsbyImageSharpFixed
        }
    }
  }

  pembrokeshire3: file(relativePath: {eq: "walk_areas/pembrokeshire_3.png"}) {
    childImageSharp {
      fixed(width: 270) {
            ...GatsbyImageSharpFixed
      }
    }
  }

  site {
		siteMetadata {
			url
			twitterHandle
		}
  }
  
  regionseMarkdown(childMarkdownRemark: {frontmatter: {slug: {eq: "pembrokeshire"}}}) {
    id
    childMarkdownRemark {
      frontmatter {
        date(formatString: "DD MMMM Y")
        title
      }
      html
    }
  }
}`

export default IndexPage

