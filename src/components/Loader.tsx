import React from 'react';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <>
      <div className={styles['lds-spinner']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>LOADING</p>
    </>
  );
};

export default Loader;
