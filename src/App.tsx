import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout';
import CompaniesList from './pages/CompaniesList';
import CompanyCard from './pages/CompanyCard';

import './index.scss';

const App: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CompaniesList />} />

        <Route path=":id" element={<CompanyCard />} />
      </Routes>
    </Layout>
  );
};

export default App;
