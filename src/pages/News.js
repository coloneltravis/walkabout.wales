import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const NewsPage = ({data}) => (
  <Layout pageInfo={{ pageTitle: `News` }}>
    <SEO title="News" />
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem`, padding: `4px` }}>

      <div style={{marginBottom: `20px`}}>
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>

      <div>
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <div key={node.id}>
              <div className="news-title">{node.frontmatter.title}</div>
              <div className="publish-date">{node.frontmatter.date}</div>
               <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
          ))}
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

  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        id
        html
        frontmatter {
          title
          status
          date(formatString: "DD MMMM Y")
        }
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

export default NewsPage


