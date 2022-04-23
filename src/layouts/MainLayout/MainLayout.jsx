import React from 'react';

import Header from 'components/Header/Header';

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default MainLayout;
