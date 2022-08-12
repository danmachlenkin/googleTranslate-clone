import React, { Fragment } from "react";
import InputBox from "./InputBox";
import classes from './LeftContainer.module.css';

const LeftContainer = (props) => {
    return <div className={classes.left__container}>   
        <p>Translate From _______ </p>
        <InputBox />   
    </div>
}

export default LeftContainer;