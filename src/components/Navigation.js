import { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import "./Navigation.css";
import MenuData from "../data/MenuData";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <aside>
      <div className="navbar">
        <div className="navbar-toggle">
          <Link to="#" className="menu-bar">
            <FaBars onClick={toggleMenu} />
          </Link>
        </div>
      </div>
      <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-item" onClick={toggleMenu}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bar">
              <FaWindowClose />
            </Link>
          </li>
          {MenuData.map((el, idx) => (
            <li className="menu-text" key={idx}>
              <Link to={el.path}>
                {el.Icon}
                <span>{el.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Navigation;
