import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Title from './components/Title';
import "./components/styles/themes.css";
import Context from './context';

const App = () => {
  const [dark, setDark] = useState(false);
  const [solarized, setSolarized] = useState(false);

  return (<Context.Provider value={{ setSolarized, setDark, solarized, dark }}>
    <div className={[dark ? "dark" : "light", solarized ? "solar" : ""].join(" ")}>
      <Navbar />
      <Title />
    </div>
  </Context.Provider>);
}

export default App;