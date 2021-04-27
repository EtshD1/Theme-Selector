import React from 'react';
import withContext from '../withContext';
import Styles from './styles/body.module.css';

interface providedContext {
  context: {
    about: React.RefObject<HTMLDivElement>,
    home: React.RefObject<HTMLDivElement>
  }
}

const Body = ({ context }: providedContext) => {
  const { home, about } = context;

  return (<div className={Styles.main}>
    <div ref={home}>
      <h3>Home</h3>
      <h4>Hello!</h4>
      <p>I am a self-taught Web Developer who is always motivated to develop creative applications and improve upon myself. I always seek ways to do things differently, better, and faster.</p>
      <p>My stack includes: Node.js, Python, TypeScript, React, ExpressJS, Flask, Flutter, and Django</p>
    </div>
    <div ref={about}>
      <h3>About</h3>
      <h4>Motivation</h4>
      <p>My motivation behind this project was to use TypeScript along with React.</p>
      <p>Here are some links to resources that inspired me to do this project:</p>
      <ul className={Styles.links}>
        <li><a target="_blank" rel="noreferrer" href="https://youtu.be/ydkQlJhodio">How to use TypeScript with React... But should you?</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://youtu.be/rXuHGLzSmSE">CSS Theme Switcher by Reverse-Engineering Alligator.io</a></li>
      </ul>
    </div>
  </div>);
}

export default withContext(Body);