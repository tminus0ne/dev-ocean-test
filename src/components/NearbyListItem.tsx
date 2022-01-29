import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NearbyListItem.module.scss';

interface NearbyListProps {
  companyName: string;
  number: string;
  street: string;
  city: string;
  zip: string;
  link: string;
}

const NearbyListItem: FC<NearbyListProps> = ({
  companyName,
  number,
  street,
  city,
  zip,
  link,
}) => {
  return (
    <NavLink className={styles.link} to={`/companies/${link}`}>
      <li className={styles.list}>
        <span> {companyName}</span>
        <span> {number}</span>
        <span> {street}</span>
        <span> {city}</span>
        <span> {zip}</span>
      </li>
    </NavLink>
  );
};

export default NearbyListItem;
