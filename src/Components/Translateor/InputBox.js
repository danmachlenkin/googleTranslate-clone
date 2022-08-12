import React from "react";
import classes from './InputBox.module.css';

const InputBox = (props) => {
    return <div className={classes.main}>
        <textarea placeholder="Please Submit Your Text Here...">

        </textarea>
    </div>
}

export default InputBox;