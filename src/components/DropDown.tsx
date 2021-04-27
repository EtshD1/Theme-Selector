import React from 'react';
import withContext from '../withContext';
import Styles from './styles/navbar.module.css';
import { ContextProviding } from "../Interfaces";

const DropDown = ({ context }: ContextProviding) => {
  const { dark, solarized, setDark, setSolarized } = context;

  const handleLight = () => {
    if (dark) {
      setDark(false);
    }
  }

  const handleSolar = () => {
    if (solarized) {
      setSolarized(false);
    } else {
      setSolarized(true);
    }
  }

  const handleDark = () => {
    if (!dark) {
      setDark(true);
    }
  }

  return <li className={Styles.themeSelector}>
    <div>
      <button>
        <div>Themes</div>
      </button>
    </div>
    <ul className={Styles.dropdown}>
      <li>
        <button className={Styles.lightBtn} onClick={handleLight}>Light</button>
      </li>
      <li>
        <button className={Styles.darkBtn} onClick={handleDark}>Dark</button>
      </li>
      <li>
        <button className={solarized ? Styles.normalBtn : Styles.solarBtn} onClick={handleSolar}>{!solarized ? 'Solarized' : 'Normalize'}</button>
      </li>
    </ul>
  </li>
}

export default withContext(DropDown);