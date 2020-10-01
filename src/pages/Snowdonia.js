import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Share from "../components/Share"

const IndexPage = ({data}) => (
  <Layout pageInfo={{ pageTitle: `Snowdonia National Park` }}>
    <SEO title="Snowdonia National Park" />
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem`, padding: `4px` }}>

      <Share
        socialConfig={{
          twitterHandle: `${data.site.siteMetadata.twitterHandle}`,
          config: {
            url: `${data.site.siteMetadata.url}/Snowdonia`,
            title: `Snowdonia National Park`,
          }
        }}
        tags = {[`snowdonia`,`mountains`]}
      />

      <div style={{padding: `1em`}}>
        <p dangerouslySetInnerHTML={{ __html: data.regionseMarkdown.childMarkdownRemark.html }} />
      </div>

      <div>
        <span style={{padding: `2px`}}>
          <Img fixed={data.snowdonia1.childImageSharp.fixed} />
        </span>
        <span style={{padding: `2px`, float: `right`}}>
          <Img fixed={data.snowdonia2.childImageSharp.fixed} />
        </span>
      </div>
    </div>
  </Layout>
)


export const query = graphql`
query {

  snowdonia1: file(relativePath: {eq: "walk_areas/snowdonia_1.png"}) {
    childImageSharp {
        fixed(width: 270) {
            ...GatsbyImageSharpFixed
        }
    }
  }

  snowdonia2: file(relativePath: {eq: "walk_areas/snowdonia_2.png"}) {
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
  
  regionseMarkdown(childMarkdownRemark: {frontmatter: {slug: {eq: "snowdonia"}}}) {
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

