import React from 'react';
import Styles from './styles/navbar.module.css';
import DropDown from './DropDown';

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