import React, { FC } from 'react';

import styles from './CompaniesListItem.module.scss';

interface ListItemProps {
  id: string;
  name: string;
  description: string;
}

const CompanyListItem: FC<ListItemProps> = ({ name, description }) => {
  return (
    <li className={styles.list}>
      <span>{name}</span>
      <span>{description}</span>
    </li>
  );
};

export default CompanyListItem;
