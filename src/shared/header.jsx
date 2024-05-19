import Logo from "/logo.svg";
import Search from "/header/search.svg";
import Cart from "/header/cart.svg";
import Arrow from "/header/arrow.svg";
import { useState, useEffect, useRef } from "react";

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [pagesDropdownActive, setPagesDropdownActive] = useState(false);
  const pagesDropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const togglePagesDropdown = (e) => {
    e.preventDefault();
    setPagesDropdownActive(!pagesDropdownActive);
  };

  const handleClickOutside = (e) => {
    if (
      pagesDropdownRef.current &&
      !pagesDropdownRef.current.contains(e.target)
    ) {
      setPagesDropdownActive(false);
    }
  };

  useEffect(() => {
    if (pagesDropdownActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pagesDropdownActive]);

  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src={Logo} alt="logo" />
        <span>Organick</span>
      </a>
      <div className="header__nav">
        <div
          className={`header__backdrop ${menuActive ? "_active" : ""}`}
          onClick={toggleMenu}
        ></div>
        <ul className={`header__ul ${menuActive ? "_active" : ""}`}>
          <li className="header__li">
            <a className="header__a" href="/">
              Home
            </a>
          </li>
          <li className="header__li">
            <a className="header__a" href="/aboutus">
              About
            </a>
          </li>
          <li
            className={`header__li ${pagesDropdownActive ? "active" : ""}`}
            onClick={togglePagesDropdown}
            ref={pagesDropdownRef}
          >
            <a className="header__a pages-link" href="#">
              <span>Pages</span>
              <img className="arrow-icon" src={Arrow} alt="arrow" />
            </a>
            {pagesDropdownActive && (
              <ul className="dropdown">
                <li className="dropdown__li">
                  <a className="dropdown__a" href="/">
                    Page1
                  </a>
                </li>
                <li className="dropdown__li">
                  <a className="dropdown__a" href="/">
                    Page2
                  </a>
                </li>
                <li className="dropdown__li">
                  <a className="dropdown__a" href="/">
                    Page3
                  </a>
                </li>
                <li className="dropdown__li">
                  <a className="dropdown__a" href="/">
                    Page4
                  </a>
                </li>
                <li className="dropdown__li">
                  <a className="dropdown__a" href="/">
                    Page5
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="header__li">
            <a className="header__a" href="/shop">
              Shop
            </a>
          </li>
          <li className="header__li">
            <a className="header__a" href="/projects">
              Projects
            </a>
          </li>
          <li className="header__li">
            <a className="header__a" href="/news">
              News
            </a>
          </li>
          <span className="icon-close" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 50 50">
              <path d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z"></path>
            </svg>
          </span>
        </ul>
      </div>
      <div className="header__btn">
        <a className="header-search" href="/">
          <img className="header-search__icon" src={Search} alt="Search Icon" />
        </a>
        <a href="/" className="header-cart">
          <div className="header-cart__group">
            <img className="header-cart__icon" src={Cart} alt="Cart Icon" />
          </div>
          <span className="header-cart__text">Cart (0)</span>
        </a>
        <span className="icon-menu" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 24 24"
          >
            <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
          </svg>
        </span>
      </div>
    </header>
  );
};
