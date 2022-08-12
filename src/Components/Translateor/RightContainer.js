import React, {useState} from "react";
import classes from "./RightContainer.module.css";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const RightContainer = (props) => {
  const [translateToLang, setTranslateToLang] = useState('')

  return (
    <div className={classes.right__container}>
      <Select
        placeholder="Translate To..."
        onChange={setTranslateToLang}
        options={options}
      />
      <div className={classes.right__textarea}>
        <p>Some Translation...</p>
      </div>
    </div>
  );
};

export default RightContainer;
