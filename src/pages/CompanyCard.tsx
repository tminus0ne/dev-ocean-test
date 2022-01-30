import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import NearbyListItem from '../components/NearbyListItem';

import {
  useFetchCompaniesQuery,
  useGetCompanyQuery,
} from '../features/company/company-api-slice';

import styles from './CompanyCard.module.scss';

const CompanyCard: FC = () => {
  const { id } = useParams();
  const { data: company } = useGetCompanyQuery(id!);

  const { data: companies = [] } = useFetchCompaniesQuery();

  const filteredCompanies = companies.filter(
    (comp) =>
      comp.address.city === company?.address.city && comp.id !== company.id
  );

  return (
    <article className={styles.card}>
      <img src={company?.image} alt="Company logo" className={styles.img} />

      <div className={styles.address}>
        <h3>Address</h3>
        <p>
          {company?.address.number} {company?.address.street}
        </p>
        <p>
          {company?.address.city} {company?.address.country}{' '}
          {company?.address.zip}
        </p>
      </div>

      <div className={styles.contact}>
        <h3>Contacts</h3>
        <p>{company?.phone}</p>
        <p>{company?.email}</p>
      </div>

      <div className={styles.nearby}>
        <h3>Nearby places</h3>
        {filteredCompanies.map((comp) => (
          <NearbyListItem
            key={comp.id}
            companyName={comp.name}
            number={comp.address.number}
            street={comp.address.street}
            city={comp.address.city}
            zip={comp.address.zip}
            link={comp.id}
          />
        ))}
      </div>
    </article>
  );
};

export default CompanyCard;
