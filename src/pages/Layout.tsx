import React, { FC } from 'react';
import Heading from '../components/Heading';

const Layout: FC = ({ children }) => {
  return (
    <section className="layout">
      <Heading />
      {children}
    </section>
  );
};

export default Layout;
