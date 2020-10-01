import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const NewsPage = ({data}) => (
  <Layout pageInfo={{ pageTitle: `News` }}>
    <SEO title="News" />
    <div class="news-container" style={{ maxWidth: `800px`, marginBottom: `1.45rem`, padding: `4px` }}>

      <div style={{marginBottom: `20px`}}>
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>

      {data.allNewseMarkdown.edges.map(({ node }, index) => (
            <div key={node.childMarkdownRemark.id}>
              <div className="news-title">{node.childMarkdownRemark.frontmatter.title}</div>
              <div className="publish-date">{node.childMarkdownRemark.frontmatter.date}</div>
               <div dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }} />
            </div>
          ))}
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

  allNewseMarkdown(sort: {fields: childMarkdownRemark___frontmatter___date, order: DESC}) {
    edges {
      node {
        childMarkdownRemark {
          html
          frontmatter {
            date(formatString: "DD MMMM Y")
            title
          }
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


