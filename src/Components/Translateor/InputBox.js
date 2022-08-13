import React,{useRef} from "react";
import classes from './InputBox.module.css';


const InputBox = (props) => {
    const userInputRef = useRef();
    
    const userInputHandler = () => {
        let userInputText = userInputRef.current.value;
        props.userSubmittedText(userInputText);
    }

    return <div className={classes.main}>
        <textarea placeholder="Please Submit Your Text Here..." ref={userInputRef} onMouseLeave={userInputHandler}>

        </textarea>
    </div>
}

export default InputBox;