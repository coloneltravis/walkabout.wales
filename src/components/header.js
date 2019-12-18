import React from "react"
import { Link, graphql } from "gatsby"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"


const Header = ({ siteTitle }) => {

  const data = useStaticQuery(
    graphql`
    query {
        file(relativePath: { eq: "walkabout_banner.jpg" }) {
            childImageSharp {
                fixed(width: 800) {
                    ...GatsbyImageSharpFixed
                }
            }
        }

    }`
  )

return (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960
      }}
    >

      <Img fixed={data.file.childImageSharp.fixed} />


      <ul className="menubar">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/Activities">ACTIVITIES</Link>
          </li>
          <li>
            <Link to="/Contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/News">NEWS</Link>
          </li>
      </ul>
    </div>
  </header>
) }



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header



