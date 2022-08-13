import React from "react";
import classes from "./RightContainer.module.css";
import Select from "react-select";

const selectLanguageOptions = [
  { value: "en", label: "English" },
  { value: "iw", label: "Hebrew" },
  { value: "es", label: "Spanish" },
  { value: "pt", label: "Portuguese" },
  { value: "ru", label: "Russian" },
];

const RightContainer = (props) => {

  let translatedText = props.translatedText;
  
  const chosenLanguageHandler = (event) => {
      const chosenLanguageValue = event.value;
      props.translateToValue(chosenLanguageValue);
  }

  return (
    <div className={classes.right__container}>
      <Select
        placeholder="Translate To..."
        onChange={chosenLanguageHandler}
        options={selectLanguageOptions}
      />
      <div className={classes.right__textarea}>
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

export default RightContainer;
