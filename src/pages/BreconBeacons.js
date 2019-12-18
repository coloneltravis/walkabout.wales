import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Share from "../components/Share"

const IndexPage = ({data}) => (
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
        <p>Pen-Y-Fan is located in here and at an altitude of 886 metres, is the highest summit in South Wales. We offer the chance to walk to this summit and others in the range.</p>
        <p>Although the Beacons give a wonderful the impression of remoteness, they are in fact, easily accessible from Cardiff and the other urban conurbations in South Wales. The terrain is varied, from the high summits or ‘Fans’ and long ridges, to lovely river valleys and one of our classic walks in this area is our ‘waterfall’ walk. The fantastic walks we lead are suitable for all abilities and follow the beautiful Hepste and Mellte rivers. There are tremendous views of the various waterfalls, including the most famous; Sgwd Y Eira, in English, the ‘Waterfall of Snow’ which you can actually walk behind its wall of water. Be prepared to get a little damp though !!!</p>
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
}`

export default IndexPage

