import React, { FC } from 'react';
import Heading from '../components/Heading';

const Layout: FC = ({ children }) => {
  return (
    <section className="layout">
      <Heading />

      <main className="main">{children}</main>
    </section>
  );
};

export default Layout;
