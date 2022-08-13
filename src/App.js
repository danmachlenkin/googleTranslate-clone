import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavigationBar/NavBar';
import LeftContainer from './Components/Translateor/LeftContainer';
import RightContainer from './Components/Translateor/RightContainer';
import TranslateButton from './Components/Translateor/TranslateButton';



function App() {
  const [translateFromLanguage, setTranslateFromLanguage] = useState('en');
  const [translateToLanguage, setTranslateToLanguage] = useState('en')


  return (
    <div className="App">
      <NavBar />
      <main>
      <LeftContainer translateFromValue={setTranslateFromLanguage}/>
      <TranslateButton translateFrom={translateFromLanguage} translateTo={translateToLanguage} />
      <RightContainer translateToValue={setTranslateToLanguage}/>
      </main>
    </div>
  );
}

export default App;
