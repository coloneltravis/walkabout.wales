import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Share from "../components/Share"

const BeaconsPage = ({data}) => (
  <Layout pageInfo={{ pageTitle: `Brecon Beacons National Park` }}>
    <SEO title="Brecon Beacons" />
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem`, padding: `4px` }}>

    <Share
      socialConfig={{
        twitterHandle: `${data.site.siteMetadata.twitterHandle}`,
        config: {
          url: `${data.site.siteMetadata.url}/BreconBeacons`,
          title: `Brecon Beacons National Park`,
        }
      }}
      tags = {[`breconbeacons`]}
    />

      <div style={{padding: `1em`}}>
        <p dangerouslySetInnerHTML={{ __html: data.regionseMarkdown.childMarkdownRemark.html }} />
      </div>

      <div>
        <span style={{padding: `2px`}}>
          <Img fixed={data.breconbeacons1.childImageSharp.fixed} />
        </span>
        <span style={{padding: `2px`}}>
          <Img fixed={data.breconbeacons2.childImageSharp.fixed} />
        </span>
      </div>
    </div>
  </Layout>
)


export const query = graphql`
query {

  breconbeacons1: file(relativePath: {eq: "walk_areas/breconbeacons_1.png"}) {
    childImageSharp {
        fixed(width: 270) {
            ...GatsbyImageSharpFixed
        }
    }
  }

  breconbeacons2: file(relativePath: {eq: "walk_areas/breconbeacons_2.png"}) {
    childImageSharp {
      fixed(width: 270) {
            ...GatsbyImageSharpFixed
      }
    }
  }

  breconbeacons3: file(relativePath: {eq: "walk_areas/breconbeacons_3.png"}) {
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
  

  regionseMarkdown(childMarkdownRemark: {frontmatter: {slug: {eq: "breconbeacons"}}}) {
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

export default BeaconsPage
