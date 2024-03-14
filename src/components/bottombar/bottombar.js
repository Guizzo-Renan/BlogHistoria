
import "./bottombar.css";

import React, { useState } from "react";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function Bottombar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar__Bottom">
	  <div className="nav-container">
          
       
          
       
         

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
            <div className="nav-links">teste</div>
            </li>
			<li className="nav-item">
            <div className="nav-links">teste</div>
            </li>
			<li className="nav-item">
            <div className="nav-links">teste</div>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Bottombar;

/* */