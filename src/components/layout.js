
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import SideBar from "./sidebar"

import "./layout.css"

const Layout = ({ children, pageInfo }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          twitterHandle
          url
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >

      <SideBar/>
      
        <main
          style={{
            marginLeft: 170,
            maxWidth: 800
          }}>
            <h2 className="page-title">{pageInfo.pageTitle}</h2>
           {children}
        </main>
      
        <footer>
          © {new Date().getFullYear()}, Built with GatsbyJS
          {` `}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
