import React, { useRef } from 'react';
import Styles from './styles/navbar.module.css';

interface link {
  name: string,
  to?: Function,
  href?: string
}

const NavLink = (props: link) => <li>
  <div>
    <a href={props.href}>{props.name}</a>
  </div>
</li>

const DropDown = () => {
  const Li = useRef<HTMLLIElement | null>(null);

  return <li ref={Li} className={Styles.themeSelector}>
    <div>
      <button>
        <div>Themes</div>
      </button>
    </div>
    <ul className={Styles.dropdown}>
      <li>
        <button>Light</button>
      </li>
      <li>
        <button>Dark</button>
      </li>
      <li>
        <button>Solarized</button>
      </li>
    </ul>
  </li>
}

const Navbar = () => {
  return <nav>
    <ul className={Styles.navbar}>
      <NavLink name='Home' />
      <NavLink name='About' />
      <DropDown />
      <NavLink name='More' />
    </ul>
  </nav>
}

export default Navbar;