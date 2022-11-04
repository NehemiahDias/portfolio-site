import React, { useContext, useRef } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../MainComponent";
import "./HeaderComponent.css";

function HeaderComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  var navRef = useRef();
  var burgerRef = useRef();

  const headerStyle = {
    common: {
      transition: "all 1s ease",
    },
  };

  const themeStyle = {
    ...headerStyle.common,
  };

  const toggleNav = () => {
    navRef.current.classList.toggle("nav-active");
  };
  const toggleBurger = () => {
    burgerRef.current.classList.toggle("toggle");
  };
  const actions = () => {
    toggleNav();
    toggleBurger();
  };

  return (
    <header className={theme === "dark" ? "dark transition-all duration-300" : "light transition-all duration-300"}>
      <div
        className="flex w-full justify-around items-center h-[70px] backdrop-blur-md z-50 fixed top-0"
        style={themeStyle}
        id="header-nav"
      >
        <div className="nav-logo">
          <h1 className="text-3xl text-black-500 dark:text-white-500">ND</h1>
        </div>
        <nav
          className="flex justify-around w-[70%]"
          id="navbar"
          style={themeStyle}
          ref={navRef}
        >
          <ul className="sub-text flex gap-3 flex-wrap w-full justify-evenly list-none">
            <li>
              <a
                className="no-underline transition-all dark:text-white-500 text-black-500 hover:text-lightPurple-500"
                onClick={actions}
                href="/#"
              >
                <span className="text-lightPurple-500 transition-all">
                  {">"}{" "}
                </span>
                Home
              </a>
            </li>
            <li>
              <a
                className="no-underline transition-all dark:text-white-500 text-black-500 hover:text-lightPurple-500"
                onClick={actions}
                href="#projects-section"
              >
                <span className="text-lightPurple-500 transition-all">
                  {">"}{" "}
                </span>
                Projects
              </a>
            </li>
            <li>
              <a
                className="no-underline transition-all dark:text-white-500 text-black-500 hover:text-lightPurple-500"
                onClick={actions}
                href="#about-me"
              >
                <span className="text-lightPurple-500 transition-all">
                  {">"}{" "}
                </span>
                About
              </a>
            </li>
            <li>
              <a
                className="no-underline transition-all dark:text-white-500 text-black-500 hover:text-lightPurple-500"
                onClick={actions}
                href="#contact-section"
              >
                <span className="text-lightPurple-500 transition-all">
                  {">"}{" "}
                </span>
                Contact
              </a>
            </li>
            <li>
              <div className="switch-button flex items-center gap-[10px]">
                {" "}
                {theme === "dark" ? (
                  <i className="fa-solid fa-moon text-black-500 dark:text-white-500"></i>
                ) : (
                  <i className="fa-solid fa-sun text-black-500 dark:text-white-500"></i>
                )}
                <Switch
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                  onColor={"#ACA7CB"}
                  offColor={"#3C3C3C"}
                  checkedIcon={false}
                  uncheckedIcon={false}
                />
              </div>
            </li>
          </ul>
        </nav>
        <div className="burger" ref={burgerRef} onClick={actions}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
