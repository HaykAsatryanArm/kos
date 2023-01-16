import React from 'react';
import styles from './Title.module.scss';

const Title = (props) => {
  return (
    <h2 className={styles.title} dangerouslySetInnerHTML={{__html: props.name.toUpperCase()}}></h2>
  )
}

export default Title;
