import React, { useState, useEffect } from "react";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./header.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movieBase-logo.png";

const Header = () => {
  const [show, setShow] = useState("top");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const openMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    setShowSearch(false); // Close search when opening mobile menu
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 200 ? setShow("hide") : setShow("top");
    });
  });

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
      <div className="logo" onClick={() => navigate("/")} style={{ display: "flex", alignItems: "center" }}>
    <img src={logo} alt="" style={{ width: "10%", height: "20%" }} />
    <span style={{ marginLeft: "10px",fontSize: "20px", fontWeight: "bold", background: "-webkit-linear-gradient(#FF4E50, #F9D423)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Movie Base</span>

</div>


        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movie")}>
            Movies
          </li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>
            TV Shows
          </li>
          <li className="menuItem"></li>
        </ul>

        <div className="mobileMenuItems">
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
