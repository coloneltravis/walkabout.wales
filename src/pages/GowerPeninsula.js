import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Share from "../components/Share"

const IndexPage = ({data}) => (
  <Layout pageInfo={{ pageTitle: `Gower Peninsula` }}>
    <SEO title="Gower Peninsula" />
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem`, padding: `4px` }}>

    <Share
      socialConfig={{
        twitterHandle: `${data.site.siteMetadata.twitterHandle}`,
        config: {
          url: `${data.site.siteMetadata.url}/GowerPeninsula`,
          title: `Gower Peninsula`,
        }
      }}
      tags = {[`gower`,`peninsula`]}
    />

      <div style={{padding: `1em`}}>
        <p dangerouslySetInnerHTML={{ __html: data.regionseMarkdown.childMarkdownRemark.html }} />
      </div>

      <div style={{marginLeft: `0px`}}>
        <Img fixed={data.gowerpeninsular1.childImageSharp.fixed} />

        <div style={{marginRight: `0px`, float: `right`}}>
          <Img fixed={data.gowerpeninsular2.childImageSharp.fixed} />
        </div>
      </div>
    </div>
  </Layout>
)


export const query = graphql`
query {

  gowerpeninsular1: file(relativePath: {eq: "walk_areas/gower_peninsular.png"}) {
    childImageSharp {
        fixed (width:270) {
            ...GatsbyImageSharpFixed
        }
    }
  }

  gowerpeninsular2: file(relativePath: {eq: "walk_areas/gower_peninsular_2.png"}) {
    childImageSharp {
      fixed (width:270) {
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
  
  regionseMarkdown(childMarkdownRemark: {frontmatter: {slug: {eq: "gower"}}}) {
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

