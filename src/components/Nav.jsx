import React from "react";
import STYLE from "./nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={STYLE.navContainer}>
      <div className={STYLE.logo}>
        <div className={STYLE.firstDiv}>
          <div className={STYLE.secDiv}>
            <div className={STYLE.thirdDiv}></div>
          </div>
        </div>
        <h3 style={{ margin: "7px", fontFamily: "cursive" }}>movieMingle</h3>
      </div>
      <div className={STYLE.menuBlock}>
        <Link className={STYLE.navLink} to={"/"}>
          Home
        </Link>
        <Link className={STYLE.navLink} to={"/login"}>
          Log in
        </Link>
        <Link className={STYLE.navLink} to={"/gallery"}>
          Gallery
        </Link>
        <Link className={STYLE.navLink} to={"/"}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Nav;
