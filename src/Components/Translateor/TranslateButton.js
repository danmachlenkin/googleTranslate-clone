import React, { useState } from "react";
import classes from "./TranslateButton.module.css";

const TranslateButton = (props) => {
  const [translatedText, setTranslatedText] = useState(
    "Choose a language to translate to please."
  );

  let translateFromLanguage = props.translateFrom;
  let translateToLanguage = props.translateTo;
  let userInputText = props.userInput;

  const encodedParams = new URLSearchParams();
  encodedParams.append("q", `${userInputText}`);
  encodedParams.append("target", `${translateToLanguage}`);
  encodedParams.append("source", `${translateFromLanguage}`);

  let options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "63e15a19f0msh4875b70a93c6da8p198747jsnb0d3c81be5f3",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    body: encodedParams,
  };

  const translateTextHandler = () => {
    fetch(
      "https://google-translate1.p.rapidapi.com/language/translate/v2",
      options
    )
      .then((response) => response.json())
      .then((response) =>
        setTranslatedText(response.data.translations[0].translatedText)
      )
      .catch((err) => console.error(err));

      props.translatedText(translatedText);
  };

  return (
    <button className={classes.btn2} onClick={translateTextHandler}>
      Translate!
    </button>
  );
};

export default TranslateButton;
