import React from "react";
import classes from './RightContainer.module.css';

const OutputBox = (props) => {
  return (
    <div className={classes.right__container}>
      <p>Translate To _____</p>
      <div className={classes.right__textarea}>
        <p>Some Translation...</p>
      </div>
    </div>
  );
};

export default OutputBox;
