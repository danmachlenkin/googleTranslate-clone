import React, { useState } from "react";
import NavBar from "./Components/NavigationBar/NavBar";
import LeftContainer from "./Components/Translateor/LeftContainer";
import RightContainer from "./Components/Translateor/RightContainer";
import TranslateButton from "./Components/Translateor/TranslateButton";
import NotFound from "./Components/pages/NotFound";
import About from "./Components/pages/About";
import { Route, Routes } from "react-router-dom";

//CSS imports
import "./App.css";

function App() {
  const [translateFromLanguage, setTranslateFromLanguage] = useState("en");
  const [translateToLanguage, setTranslateToLanguage] = useState("en");
  const [userInput, setUserInput] = useState(undefined);
  const [translatedText, setTranslatedText] = useState("");

  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path={'/about'} element={<About/>} ></Route>
          <Route
            path="/"
            element={
              <React.Fragment>
                <LeftContainer
                  translateFromValue={setTranslateFromLanguage}
                  userSubmittedText={setUserInput}
                />
                <TranslateButton
                  translateFrom={translateFromLanguage}
                  translateTo={translateToLanguage}
                  userInput={userInput}
                  translatedText={setTranslatedText}
                />
                <RightContainer
                  translateToValue={setTranslateToLanguage}
                  translatedText={translatedText}
                />
              </React.Fragment>
            }
          ></Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
