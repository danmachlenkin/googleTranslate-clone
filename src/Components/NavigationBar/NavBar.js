import React, { Fragment } from "react";
import classes from './NavBar.module.css'

const NavBar = (props) => {
    return <Fragment>
        <nav className={classes.header}>
            <h1>Google Translate Clone</h1>
            <ul>
                <li>Main</li>
                <li>About</li>
            </ul>
        </nav>
    </Fragment>
};

export default NavBar;