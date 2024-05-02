import React, { useRef } from "react";
import "./Header.scss";
import logo from "../../assets/movix-logo.svg";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const menuRef = useRef();
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    ////console.log(window.scrollY, window.scrollX);
    window.addEventListener("scroll", myScrollLisneter);
    //console.log(window.scrollY, lastScrollY, show);
    return () => {
      window.removeEventListener("scroll", myScrollLisneter);
    };
  }, [location]);

  useEffect(() => {}, []);

  const myScrollLisneter = (e) => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  const openMenu = () => {
    setMobileMenu(true);
    setMobileView(true);
    //console.log(mobileMenu);
  };

  const closeMenu = () => {
    setMobileMenu(false);
    setMobileView(false);
    //console.log(mobileMenu);
  };

  const navigatorFun = (tag) => {
    //console.log(tag);
    if (tag == "tv") navigate(`/explore/tv`);
    else navigate(`/explore/movies`);
  };

  return (
    <header className={`header ${mobileView ? "mobileview" : ""} ${show}`}>
      <div className="containner">
        <div className="logo">
          <img
            src={logo}
            alt=""
            onClick={() => {
              navigate(`/`);
            }}
          ></img>
        </div>
        <ul className="menuitems">
          <li
            className="menuitem item"
            onClick={() => {
              navigatorFun("movies");
            }}
          >
            Movies
          </li>
          <li
            className="menuitem item"
            onClick={() => {
              navigatorFun("tv");
            }}
          >
            TV shows
          </li>
          <li className="menuitem searchbtn">
            <HiOutlineSearch
              onClick={() => {
                setShowSearch(true);
              }}
            />
          </li>
        </ul>
        <div className="mobilemenuitems">
          <HiOutlineSearch
            onClick={() => {
              setShowSearch(true);
            }}
          />
          {mobileMenu ? (
            <VscChromeClose onClick={closeMenu} />
          ) : (
            <SlMenu onClick={openMenu} />
          )}
        </div>
      </div>

      {showSearch && (
        <div className="searchBar">
          <div className="searchInput">
            <input
              type="text"
              className="searchInput"
              placeholder="Search for a movie or tv show...."
            />
            <VscChromeClose
              onClick={() => {
                //console.log("search close btn clicked");
                setShowSearch(false);
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
