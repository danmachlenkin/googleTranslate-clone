import React from "react";
import { NavLink , useNavigate } from "react-router-dom";
import classes from './NotFound.module.css';

const NotFound = () => {
    const navigate = useNavigate();

    return <div className={classes.container}>
        <p>Page Not Found!</p>
        <h2>click <NavLink to={'/'}  style={{borderBottom: '2px solid white'}}>here</NavLink> to head back to home page. </h2>
    </div>
}


export default NotFound;