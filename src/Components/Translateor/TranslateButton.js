import React from "react";
import classes from "./TranslateButton.module.css";

const TranslateButton = ({ translateFrom, translateTo }) => {
  let translateFromLanguage = translateFrom;
  let translateToLanguage = translateTo;

  const translateTextHandler = () => {};

  return(
  <button className={classes.btn2} onClick={translateTextHandler}>
    Translate!
  </button>
  )
};

export default TranslateButton;
