import React, { useState, createContext } from 'react';
import './App.css';
import UsingState from './Components/Context'; 
import UsingEffect from './Components/Effect';

export const DarkThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <>
      <DarkThemeContext.Provider value={theme}>
        <div className={`container ${theme ? 'light' : 'dark'}`}>
          <button onClick={toggleTheme}>Change Theme</button>
          <UsingEffect />
        </div>
      </DarkThemeContext.Provider>
    </>
  );
}

export default App;
