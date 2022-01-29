import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Heading.module.scss';
import arrow from '../../public/assets/arrow.png';

const Heading: FC = () => {
  return (
    <div className={styles.logo}>
      <img src={arrow} alt="Project logo" height={15} width={10} />
      <NavLink to="/companies">
        <p>LOGO</p>
      </NavLink>
    </div>
  );
};

export default Heading;
