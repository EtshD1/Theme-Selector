import React from 'react';
import Styles from './styles/header.module.css';

const Title = () => {
  return <header id={Styles.headerSection}>
    <div>
      <h1>Front-End Web Developer</h1>
      <p>Attempting to do anything and everything using Node.js, JavaScript, TypeScript, React, and Flutter</p>
    </div>
  </header>
}

export default Title;