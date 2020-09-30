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
       <p>The Pembrokeshire Coast National Park is the UK’s only coastal national park and takes in over 180 miles of some of the most magnificent coastal scenery in Europe. With sea cliffs, secluded coves, sandy beaches, It makes for excellent walking and other water sport activities. Stretching some 60miles,(96km), along cardigan Bay, the Ceredigion Coast Path is a wonderful, wild coastal walking route. It’s coastal waters are a haven for wildlife and is a marine ‘Special Area of Conservation’ and from the path you can frequently observe grey seals, porpoises and bottlenose dolphins, along with many differing species of seabirds. Inland, we offer some great walks in the Presceli hills, which although relatively low in comparison with the Brecon Beacons and Snowdonia, there are some lovely routes, with great, scenic views over the coast. We always ensure that our guests stay at the best available accommodation and place great emphasis on the quality of our meals.</p>
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
}`

export default IndexPage

