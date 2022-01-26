import React, { FC } from 'react';

import styles from './Heading.module.scss';
import arrow from '../../public/assets/arrow.png';

const Heading: FC = () => {
  return (
    <div className={styles.logo}>
      <img src={arrow} alt="Project logo" height={15} width={10} />
      <p>LOGO</p>
    </div>
  );
};

export default Heading;
