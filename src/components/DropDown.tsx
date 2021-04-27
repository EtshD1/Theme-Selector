import React from 'react';
import withContext from '../withContext';
import Styles from './styles/navbar.module.css';
import { ContextProviding } from "../Interfaces";

const DropDown = ({ context }: ContextProviding) => {
  const { dark, solarized, setDark, setSolarized } = context;

  const handleLight = () => {
    if (dark) {
      setDark(false);
      localStorage.setItem("dark", "");
    }
  }

  const handleSolar = () => {
    if (solarized) {
      setSolarized(false);
      localStorage.setItem("solarized", "");
    } else {
      setSolarized(true);
      localStorage.setItem("solarized", "true");
    }
  }

  const handleDark = () => {
    if (!dark) {
      setDark(true);
      localStorage.setItem("dark", "true");
    }
  }

  return <li className={Styles.themeSelector}>
    <div>
      <button>
        <div>Themes</div>
      </button>
    </div>
    <ul className={Styles.dropdown}>
      {dark ? <li>
        <button className={Styles.lightBtn} onClick={handleLight}>Light</button>
      </li> : <li>
        <button className={Styles.darkBtn} onClick={handleDark}>Dark</button>
      </li>}
      <li>
        <button className={solarized ? Styles.normalBtn : Styles.solarBtn} onClick={handleSolar}>{!solarized ? 'Solarized' : 'Normalize'}</button>
      </li>
    </ul>
  </li>
}

export default withContext(DropDown);