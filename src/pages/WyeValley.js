import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Share from "../components/Share"

const IndexPage = ({data}) => (
  <Layout pageInfo={{ pageTitle: `Wye Valley` }}>
    <SEO title="Wye Valley" />
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem`, padding: `4px` }}>

      <Share
        socialConfig={{
          twitterHandle: `${data.site.siteMetadata.twitterHandle}`,
          config: {
            url: `${data.site.siteMetadata.url}/WyeValley`,
            title: `Wye Valley`,
          }
        }}
        tags = {[`wyevalley`,`riverwye`, `forestofdean`]}
      />

      <div style={{padding: `1em`}}>
        <p>This wonderful, wooded valley that forms the border between England and Wales is excellent walking territory with the river Wye flowing through its deep wooded, limestone gorges and offers the walker a wealth of interest and variety from spectacular viewpoints overlooking the river to quiet wooded trails.</p>
        <p>We’ll walk some of the lesser know trails to beauty spots, discovering evidence of the rich cultural and industrial heritage along the way. Located close to Newport & Cardiff, its ideal for our one day walks or if time allows, why not spend a couple of days or a weekend with us discovering this magical area.</p>
      </div>

      <div>
        <span style={{padding: `2px`}}>
          <Img fixed={data.wyevalley2.childImageSharp.fixed} />
        </span>
        <span style={{padding: `2px`, float:`right`}}>
          <Img fixed={data.wyevalley3.childImageSharp.fixed} />
        </span>
      </div>
    </div>
  </Layout>
)


export const query = graphql`
query {
  wyevalley2: file(relativePath: {eq: "walk_areas/wye_valley_2.png"}) {
    childImageSharp {
        fixed(width: 270) {
            ...GatsbyImageSharpFixed
        }
    }
  }

  wyevalley3: file(relativePath: {eq: "walk_areas/wye_valley_3.png"}) {
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
}`

export default IndexPage

