import React from 'react';
import './App.css';
import NavBar from './Components/NavigationBar/NavBar';
import LeftContainer from './Components/Translateor/LeftContainer';
import RightContainer from './Components/Translateor/RightContainer';
import TranslateButton from './Components/Translateor/TranslateButton';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
      <LeftContainer />
      <TranslateButton />
      <RightContainer />
      </main>
    </div>
  );
}

export default App;
