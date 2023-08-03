import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const handler = () => {
    navigate('/');
  }
  return (
    <>
      <nav className="main-nav">
        <div className="logo" onClick={handler}>
          <h2>
            <span>B</span>ook
            <span>S</span>tore
          </h2>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a onClick={()=> navigate('/')}>Home</a>
            </li>
            <li>
              <a onClick={()=> navigate('/about')}>about</a>
            </li>
            {/* <li>
              <a onClick={()=> navigate('/category')}>category</a>
            </li> */}
            <li>
              <a onClick={()=> navigate('/contact')}>contact</a>
            </li>
          </ul>
        </div>

        <div className="social-media">

          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
