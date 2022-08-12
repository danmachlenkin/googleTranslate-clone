import React from 'react';
import './App.css';
import NavBar from './Components/NavigationBar/NavBar';
import LeftContainer from './Components/Translateor/LeftContainer';
import OutputBox from './Components/Translateor/OutputBox';
import TranslateButton from './Components/Translateor/TranslateButton';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
      <LeftContainer />
      <TranslateButton />
      <OutputBox />
      </main>
    </div>
  );
}

export default App;
