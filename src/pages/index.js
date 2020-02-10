import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Share from "../components/Share"


const IndexPage = ({data}) => (
  <Layout pageInfo={{ pageTitle: `Welcome` }}>
    <SEO title="Home" />
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem`, padding: `4px` }}>
    <Img fluid={data.file.childImageSharp.fluid} />

      <Share
				  socialConfig={{
					  twitterHandle: `${data.site.siteMetadata.twitterHandle}`,
					  config: {
						  url: `${data.site.siteMetadata.url}`,
						  title: `${data.site.siteMetadata.title}`,
            }
          }}
          tags = {[]}
			/>

      <div style={{padding: `1em`}}>
        <p>
          Take a walk on the wild side with us on our guided walks throughout Wales, including the beautiful national parks of the Brecon Beacons, Pembrokeshire Coast Path and Snowdonia.
        </p>

        <p>  
          Our walking programs cover anything from a half day, gentle strolls, to longer, multi-day trekking with accommodation and meals.
        </p>

        <p>  
          We tailor make a program to suit your requirements and budget. We cater for both individuals and groups of all abilities and fitness levels and operate trips throughout the year.
        </p>

        <p>  
          We can arrange to collect you from your hotel or guest house in our people carrier or minibus, depending on size of group and transport you to the walk start or outdoor activity centres and return you following the walk.
        </p>

        <ul>
          <li>We pick you up from your accommodation - No need for own transport.</li>
          <li>Walks are flexible and tailored to suit you or the group's ability and fitness levels.</li>
          <li>Gentle, half day walks to more strenuous single or multi day trips.</li>
          <li>We arrange everything: including Transport, accommodation on multi day treks and food if required.</li>
          <li>Accommodation to suit your budget - from basic, bunkhouse type dorm rooms to en suite, guest house and hotels accommodation.</li>
          <li>Fully qualified walk leaders and activity instructors to ensure your safety and enjoyment.</li>
          <li>We always try to make the walks a really enjoyable experience for our guests and we usually end the walks in a local pub for a drink and a chat if time allows. Also, food is very important to us and we always try to ensure our clients have very good meals on our weekends or longer treks.</li>
        </ul>

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

  site {
		siteMetadata {
			url
      twitterHandle
      title
		}
	}
}`

export default IndexPage


