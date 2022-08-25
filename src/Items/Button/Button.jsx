import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <button className={`${styles.button} ${props.className}`} style={{background: props.color}}>
      {props.name}
    </button>
  )
}

export default Button
