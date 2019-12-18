import { Link, graphql } from "gatsby"
import { useStaticQuery } from "gatsby"
import React from "react"

const SideBar = () => {

  const data = useStaticQuery(
    graphql`
    query {
      gower: file(relativePath: {eq: "gower_menu.png"}) {
                childImageSharp {
                    fixed (width:134 height:100) {
                        ...GatsbyImageSharpFixed
                    }
                }
        }

      breconbeacons: file(relativePath: {eq: "breconbeacons_menu.png"}) {
        childImageSharp {
            fixed (width:134) {
                ...GatsbyImageSharpFixed
            }
        }
    }

      wyevalley: file(relativePath: {eq: "wyevalley_menu.png"}) {
                    childImageSharp {
                    fixed (width:134) {
                      ...GatsbyImageSharpFixed
                    }
                }
      }
      
      pembrokeshire: file(relativePath: {eq: "pembrokeshire_menu.png"}) {
            childImageSharp {
            fixed (width:134) {
              ...GatsbyImageSharpFixed
            }
        }
      }

    snowdonia: file(relativePath: {eq: "snowdonia_menu.png"}) {
        childImageSharp {
          fixed (width:134) {
            ...GatsbyImageSharpFixed
          }
      }
    }
  
  
  }`
  )

return (
  <aside
      style={{
        maxWidth: 150
      }}
    >

      <ul className="sidebar">
          <li>
            <Link to="/BreconBeacons"
                  style={{backgroundImage: `url(${data.breconbeacons.childImageSharp.fixed.src})` }}>
               Brecon Beacons National Park
            </Link>
          </li>
          <li>
            <Link to="/GowerPeninsula"
                  style={{backgroundImage: `url(${data.gower.childImageSharp.fixed.src})` }}>
              Gower Peninsula
            </Link>
          </li>
          <li>
            <Link to="/Pembrokeshire"
                  style={{backgroundImage: `url(${data.pembrokeshire.childImageSharp.fixed.src})` }}>
                Pembrokeshire
            </Link>
          </li>
          <li>
          <Link to="/WyeValley"
                style={{backgroundImage: `url(${data.wyevalley.childImageSharp.fixed.src})` }}>
               Wye Valley
          </Link>
          </li>
          <li>
          <Link to="/Snowdonia"
            style={{backgroundImage: `url(${data.snowdonia.childImageSharp.fixed.src})` }}>
            Snowdonia
          </Link>
          </li>
      </ul>
  </aside>
) }


export default SideBar



