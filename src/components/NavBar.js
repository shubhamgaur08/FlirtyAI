import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen  } from "./Icons";
 

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>Flirty</span>
            <span id="cap">A.I</span>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon" id="icon">
            <img width="64" height="64" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-dating-modern-dating-flaticons-lineal-color-flat-icons-2.png" alt="external-dating-modern-dating-flaticons-lineal-color-flat-icons-2"/>
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
