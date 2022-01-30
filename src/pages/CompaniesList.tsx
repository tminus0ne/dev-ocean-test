import React, { FC } from 'react';
import { NavLink, Navigate } from 'react-router-dom';

import { useFetchCompaniesQuery } from '../features/company/company-api-slice';

import CompanyListItem from '../components/CompanyListItem';
import Loader from '../components/Loader';

import styles from './CompaniesList.module.scss';

const CompaniesList: FC = () => {
  const { data = [], isLoading, isError } = useFetchCompaniesQuery();

  if (isError) {
    return <Navigate to="/companies" />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <p>Name</p>
        <p>Description</p>
      </div>

      <ul className={styles.list}>
        {data.map((company) => {
          return (
            <NavLink to={company.id} key={company.id} className={styles.link}>
              <CompanyListItem
                id={company.id}
                name={company.name}
                description={company.description}
              />
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default CompaniesList;
