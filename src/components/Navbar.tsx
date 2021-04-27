import React from 'react';
import Styles from './styles/navbar.module.css';
import DropDown from './DropDown';
import withContext from "../withContext";

interface ContextProvided {
  context: {
    scrollIntoHome: Function,
    scrollIntoAbout: Function,
    scrollIntoMore: Function
  }
}

interface link {
  name: string,
  to: Function
}

const NavLink = (props: link) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    props.to();
  }

  return <li>
    <div>
      <a href="/" onClick={handleClick}>{props.name}</a>
    </div>
  </li>
}

const Navbar = ({ context }: ContextProvided) => {
  const { scrollIntoAbout, scrollIntoHome, scrollIntoMore } = context;
  return <nav>
    <ul className={Styles.navbar}>
      <NavLink name='Home' to={scrollIntoHome} />
      <NavLink name='About' to={scrollIntoAbout} />
      <DropDown />
      <NavLink name='More' to={scrollIntoMore} />
    </ul>
  </nav>
}

export default withContext(Navbar);