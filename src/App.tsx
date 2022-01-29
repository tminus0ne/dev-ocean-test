import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout';
import CompaniesList from './pages/CompaniesList';
import CompanyCard from './pages/CompanyCard';

import './index.scss';

const App: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/companies" />} />
        <Route path="/companies" element={<CompaniesList />} />

        <Route path="/companies/:id" element={<CompanyCard />} />

        <Route path="*" element={<Navigate to="/companies" />} />
      </Routes>
    </Layout>
  );
};

export default App;
