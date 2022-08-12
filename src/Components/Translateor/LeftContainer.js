import React, { useState } from "react";
import InputBox from "./InputBox";
import classes from "./LeftContainer.module.css";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const LeftContainer = (props) => {
  const [selectedLang, setSelectedLang] = useState("");
  console.log(selectedLang);
  return (
    <div className={classes.left__container}>
      <div>
        <Select
          placeholder="Translate from..."
          onChange={setSelectedLang}
          options={options}
        />
      </div>
      <InputBox />
    </div>
  );
};

export default LeftContainer;
