import React, { useState } from "react";
import "./navbar.css";
import { useMediaQuery } from "react-responsive";
import webLogo from "../assets/logo.png";
import { Turn as Hamburger } from "hamburger-react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeRedirect from "./homeredirect";
import Routing from "../../components/sections/navsections/routing";
import CardRoute from "../sections/cardsections/cardroute";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 767 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [isOpen, setOpen] = useState(false);

  // For Sticky NavBar
  const [background, setBackground] = useState(false);
  const [color, setColor] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  window.addEventListener("scroll", changeColor);

  return (
    <div>
      <Desktop>
        <div className="desktopNavWrapper">
          <div
            className={
              background ? "desktopNavContent active" : "desktopNavContent"
            }
          >
            <div className="webNameDesktop">
              <HomeRedirect webname="WONDERS" />
              <img src={webLogo} alt="Web Logo" />
            </div>

            <div
              className={
                color ? "desktopNavComponents active" : "desktopNavComponents"
              }
            >
              <div>
                <Link to="/">Home</Link>
              </div>
              <div>
                <Link to="/services">Services</Link>
              </div>
              <div>
                <Link to="/products">Products</Link>
              </div>
              <div className="desktopSignUpWrapper">
                <Link to="/signup">
                  <Button variant="outline-light" id="desktopSignUpButton">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Desktop>

      <Mobile>
        <div className="mobileNavWrapper">
          <div className="mobileNavContent">
            <div className="webName">
              <div onClick={closeMobileMenu}>
                <HomeRedirect webname="WONDERS" />
              </div>
              <img src={webLogo} alt="Web Logo" />
            </div>

            <div onClick={handleClick} className="navHam">
              {click ? (
                <Hamburger rounded toggled={isOpen} color="white" size={35} />
              ) : (
                <Hamburger rounded toggle={setOpen} color="white" size={35} />
              )}
            </div>
          </div>

          <div className={click ? "navComponentsMobile" : "navComponents"}>
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link to="/services" onClick={closeMobileMenu}>
              Services
            </Link>
            <Link to="/products" onClick={closeMobileMenu}>
              Products
            </Link>
            <div className="signButtonWrapper">
              <Link to="/signup" onClick={closeMobileMenu}>
                <Button variant="outline-light" id="signUpButton">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Mobile>
      <div onClick={closeMobileMenu}>
        <Routing />
        <CardRoute />
      </div>
    </div>
  );
};

export default NavBar;
