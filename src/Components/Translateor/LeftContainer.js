import React from "react";
import InputBox from "./InputBox";
import classes from "./LeftContainer.module.css";
import Select from "react-select";

const selectLanguageOptions = [
  { value: "en", label: "English" },
  { value: "iw", label: "Hebrew" },
  { value: "es", label: "Spanish" },
  { value: "pt", label: "Portuguese" },
  { value: "ru", label: "Russian" },
];

const LeftContainer = (props) => {
    const chosenLanguageHandler = (event) => {
        const chosenLanguageValue = event.value;
        props.translateFromValue(chosenLanguageValue);
    }

    const userSubmittedTextHandler = (userInput)=> {
        let userSubmittedText = userInput;
        props.userSubmittedText(userSubmittedText);
    }

  return (
    <div className={classes.left__container}>
      <div>
        <Select
          placeholder="Translate from..."
          onChange={chosenLanguageHandler}
          options={selectLanguageOptions}
        />
      </div>
      <InputBox userSubmittedText={userSubmittedTextHandler}/>
    </div>
  );
};

export default LeftContainer;
