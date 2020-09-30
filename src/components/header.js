import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import banner from "../../static/assets/images/walkabout_banner.jpg"


const Header = ({ siteTitle }) => {

return (
  <header>
      <img src={banner} alt={siteTitle} />
      <nav>
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
      </nav>
  </header>
) }



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header



