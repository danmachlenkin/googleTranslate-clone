import React, { Fragment } from "react";
import classes from "./NavBar.module.css";

import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <Fragment>
      <nav className={classes.header}>
        <h1>Google Translate Clone</h1>
        <ul>
          <li>
            <NavLink
              to={"/"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              style={{ textDecoration: "none", color: "white" }}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default NavBar;
