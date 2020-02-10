import { Link } from "gatsby"
import React from "react"

import breconbeacons from "../../static/assets/images/breconbeacons_menu.png"
import gower from "../../static/assets/images/gower_menu.png"
import pembrokeshire from "../../static/assets/images/pembrokeshire_menu.png"
import wyevalley from "../../static/assets/images/wyevalley_menu.png"
import snowdonia from "../../static/assets/images/snowdonia_menu.png"


const SideBar = () => {

return (
  <aside
      style={{
        maxWidth: 150
      }}
    >

      <ul className="sidebar">
          <li>
            <Link to="/BreconBeacons">
              <img src={breconbeacons} alt="Brecon Beacons National Park" />
            Brecon Beacons National Park
            </Link>
          </li>
          <li>
            <Link to="/GowerPeninsula">
                   <img src={gower} alt="Gower Peninsula" />
              Gower Peninsula
            </Link>
          </li>
          <li>
            <Link to="/Pembrokeshire">
                   <img src={pembrokeshire} alt="Pembrokeshire and Ceredigion" />
                Pembrokeshire
            </Link>
          </li>
          <li>
          <Link to="/WyeValley">
                 <img src={wyevalley} alt="Wye Valley" />
               Wye Valley
          </Link>
          </li>
          <li>
          <Link to="/Snowdonia">
             <img src={snowdonia} alt="Snowdonia National Park" />
            Snowdonia
          </Link>
          </li>
      </ul>
  </aside>
) }


export default SideBar



