import React from 'react';
import styles from './ColorPicker.css';

/* eslint-disable no-console */
export default function ColorPicker() {
  const redHandler = () => {
    console.log('red');
  };

  const yellowHandler = () => {
    console.log('yellow');
  };

  const blueHandler = () => {
    console.log('blue');
  };

  return (
    <section className={styles.ColorPicker}>
      <button className={styles.red} onClick={redHandler}>Red</button>
      <button className={styles.yellow} onClick={yellowHandler}>Yellow</button>
      <button className={styles.blue} onClick={blueHandler}>Blue</button>
    </section>
  );
}
