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
        <p>The Gower Peninsular near Swansea was the first place in Britain to be designated an ‘Area of Outstanding Natural Beauty’, (AONB). With its varied landscapes, stunning beaches and diverse flora and fauna, it certainly deserves this status. Although compact in area, there lovely walks along secluded paths through woodland, heath and hidden coves. Apart from walking, there are fantastic opportunities for water sport activities along beautiful, unspoiled beaches like Llangenthith and Three Cliffs bay and we run surfing, wind surfing, sea kayaking, coastteering, etc.</p> 
        <p>Although the Beacons give a wonderful the impression of remoteness, they are in fact, easily accessible from Cardiff and the other urban conurbations in South Wales. The terrain is varied, from the high summits or ‘Fans’ and long ridges, to lovely river valleys and one of our classic walks in this area is our ‘waterfall’ walk. The fantastic walks we lead are suitable for all abilities and follow the beautiful Hepste and Mellte rivers. There are tremendous views of the various waterfalls, including the most famous; Sgwd Y Eira, in English, the ‘Waterfall of Snow’ which you can actually walk behind its wall of water. Be prepared to get a little damp though !!!</p>
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
}`

export default IndexPage

