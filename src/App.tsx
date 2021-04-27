import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Body from './components/Body';
import "./components/styles/themes.css";
import "./index.css";
import Context from './context';

const App = () => {
  const [dark, setDark] = useState(false);
  const [solarized, setSolarized] = useState(false);
  const about = useRef<HTMLDivElement>();
  const home = useRef<HTMLDivElement>();
  const more = useRef<HTMLDivElement>();

  const scrollIntoHome = () => {
    home.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const scrollIntoMore = () => {
    more.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const scrollIntoAbout = () => {
    about.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (<Context.Provider value={{ setSolarized, setDark, solarized, dark, about, home, more, scrollIntoAbout, scrollIntoHome, scrollIntoMore }}>
    <div className={[dark ? "dark" : "light", solarized ? "solar" : "", "app"].join(" ")}>
      <Navbar />
      <Title />
      <Body />
    </div>
  </Context.Provider>);
}

export default App;