import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavigationBar/NavBar';
import LeftContainer from './Components/Translateor/LeftContainer';
import RightContainer from './Components/Translateor/RightContainer';
import TranslateButton from './Components/Translateor/TranslateButton';



function App() {
  const [translateFromLanguage, setTranslateFromLanguage] = useState('en');
  const [translateToLanguage, setTranslateToLanguage] = useState('en')
  const [userInput, setUserInput] = useState(undefined);
  const [translatedText, setTranslatedText] = useState('');

  


  return (
    <div className="App">
      <NavBar />
      <main>
      <LeftContainer translateFromValue={setTranslateFromLanguage} userSubmittedText={setUserInput}/>
      <TranslateButton translateFrom={translateFromLanguage} translateTo={translateToLanguage} userInput={userInput} translatedText={setTranslatedText}/>
      <RightContainer translateToValue={setTranslateToLanguage} translatedText={translatedText}/>
      </main>
    </div>
  );
}

export default App;
