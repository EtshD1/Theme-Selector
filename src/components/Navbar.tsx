import React, { useRef } from 'react';
import Styles from './styles/navbar.module.css';
import withContext from '../withContext';
import { ContextProviding } from "../Interfaces";

interface link {
  name: string,
  to?: Function,
  href?: string
}

interface ThemeSelector {
  dark: boolean,
  solarized: boolean,
  setDark: Function,
  setSolarized: Function
}

const NavLink = (props: link) => <li>
  <div>
    <a href={props.href}>{props.name}</a>
  </div>
</li>

const DropDown = ({ dark, solarized, setDark, setSolarized }: ThemeSelector) => {
  const Li = useRef<HTMLLIElement | null>(null);

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

  return <li ref={Li} className={Styles.themeSelector}>
    <div>
      <button>
        <div>Themes</div>
      </button>
    </div>
    <ul className={Styles.dropdown}>
      <li>
        <button onClick={handleLight}>Light</button>
      </li>
      <li>
        <button onClick={handleDark}>Dark</button>
      </li>
      <li>
        <button onClick={handleSolar}>Solarized</button>
      </li>
    </ul>
  </li>
}

const Navbar = (props: ContextProviding) => {
  const { dark, solarized, setDark, setSolarized } = props.context

  return <nav className={[dark ? "dark" : "light", solarized ? "solar" : ""].join(" ")}>
    <ul className={Styles.navbar}>
      <NavLink name='Home' />
      <NavLink name='About' />
      <DropDown dark={dark} solarized={solarized} setDark={setDark} setSolarized={setSolarized} />
      <NavLink name='More' />
    </ul>
  </nav>
}

export default withContext(Navbar);